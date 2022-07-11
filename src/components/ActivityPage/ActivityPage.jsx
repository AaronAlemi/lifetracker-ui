import { Link, useLocation } from "react-router-dom"
import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import apiClient from "../../services/apiClient"
import { useState, useEffect } from "react";
import "./ActivityPage.css"

export default function ActivityPage({activity, setActivity}) {

  /* const activity = apiClient.fetchActivityForUser()
  const totalCaloriesPerDay = activity.caloriesPerDay
  const avgCaloriesPerCategory = activity.caloriesPerCategory

  console.log(activity)
  console.log(totalCaloriesPerDay)
  console.log(avgCaloriesPerCategory) */

  useEffect(() => {
    const fetchActivity = async () => {
      console.log("fetching nutrition...")
      try {
        const res = await apiClient.fetchActivityForUser()
        console.log(res)
        console.log(res.data)
        
        if (res?.data) {
          //setError(null)
          setActivity(res.data)
          console.log("Set activity!")
          console.log(activtiy)
        }
      }
      catch (error) {
        console.log(error)
        // const message = err?.response?.data?.error?.message
        // other stuff from vid
      }

    } 
    fetchActivity()

  }, []) 


  return (
    <div className="activity-page">
      <div className="content">
        <div class="actions">
          <h2 class="heading">Activity Feed</h2>
            <div class="buttons">
              <Link to="/nutrition/create">
                <button class="Button outline small outline aqua ">Record Nutrition</button>
              </Link>
         
            </div>
        </div> 
        <ActivityFeed totalCaloriesPerDay={activity.caloriesPerDay} avgCaloriesPerCategory={activity.caloriesPerCategory}/>
      </div> 
    </div>
  )
}

/* 


            <div class="stats">
              <div class="main">
                <div class="SummaryStat large gold">
                  <div class="background">
                    <p>Total Exercise Minutes</p>
                    <h1>0</h1>
                    <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                      <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                    </svg>
                  </div>
                </div>
              <div class="SummaryStat large purple">
                <div class="background">
                  <p>Avg Sleep Hours</p>
                  <h1>0</h1>
                  <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                  </svg>
                </div>
              </div>
              <div class="SummaryStat large aqua">
                <div class="background"><p>Avg Daily Calories</p>
                <h1>0</h1>
                <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                  <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                </svg>
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div class="more">
            <div class="SummaryStat small teal">
              <div class="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
                <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                  <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                </svg>
              </div>
            </div>
          <div class="SummaryStat small orange">
            <div class="background">
              <p>Avg Exercise Intensity</p>
              <h1>0</h1>
              <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
              </svg>
            </div>
          </div>
          <div class="SummaryStat small red">
            <div class="background">
              <p>Total Hours Slept</p>
              <h1>0</h1>
              <svg height="100%" width="100%" viewBox="0 0 220 360" style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;">
                <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
  </div> */