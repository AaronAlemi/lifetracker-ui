import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import apiClient from "../../services/apiClient"
import "./LoginForm.css"

export default function LoginForm( {loginFormContent, setLoginFormContent, isLoggedIn, setIsLoggedIn, user, setUser} ) {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({email: "", password: ""})



  const handleOnInputChange = (evt) => {
    if (evt.target.name === "email") {
      if (evt.target.value.indexOf("@") === -1) {
       setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
     } else {
       setErrors((e) => ({ ...e, email: null }))
     }
   }

    setLoginFormContent((prev) => ({...prev, [evt.target.name]: evt.target.value}))
    console.log(loginFormContent)
  }

  /* const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form)
      if (res?.data) {
        setAppState(res.data)
        setIsLoading(false)
        navigate("/portal")
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  } */

  const handleOnSubmit = async (e) => {
    /*console.log("Submitted")
    console.log("Logged in status: " + isLoggedIn)
    e.preventDefault()
    setIsLoggedIn(true)
    navigate('/activity')
    console.log("Logged in status: " + isLoggedIn) */

    e.preventDefault()
    setIsProcessing(true)
    setErrors((e) => ({...e, loginFormContent: null}))
    console.log({loginFormContent})
    const credentials = {email: loginFormContent.email, password: loginFormContent.password}
    const { data, error } = await apiClient.loginUser(credentials)
    console.log("Data: " + data)
    if (error) setErrors((e) => ({ ...e, loginFormContent: error })) 
    if (data?.user) {
      setUser(data.user)
      apiClient.setToken(data.token)
      navigate("/activity")
    }

    setIsProcessing(false)
  }

  return (
    <div className="login-form">
      <div className="card">
        <h2>Login</h2>
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={loginFormContent.email} onChange={handleOnInputChange}/>
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input className="form-input" type="password" name="password" placeholder="password" value={loginFormContent.password} onChange={handleOnInputChange}/>
          </div>
          <button className="btn" onClick={handleOnSubmit}>Login</button>
        </div>
        <div className="footer">
          <p>Don't have an account? Sign up <Link to="/register">here.</Link></p>
        </div>
      </div>
    </div>
  )
}