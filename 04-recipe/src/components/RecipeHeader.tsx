import {AiOutlineFire} from "react-icons/ai"
import {CiWheat} from "react-icons/ci"
import {BiCheese, BiCake} from "react-icons/bi"
import {IoFishOutline} from "react-icons/io5"
import RecipeNutritionalFact from "./RecipeNutritionalFact.tsx";
function RecipeHeader({name, nutritionalFacts}: {name:string, nutritionalFacts: any}) {


    const nutritionalFactsArray: any[] = [
        {
            id: 1,
            amount: nutritionalFacts.calories,
            category: "calories",
            icon: AiOutlineFire,
        },
        {
            id: 2,
            amount: nutritionalFacts.carbohydrates,
            category: "carbs",
            icon: CiWheat,
        },
        {
            id: 3,
            amount: nutritionalFacts.fat,
            category: "fats",
            icon: BiCheese,
        },
        {
            id: 4,
            amount: nutritionalFacts.protein,
            category: "proteins",
            icon: IoFishOutline,
        },
        {
            id: 5,
            amount: nutritionalFacts.sugar,
            category: "sugar",
            icon: BiCake,
        }
    ]
  return(
     <div className="recipe-header">
         <h1>{name}</h1>
         <div className="nutritional-facts-container">
             { nutritionalFactsArray.map(({id, amount, icon: Icon,category}) =>
                 <RecipeNutritionalFact fact={{amount, category}} key={id} >
                                    <Icon/>
                 </RecipeNutritionalFact>

             )}
         </div>


     </div>
  )
}

export default RecipeHeader