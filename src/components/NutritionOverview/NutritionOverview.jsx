import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import { Link } from "react-router-dom"
import "./NutritionOverview.css"

export default function NutritionOverview({nutrition, setNutrition}) {

return (
<div className="nutrition-overview">
          <div className="header">
            <h3>Overview</h3>

            <Link to="/nutrition/create">
              <button className="Button outline small outline aqua ">Record Nutrition</button>
            </Link>
          </div>
          <NutritionFeed nutrition={nutrition} setNutrition={setNutrition}/>

    </div>
    )
}

/*
          <div class="feed">
            
            <div class="NutritionCard">
              <div class="card-header">
                <img src="https://image.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-260nw-1722111529.jpg" alt="nutrition"/>
                <h2 class="title">Banana</h2>
              </div>
              <div class="card-stats">
                <div class="CardStat">
                  <p>Calories</p>
                  <span>50</span>
                </div>
                <div class="CardStat">
                  <p>Quantity</p>
                  <span>1</span>
                </div>
              </div>
              <div class="card-meta">
                <small>Yesterday at 2:03 PM</small>
                <small class="category">Fruit</small>
              </div>
            </div>

          </div>
*/