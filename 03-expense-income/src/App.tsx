import './App.css'
import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";

interface Input {
    statement: string,
    amount: string,
    statementType: "income" | "expense"
}

interface ShowError {
    statement: boolean,
    amount: boolean
}

interface Statement {
    id: string
    name: string,
    amount: string,
    type: "income" | "expense",
    date: string
}

function App() {

    const [statements, setStatements] = useState<Statement[]>([])

    const [input, setInput] = useState<Input>({
        statement: "",
        amount: "",
        statementType: "income"
    })

    const [showError, setShowError] = useState<ShowError>({
        statement: false,
        amount: false
    })

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let newTotal = 0;
        console.log(statements)
        for (const statement of statements) {
            const { type, amount } = statement;
            if (type === "expense") {
                newTotal -= Number(amount);
            } else {
                newTotal += Number(amount);
            }
        }
        setTotal(newTotal);
    }, [statements]);


    const renderTotal = () => {
        if (total > 0) {
            return <h1 className="total-text success">+{Math.abs(total)}</h1>;
        } else if (total < 0) {
            return <h1 className="total-text danger">-{Math.abs(total)}</h1>;
        } else {
            return <h1 className="total-text">{Math.abs(total)}</h1>;
        }
    }

    const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddNewStatement = () => {
        const {statement, amount, statementType} = input;
        setShowError({
            statement: !statement,
            amount: !!statement && !amount
        });

        setStatements([...statements,
            {
                id :uuidv4(),
                name: statement,
                amount: String(parseFloat(amount).toFixed(2)),
                type: statementType,
                date: new Date().toDateString()
            }])

        setInput({
            statement:"",
            amount: "",
            statementType: "income"
        })
    };


    return (
        <main>
            <div>
                {renderTotal()}
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Income or expense"
                        onChange={handleUpdateInput}
                        value={input.statement}
                        name="statement"
                        style={showError.statement ? {borderColor: "red"} : undefined}
                    />
                    <input type="number"
                           placeholder="$5000"
                           onChange={handleUpdateInput}
                           value={input.amount}
                           name="amount"
                           style={showError.amount ? {borderColor: "red"} : undefined}
                    />
                    <select onChange={handleUpdateInput}
                            value={input.statementType}
                            name="statementType"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <button onClick={handleAddNewStatement}>+</button>
                </div>
                <div>
                    {statements.map(({id, name, type, amount, date}) => (
                        <div className="card" key={id}>
                            <div className="card-info">
                                <h4>{name}</h4>
                                <p>{date}</p>
                            </div>
                            <p className={`amount-text ${type === 'income' ? 'success': 'danger'}`}>
                                {type === 'income' ? '+': '-'}${amount}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App
