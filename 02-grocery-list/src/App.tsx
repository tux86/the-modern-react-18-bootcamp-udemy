import './App.css'
import groceryCartImg from "./assets/grocery-cart.png"
import React, {useState, useEffect} from "react";

interface GroceryItem {
    quantity: number,
    name: string,
    completed: boolean
}

function App() {
    const [inputValue, setInputValue] = useState("")
    const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([])
    const [isCompleted, setIsCompleted] = useState(false)

    useEffect(()=> {
        determineCompletedStatus()
    }, [groceryItems])
    const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const determineCompletedStatus = () => {
        setIsCompleted(groceryItems.length > 0 && groceryItems.every(item => item.completed));
    };
    const handleAddGroceryItem = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            if (!inputValue) {
                return
            }

            const updatedGroceryList: GroceryItem[] = [...groceryItems]

            const groceryItem: GroceryItem | undefined = updatedGroceryList.find(item => item.name === inputValue)

            if (!groceryItem) {
                updatedGroceryList.push({
                    quantity: 1,
                    name: inputValue,
                    completed: false
                })
            } else {
                groceryItem.quantity++
            }

            setGroceryItems(updatedGroceryList)
            setInputValue("")
        }
    }

    const handleRemoveItem = (name: string) => {
        setGroceryItems([...groceryItems].filter(item => item.name !== name))
    }

    const handleUpdateCompleteStatus = (status: boolean, index: number) => {
        const updatedGroceryList: GroceryItem[] = [...groceryItems]
        updatedGroceryList[index].completed = status
        setGroceryItems(updatedGroceryList)

    }
    const renderGroceryList = (): JSX.Element[] => {
        return groceryItems.map((item, index) => (
            <li key={item.name}>
                <div className="container">
                    <input
                        type="checkbox"
                        onChange={(e) => handleUpdateCompleteStatus(e.target.checked, index)}
                        value={String(item.completed)}
                        checked={item.completed}
                    />
                    <p>
                        {item.name} {item.quantity > 1 && <span>x{item.quantity}</span>}
                    </p>
                </div>
                <div className="container">
                    <button className="remove-button" onClick={() => {
                        handleRemoveItem(item.name)
                    }}>X
                    </button>
                </div>
            </li>
        ))
    }
    return (
        <main className="App">
            <div>
                <div>
                    {isCompleted && <h4 className="success">You're Done</h4> }
                    <div className="header">
                        <h1>Shopping List</h1>
                        <img src={groceryCartImg} alt=""/>
                        <input
                            type="text"
                            placeholder="Add an Item"
                            className="item-input"
                            value={inputValue}
                            onChange={handleChangeInputValue}
                            onKeyDown={handleAddGroceryItem}
                        />
                    </div>
                </div>
                <ul>
                    {renderGroceryList()}
                </ul>
            </div>

        </main>
    )
}

export default App
