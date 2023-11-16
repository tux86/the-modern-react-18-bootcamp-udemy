import {useEffect} from "react";
import {useFetchRecipe} from "../hooks/useFetchRecipe.ts";
import {useParams} from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader.tsx";
import Loading from "../components/Loading.tsx";
import RecipeInfo from "../components/RecipeInfo.tsx";

export default function RecipePage() {

    const {id} = useParams();
    const [fetchRecipe, {data, loading, error}] = useFetchRecipe()
    useEffect(() => {
        fetchRecipe(id!)

    }, []);

    if (loading) return <Loading/>
    if (error) return <h1>{error}</h1>

    return (
        <>
            { data && (
                <>
                <RecipeHeader name={data.name} nutritionalFacts={data.nutrition}/>
                <RecipeInfo instructions={data.instructions} imageUrl={data.thumbnail_url}/>
                </>
            )}
        </>

    )
}