import { Link, useLocation } from "react-router-dom"
import "./RegistrationPage.css"
import LoginForm from "components/LoginForm/LoginForm"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"

export default function RegistrationPage({registrationFormContent, setRegistrationFormContent, user, setUser}) {

  return (
    <div className="registration-page">
        <RegistrationForm registrationFormContent={registrationFormContent} setRegistrationFormContent={setRegistrationFormContent} user={user} setUser={setUser}/>
    </div>
  )
}