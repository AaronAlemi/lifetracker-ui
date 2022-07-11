import { Link, useLocation } from "react-router-dom"
import "./ActivityFeed.css"

export default function ActivityFeed({totalCaloriesPerDay, avgCaloriesPerCategory}) {

  return (
    <div className="activity-feed">
            <h1>Average Calories Per Category</h1>
            <div class="main">

                

                {avgCaloriesPerCategory?.map((categoryItem) => (
                
                <div class="SummaryStat large gold">
                    <div class="background">
                        
                        <h1>{categoryItem.category}</h1>
                        <h1>{categoryItem.round} Calories</h1>
                    </div>
                </div>
            
                ))}

            </div>
        
        <h4>More Stats</h4>
        <h4>Average Calories Per Day</h4>
        <div class="more">

        {totalCaloriesPerDay?.map((dailyItem) => (
                
                <div class="SummaryStat small teal">
                    <div class="background">
                        
                        <h1>{dailyItem.date}</h1>
                        <h1>{dailyItem.totalcaloriesperday} Calories</h1>
                    </div>
                </div>
            
        ))}
  

        </div>
    </div>

  
  )
}