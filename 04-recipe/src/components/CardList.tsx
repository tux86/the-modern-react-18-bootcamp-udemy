import Card, {Recipe} from "./Card.tsx";

const recipes: Recipe[] = [
    {
        id: 1,
        name: "Poke Bowls",
        image: "https://therecipecritic.com/wp-content/uploads/2020/03/Poke-Bowls-2-1.jpg",
        tag: "Romantic Dinner",
        numberOfMinutes: 50
    },
    {
        id: 2,
        name: "Chocolate Banana Cake",
        image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
        tag: "Sweet Tooth",
        numberOfMinutes: 150
    },
    {
        id: 3,
        name: "Shawarma",
        image: "https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg",
        tag: "Chicken",
        numberOfMinutes: 50
    },
    {
        id: 4,
        name: "Kunafa",
        image: "https://i.pinimg.com/originals/5c/52/e4/5c52e4cd9822a681bdd8f2e619c4094d.jpg",
        tag: "Romantic Dinner",
        numberOfMinutes: 30
    }
]
export default function CardList() {
    return (
        <section className="cards">
            {recipes.map((recipe)=> (
                    <Card key={recipe.id} recipe={recipe}/>
            ))}
        </section>
    )
}