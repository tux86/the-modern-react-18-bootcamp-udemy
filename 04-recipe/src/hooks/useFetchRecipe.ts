import {useReducer} from "react";
import axios from "axios";
import {Recipe} from "../components/Card.tsx";

interface QueryParams {
    id: string
}

export type FetchRecipeFn = (id: string) => {}

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: {
        id: '123',
    } as QueryParams,
    headers: {
        'X-RapidAPI-Key': 'c5f7b01606mshcd1febfed652cdfp1c5148jsnf18ab5ece398',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

const initialState  = {
    data: null,
    loading: false,
    error: null
}

const Action = {
    FETCHING_DATA : 'FETCHING_DATA',
    FETCH_SUCCESSFUL : 'FETCH_SUCCESSFUL',
    FETCH_ERROR : 'FETCH_ERROR',
}


const reducer = (_: any, action: any) => {
 switch (action.type) {
     case Action.FETCHING_DATA:
         return {
             data: null,
             error: null,
             loading: true
         }
     case Action.FETCH_SUCCESSFUL:
         return {
             data: action.payload,
             error: null,
             loading: false
         }
     case Action.FETCH_ERROR:
         return {
             data: null,
             error: action.payload,
             loading: false
         }
     default:
         return initialState

 }
}

export const useFetchRecipe = (): [ FetchRecipeFn, { data: Recipe | null, loading: boolean, error: string | null }] => {
    const [{data, loading, error}, dispatch] = useReducer(reducer, initialState)
    const fetchRecipe = async (id: string) => {
        dispatch({type: Action.FETCHING_DATA})
        try {
            const response = await axios.request({...options, params: {id}});
            dispatch({type: Action.FETCH_SUCCESSFUL, payload: response.data})
        } catch (error: any) {
            dispatch({type: Action.FETCH_ERROR, payload: error.message})
        }
    };
    return [fetchRecipe, {data, loading, error}];
}