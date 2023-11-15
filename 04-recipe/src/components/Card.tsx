export interface Recipe {
    id: number,
    image: string
    name: string
    tag: string
    numberOfMinutes: number
}

interface CardProps {
    recipe: Recipe;
}


const Card: React.FC<CardProps> = ({ recipe }) => {

    const {id, image, name, tag, numberOfMinutes} = recipe
    return (
        <div className="card" key={id}>
            <img src={image} alt=""/>
            <div className="card-content">
                <h3>{name}</h3>

                <div className="card-info">
                    <div className="tag">
                        <p>{tag}</p>
                    </div>
                    <p className="time-text">{numberOfMinutes} minutes</p>
                </div>
            </div>
        </div>
    )
}

export default Card