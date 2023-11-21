import {useCallback, useState} from "react";
import _ from "lodash"
import Search from "./Search.tsx";
const allAnimals = [
    "Elephant",
    "Tiger",
    "Lion",
    "Rhino",
    "Gorilla"
]
export default function List() {


    const [animals, setAnimals] = useState(allAnimals)
    const handleChange = useCallback((text: string) => {
        setAnimals(allAnimals.filter(animal=> animal.toLowerCase().includes(text)))
    }, [ ])

    return (
        <div>
            <button onClick={()=> {setAnimals(_.shuffle(allAnimals))}}>Shuffle</button>
            <Search onChange={handleChange}/>

            <ul>
                {animals.map((animal,index) => (
                    <li key={index+1}>{animal}</li>
                ))}
            </ul>
        </div>
    )
}