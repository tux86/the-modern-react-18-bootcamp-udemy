import {memo} from "react";

function Search({onChange: handleChange}: {onChange: any}) {
    console.log("search re-rendered")
    return (
        <div>
            <input type="text" onChange={(e)=> handleChange(e.target.value)}/>
        </div>
    )
}


export default memo(Search)