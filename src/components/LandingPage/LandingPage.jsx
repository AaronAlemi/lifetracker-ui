import { Link, useLocation } from "react-router-dom"
import "./LandingPage.css"

export default function LandingPage() {

  return (
    <div className="landing-page">
        <div className="hero">
            <img className="hero-img" src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="hero img" />
            <div className="cta">
                <h1>Life Tracker</h1>
                <p>Helping you take back control of your world</p>
            </div>
        </div> {/*}
        <div class="tiles">
  <div class="tile"><img src="/static/media/icons-workout-48.4f4cdb05.svg" alt="Fitness"><p>Fitness</p></div><div class="tile"><img src="/static/media/icons8-porridge-100.132d2715.svg" alt="Food"><p>Food</p></div><div class="tile"><img src="/static/media/icons8-resting-100.81067336.svg" alt="Rest"><p>Rest</p></div><div class="tile"><img src="/static/media/icons8-planner-100.997ca54c.svg" alt="Planner"><p>Planner</p></div></div> */}
    </div>
  )
}