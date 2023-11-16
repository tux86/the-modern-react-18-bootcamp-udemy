import {useState} from "react";
import axios from "axios";
import {Recipe} from "../components/Card.tsx";

interface QueryParams {
    from: string
    size: string,
    q?: string
}

export type FetchRecipesFn = (searchTerm?: string) => {}

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
        from: '0',
        size: '20'
    } as QueryParams,
    headers: {
        'X-RapidAPI-Key': 'c5f7b01606mshcd1febfed652cdfp1c5148jsnf18ab5ece398',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};


export const useFetchRecipes = (): [ FetchRecipesFn, { data: Recipe[] | null, loading: boolean, error: string | null }] => {
    const [recipes, setRecipes] = useState<Recipe[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecipes = async (searchTerm?: string) => {
        setLoading(true)
        setRecipes(null)
        setError(null)
        try {
            const reqOptions = {...options}

            if (searchTerm) {
                reqOptions.params.q = searchTerm
            }

            const response = await axios.request(reqOptions);
            setRecipes(response.data.results as Recipe[]);
            setLoading(false)
        } catch (error: any) {
            console.log(error);
            setError(error.message)
            setLoading(false)
        }
    };

    return [fetchRecipes, {data: recipes, loading, error}];
}