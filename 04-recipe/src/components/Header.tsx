import {useState} from "react";
import {FetchRecipesFn} from "../hooks/useFetchRecipes.ts";
import {useSearchParams} from "react-router-dom";
function Header({handleSearch}: {handleSearch: FetchRecipesFn}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [_, setSearchParams] = useSearchParams()

    const handleClick = () => {
        handleSearch(searchTerm)

        if (searchTerm) {
            setSearchParams({
                search : searchTerm
            })
        }
    }

  return(
      <header className="main_header">
          <div className="text-container">
              <h1 className="header-title">
                  Look for <span>Banger</span> Food
              </h1>
              <p className="header-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="header-input-container">
                  <input type="text" placeholder="Find a recipe..." onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm}/>
                  <button onClick={handleClick}>Search</button>
              </div>
          </div>
          <div>
              <img src="https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*" className="main_img" alt=""/>
          </div>
      </header>
  )
}

export default Header