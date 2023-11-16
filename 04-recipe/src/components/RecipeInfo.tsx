import {Outlet} from "react-router-dom";

export default function RecipeInfo({instructions,ingredients, imageUrl}: { instructions: any[], ingredients: any[], imageUrl: string }) {
    return (
        <div className="recipe-info">
            <Outlet context={{instructions, ingredients}}/>
            <img className="recipe-img" src={imageUrl} alt=""/>
        </div>
    )
}

