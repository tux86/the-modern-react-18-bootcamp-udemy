import {useNavigate} from "react-router-dom";

export interface Recipe {
    id: number,
    thumbnail_url: string
    name: string
    topics: any[]
    total_time_minutes: number,
    nutrition: any,
    instructions: any
    sections: any[]
}

interface CardProps {
    recipe: Recipe;
}

const Card: React.FC<CardProps> = ({ recipe }) => {

    const {id, thumbnail_url, name, topics, total_time_minutes} = recipe
    const navigate = useNavigate()
    const navigateToRecipePage = () => {
        navigate(`/recipe/${id}/instructions`)
    }
    return (
        <div className="card" key={id} onClick={navigateToRecipePage}>
            <img src={thumbnail_url} alt=""/>
            <div className="card-content">
                <h3>{name}</h3>

                <div className="card-info">
                    <div className="tag">
                        {topics && topics.length ?  <p>{topics[0].name}</p> : null }
                    </div>
                    { total_time_minutes ? <p className="time-text">{total_time_minutes} minutes</p> : null }
                </div>
            </div>
        </div>
    )
}

export default Card