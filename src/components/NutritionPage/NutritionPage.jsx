import { Link, useLocation } from "react-router-dom"
import apiClient from "../../services/apiClient"
import axios from "axios"
import { useState, useEffect } from "react";
import "./NutritionPage.css"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import NutritionNew from "components/NutritionNew/NutritionNew";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";

export default function NutritionPage({nutrition, setNutrition, errors, setErrors}) {

  //nutritionList = await apiClient.listNutritionForUser()
  
  /*let NL;
  async function getNutrition() {
    //setNutritionList(await apiClient.listNutritionForUser() )
    NL = await apiClient.listNutritionForUser()
  }
  getNutrition() */
  //setNutritionList(apiClient.listNutritionForUser())
  //let NL = await apiClient.listNutritionForUser()
  //console.log(nutrition)

  
    /*const fetchNutrition = async () => {
      console.log("fetching nutrition...")
      try {
        const res = await apiClient.fetchNutritionForUser()
        console.log(res)
        console.log(res.data)
        console.log(res.data.nutrition)
        if (res?.data?.nutrition) {
          //setError(null)
          setNutrition(res.data.nutrition)
          console.log(nutrition)
        }
      }
      catch (error) {
        console.log(error)
        //const message = err?.response?.data?.error?.message
        // other stuff from vid
      }

    } 
    //fetchNutrition()
    console.log(nutrition) */

    useEffect(() => {
      const fetchNutrition = async () => {
        console.log("fetching nutrition...")
        try {
          const res = await apiClient.fetchNutritionForUser()
          console.log(res)
          console.log(res.data)
          console.log(res.data.nutrition)
          if (res?.data?.nutrition) {
            //setError(null)
            setNutrition(res.data.nutrition)
            console.log("Set nutrition!")
            console.log(nutrition)
          }
        }
        catch (error) {
          console.log(error)
          // const message = err?.response?.data?.error?.message
          // other stuff from vid
        }
  
      } 
      fetchNutrition()

    }, []) 


  return (
    <div className="nutrition-page">
      <div class="Banner"><h1>Nutrition</h1></div>
      <div class="content">
      <Routes>
          <Route path="/create" element={<NutritionNew errors={errors} setErrors={setErrors}/>}></Route>
          <Route path="/" element={<NutritionOverview nutrition={nutrition} setNutrition={setNutrition}/>}></Route>
      </Routes>

      </div>
    </div>
  )
}

/*
        <div class="NutritionOverview">
          <div class="header">
            <h3>Overview</h3>
            <Link to="/nutrition/create">
              <button class="Button outline small outline aqua ">Record Nutrition</button>
            </Link>
          </div>
          <div class="feed">

          {nutrition.map((nutritionItem) => (
            <div class="NutritionCard">
            <div class="card-header">
              <img src={nutritionItem.image_url} alt="nutrition"/>
              <h2 class="title">{nutritionItem.name}</h2>
            </div>
            <div class="card-stats">
              <div class="CardStat">
                <p>Calories</p>
                <span>{nutritionItem.calories}</span>
              </div>
              <div class="CardStat">
                <p>Quantity</p>
                <span>{nutritionItem.quantity}</span>
              </div>
            </div>
            <div class="card-meta">
              <small>{nutritionItem.createdAt}</small>
              <small class="category">{nutritionItem.category}</small>
            </div>
          </div>
          ))}


          </div>
        </div>
*/