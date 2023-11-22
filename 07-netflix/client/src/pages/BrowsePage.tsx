import NavBar from "../compontents/NavBar.tsx";
import BillBoard from "../compontents/BillBoard.tsx";
import MovieList from "../compontents/MovieList.tsx";

export default function BrowsePage() {
    return(
        <div>
            <NavBar/>
            <BillBoard/>

            <div className="pb-5">
                <MovieList/>
            </div>
        </div>
    )
}