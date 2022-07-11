import { Link, useLocation } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./NavLinks.css"

export default function NavLinks( {isLoggedIn, user, setUser} ) {
  console.log("Navlinks isloggedin: " + isLoggedIn)

  async function appLogout()
  {
      await apiClient.logoutUser()
      setUser({})
  }

  

  return (
    <ul className="nav-links">
      <Link to="/activity">
        <p>Activity</p>
      </Link>
      <Link to="/exercise">
        <p>Exercise</p>
      </Link>
      <Link to="/nutrition">
        <p>Nutrition</p>
      </Link>
      <Link to="/sleep">
        <p>Sleep</p>
      </Link>
      {!user.email ? 
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
              <button>Register</button>
          </Link>
        </>
        :
        <button onClick={() => appLogout()}>Sign Out</button>
      }
  </ul> 
  )
}


{/*props.user?.email 
  ? (
    <Link to="/" className="nav-item-link"><button className="logout-button" id="nav-button" onClick={() => appLogout()}>Log Out</button></Link>
  )
  : (
    <div className="nav-links">
      <li className="nav-item"><Link to="/login" className="nav-item-link"><button id="nav-button">Login</button></Link></li>
      <li className="nav-item"><Link to="/register" className="nav-item-link"><button id="nav-button">Sign Up</button></Link></li>
    </div>
  )*/}
