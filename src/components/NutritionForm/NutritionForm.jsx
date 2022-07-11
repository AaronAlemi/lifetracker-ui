import { Link, useLocation, useNavigate } from "react-router-dom"
import "./NutritionForm.css"
import LoginForm from "components/LoginForm/LoginForm"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import apiClient from "../../services/apiClient"
import { useState } from "react"


export default function NutritionForm() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [isProcessing, setIsProcessing] = useState(false)
    const [form, setForm] = useState({
        name: "",
        category: "",
        calories: null,
        quantity: null,
        imageUrl: ""
      })

      const handleOnInputChange = (evt) => {
        console.log(errors)
        setForm((prev) => ({...prev, [evt.target.name]: evt.target.value}))
      }
    
      const handleOnSubmit = async () => {
        setIsProcessing(true)
        console.log("Executing new nutrition...")
        setErrors((e) => ({ ...e, form: null }))
    
        const { data, error } = await apiClient.createNutritionForUser(form)
        if (error) setErrors((e) => ({ ...e, form: error })) 
        if (data) {
          navigate("/nutrition")
        }
        setIsProcessing(false)
      }

  return (
    <div className="nutrition-form">
        <h2>Record Nutrition</h2>
        <div class="form">
            <div class="InputField">
                <label for="name">Name</label>
                <input className="form-input" type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}/>
            </div>
            <div class="InputField">
                <label for="category">Category</label>
                <input className="form-input" type="text" name="category" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange}/>
            </div>
            <div class="split-input-field">
                <div class="InputField">
                    <label for="quantity">Quantity</label>
                    <input className="form-input" type="number" name="quantity" min="1" max="100000000" placeholder="Nutrition quantity" value={form.quantity || ''} onChange={handleOnInputChange}/>
                </div>
                <div class="InputField">
                    <label for="calories">Calories</label>
                    <input className="form-input" type="number" name="calories" min="0" max="10000000000" step="10" placeholder="Nutrition calories" value={form.calories || ''} onChange={handleOnInputChange}/>
                </div>
            </div>
            <div class="InputField">
                <label for="imageUrl">Image URL</label>
                <input className="form-input" type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value={form.imageUrl} onChange={handleOnInputChange}/>
            </div>
            <button className="Button primary large aqua" onClick={handleOnSubmit}>Save</button>
        </div>
    </div>
  )
}