import emptyPlate from "../assets/no-food-found.png"
import {Link} from "react-router-dom";

export default function Error({message, explanantion}: {message?: string,explanantion?: string}){
    return (
        <div className="not-found-container">
            <img src={emptyPlate} className="not-found-image"  alt=""/>
            <h1 className="not-found-header">{message ? message : "Oh no!"}</h1>
            <p>{explanantion ? explanantion : "Something went wrong !"}</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}