import { Link, useLocation } from "react-router-dom"
import "./NutritionNew.css"
import LoginForm from "components/LoginForm/LoginForm"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import NutritionForm from "components/NutritionForm/NutritionForm"

export default function NutritionNew({errors, setErrors}) {

  return (
    <div className="nutrition-new">
        <NutritionForm errors={errors} setErrors={setErrors}/>
    </div>
  )
}