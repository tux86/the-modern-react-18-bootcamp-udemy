import NavBar from "../compontents/NavBar.tsx";
import BillBoard from "../compontents/BillBoard.tsx";
import MovieList from "../compontents/MovieList.tsx";
import useMoviesList from "../hooks/useMoviesList.ts";

export default function BrowsePage() {

    const {data, loading, error} = useMoviesList()

    console.log({data,loading,error})
    return(
        <div>
            <NavBar/>
            <BillBoard/>

            <div className="pb-5">
                {loading && <p>Loading ...</p>}
                {loading && <p>{error}</p>}
                { data && <MovieList movies={data}/>}
            </div>
        </div>
    )
}