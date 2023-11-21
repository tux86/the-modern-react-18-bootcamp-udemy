import {memo} from "react";

function Child({prop} : {prop: any}) {
    console.log("child is re-rendering")
    return (
        <div>
           <h1>{prop}</h1>
        </div>
    )
}

export default  memo(Child)
