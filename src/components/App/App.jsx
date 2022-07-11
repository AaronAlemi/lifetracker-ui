import * as React from "react"
import "./App.css"
import Navbar from "components/Navbar/Navbar"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import NotFound from "components/NotFound/NotFound";
import NutritionPage from "components/NutritionPage/NutritionPage";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import axios from "axios";

export default function App() {

  const [loginFormContent, setLoginFormContent] = useState({email: "", password: ""})
  const [registrationFormContent, setRegistrationFormContent] = useState({username: "", email: "", first_name: "", last_name: "", password: "", passwordConfirm: ""})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [error, setError] = useState("")
  const [user, setUser] = useState({})
  const [nutrition, setNutrition] = useState([])
  const [activity, setActivity] = useState({})

  

  //console.log("App isloggedin: " + isLoggedIn)

   async function fetchingUser() {
    setisFetching(true)
    console.log("Fetching user...")
    const {data, error} = await apiClient.fetchUserFromToken()
    if (data) {
      setUser(data.user)
    }
    if (error) {
      setError(error)
      setisFetching(false)
    }
  }
  
  async function fetchingNutrition() {
    setisFetching(true)
    console.log("Fetching nutrition...")
    const {userInfo, error} = await apiClient.fetchNutritionForUser()
    console.log(userInfo)
    console.log(userInfo.nutrition)
    
    if (userInfo) {
      setNutrition(userInfo)
    }
    if (error) {
      setError(error)
      setisFetching(false)
    } 

   
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      apiClient.setToken(token)
      fetchingUser()
      //fetchingNutrition()

      const fetchNutrition = async () => {
        console.log("fetching nutrition...")
        try {
          const res = await axios.get("http://localhost:3001/nutrition")
          if (res?.data?.nutrition) {
            setError(null)
            setNutrition(res.data.nutrition)
          }
        }
        catch (error) {
          console.log(error)
          //const message = err?.response?.data?.error?.message
          // other stuff from vid
        }

      }
      fetchNutrition()

    }
  }, []) 

  console.log(user)
  console.log(nutrition)

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/> }/>
          <Route path="/register" element={<RegistrationPage registrationFormContent={registrationFormContent} setRegistrationFormContent={setRegistrationFormContent} user={user} setUser={setUser}/>} />
          <Route path="/activity" element={user.email ? <ActivityPage activity={activity} setActivity={setActivity}/> : <AccessForbidden/>} />
          <Route path="exercise" element={user.email ? <h>Exercise Page</h> : <AccessForbidden/>} />
          <Route path="sleep" element={user.email ? <h>Sleep Page</h> : <AccessForbidden/>} />
          <Route path="/nutrition/*" element={user.email ? <NutritionPage nutrition={nutrition} setNutrition={setNutrition}/> : <AccessForbidden/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
