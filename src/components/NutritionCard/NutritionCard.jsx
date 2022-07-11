import "./NutritionCard.css"

export default function NutritionCard( {imageUrl, name, calories, quantity, createdAt, date, category} ) {

return (
    <div className="nutrition-card">
        <div className="card-header">
            <img className="nutrition-image" src={imageUrl} alt="nutrition"/>
            <h2 className="nutrition-name">{name}</h2>
        </div>
        <div class="card-stats">
            <div class="CardStat">
            <p>Calories</p>
            <span className="calories">{calories}</span>
            </div>
            <div className="CardStat">
            <p>Quantity</p>
            <span className="quantity">{quantity}</span>
            </div>
        </div>
        <div class="card-meta">
            <small className="createdAt">{date}</small>
            <small className="category">{category}</small>
        </div>
    </div>
    )
}