import { Link, useLocation, useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import { useEffect, useState } from "react"
import axios from "axios"
import "./RegistrationForm.css"

export default function RegistrationForm( {registrationFormContent, setRegistrationFormContent, user, setUser} ) {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  useEffect(() => {
    // If user already logged in,
    // redirect to home page
    if (user?.email) {
      navigate("/")
    }
  }, [user, navigate])

  const handleOnInputChange = (evt) => {
    if (evt.target.name === "email") {
       if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    if (evt.target.name === "passwordConfirm") {
      if (evt.target.value !== registrationFormContent.password) {
        setErrors((e) => ({...e, passwordConfirm: "Passwords do not match."}))
      }
      else {
        setErrors((e) => ({...e, passwordConfirm: null }))
      }
    }
    console.log(errors)
    setRegistrationFormContent((prev) => ({...prev, [evt.target.name]: evt.target.value}))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    console.log("Executing registration...")
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({...e, passwordConfirm: "Passwords do not match."}))
      setIsProcessing(false)
      return
    }
    else {
      setErrors((e) => ({...e, passwordConfirm: null }))
    }

    const { data, error } = await apiClient.registerUser({ email: registrationFormContent.email, password: registrationFormContent.password, username: registrationFormContent.username, first_name: registrationFormContent.first_name, last_name: registrationFormContent.last_name })
    if (error) setErrors((e) => ({ ...e, form: error })) 
    if (data?.user) {
      setUser(data.user)
      apiClient.setToken(data.token)
      navigate("/activity")
    }
    setIsProcessing(false)
  }

  return (
    <div className="registration-form">
      <div className="card">
        <h2>Sign Up</h2>
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={registrationFormContent.email} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">Username</label>
            <input className="form-input" type="text" name="username" placeholder="John123" value={registrationFormContent.username} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">First Name</label>
            <input className="form-input" type="text" name="first_name" placeholder="John" value={registrationFormContent.first_name} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">Last Name</label>
            <input className="form-input" type="text" name="last_name" placeholder="Smith" value={registrationFormContent.last_name} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input className="form-input" type="password" name="password" placeholder="password" value={registrationFormContent.password} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="password">Confirm Password</label>
            <input className="form-input" type="password" name="passwordConfirm" placeholder="password" value={registrationFormContent.passwordConfirm} onChange={handleOnInputChange}/>
          </div>
          <button className="btn" onClick={handleOnSubmit}>Sign up</button>
        </div>
      </div>
    </div>
  )
}