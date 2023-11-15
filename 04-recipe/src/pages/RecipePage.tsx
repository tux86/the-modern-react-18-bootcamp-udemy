import {useParams} from "react-router-dom";
import {recipes} from "../components/CardList.tsx";

export default function RecipePage() {

    const {id}= useParams()

    const recipe = id ? recipes.find((r)=> r.id === Number(id)) : undefined

    console.log(recipe)
    return (
        <>
            {/*<h1>{recipe.name}</h1>*/}
        </>

    )
}