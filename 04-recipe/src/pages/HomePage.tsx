import Header from "../components/Header.tsx";
import CardList from "../components/CardList.tsx";
import {FetchRecipesFn, useFetchRecipes} from "../hooks/useFetchRecipes.ts";
import Loading from "../components/Loading.tsx";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

export default function HomePage() {

    const[fetchRecipes, {data,loading, error}] = useFetchRecipes()
    const [searchParams] = useSearchParams()
    useEffect(() => {
        fetchRecipes(searchParams.get("search") || undefined)
    }, []);


    const handleSearch : FetchRecipesFn = async (searchTerm?: string) => {
        searchTerm &&  fetchRecipes(searchTerm)
    }

    return (
        <>
            <Header handleSearch={handleSearch}/>
            {loading && <Loading/>}
            {data && <CardList recipes={data}/> }
            {error && <p>{error}</p> }
        </>

    )
}