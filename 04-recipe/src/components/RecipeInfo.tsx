export default function RecipeInfo({instructions, imageUrl}: { instructions: any[], imageUrl: string }) {
    return (
        <div className="recipe-info">
            <div className="recipe-info-container">
                <div className="recipe-info-header">
                    <h3>INSTRUCTIONS</h3>
                </div>

                {instructions.map(({display_text, position}) => (
                    <div className="recipe-info-content-container" key={position}>
                        <p className="recipe-step">
                            {position}
                        </p>
                        <p className="recipe-text">
                            {display_text}
                        </p>
                    </div>
                ))
                }

            </div>
            <img className="recipe-img" src={imageUrl} alt=""/>
        </div>
    )
}