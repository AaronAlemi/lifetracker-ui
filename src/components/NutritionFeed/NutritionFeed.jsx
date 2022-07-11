import NutritionCard from "components/NutritionCard/NutritionCard"
import "./NutritionFeed.css"

export default function NutritionFeed({nutrition, setNutrition}) {

    return (
    <div className="nutrition-feed">

        {nutrition.map((nutritionItem) => (
            
            <NutritionCard 
                imageUrl={nutritionItem.image_url} 
                name={nutritionItem.name}
                calories={nutritionItem.calories}
                quantity={nutritionItem.quantity}
                createdAt={nutritionItem.created_at}
                date={nutritionItem.date}
                category={nutritionItem.category} />

          
          ))}
                
    
  </div>
    )
}
