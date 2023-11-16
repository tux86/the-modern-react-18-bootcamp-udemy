import Card, {Recipe} from "./Card.tsx";

interface CardListProps {
    recipes: Recipe[];
}

const CardList: React.FC<CardListProps> = ({ recipes }) => {

    return (
        <section className="cards">
            {recipes.map((recipe)=> (
                    <Card key={recipe.id} recipe={recipe}/>
            ))}
        </section>
    )
}
export default CardList