import {useMemo, useState} from "react";

export default function MemoHook() {

    const [text,setText] = useState("")
    const [person, setPerson] = useState("");

    const isPersonCoolFunc = () => {

        for (let i = 0 ; i<300000000 ;i++) {}
        if (person === "Laith") return "not cool"
        else if (person === "Fourat") return "very cool"
        else if (person === "Walid") return "moderately cool"
        else return ""
    }

    const isPersonCool = useMemo(isPersonCoolFunc, [person])

    return (
        <div>
             <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <div>
                <button onClick={()=> setPerson("Laith")}>Laith</button>
                <button onClick={()=> setPerson("Walid")}>Walid</button>
                <button onClick={()=> setPerson("Fourat")} >Fourat</button>
            </div>
            <p>{isPersonCool}</p>
        </div>
    )
}