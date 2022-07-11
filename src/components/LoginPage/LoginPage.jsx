import { Link, useLocation } from "react-router-dom"
import "./LoginPage.css"
import LoginForm from "components/LoginForm/LoginForm"

export default function LoginPage( {loginFormContent, setLoginFormContent, isLoggedIn, setIsLoggedIn, user, setUser} ) {

  console.log("LoginPage isloggedin: " + isLoggedIn)

  return (
    <div className="login-page">
        <LoginForm loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/>
    </div>
  )
}