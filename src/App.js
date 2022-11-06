import React from "react";
import {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';


import RecipeCard from "./RecipeCard";
import StepCard from "./StepCard";
import Home from "./Home";
import HomeRecipe from "./HomeRecipe";

const recipeList = [
    {
        "Image": "https://via.placeholder.com/400",
        "Title": "Pin Wheels",
        "Id" : "pinwheels"
    },
    {
        "Image": "https://via.placeholder.com/400",
        "Title": "Pin Wheels",
        "Id" : "mugcake"
    },
    {
        "Image": "https://via.placeholder.com/400",
        "Title": "Pin Wheels",
        "Id" : "coffee"
    }
];





const App = () => {

    const [recipes, setRecipes] = useState([]);


    // console.log(recipeDetails)

    const fetchRecipes = async () => {
        // Fetch recipe list from a text file
        setRecipes(recipeList);
    }



    useEffect(() => {
        fetchRecipes()

    }, [])

    return (
        <BrowserRouter>
            <div className="App">

                <div className="header">
                    <h1>DARPA - PTG</h1>
                </div>

                <Routes>
                    <Route path="/" element={<Home recipes={recipes}/>} exact />
                    <Route path="/:recipeId" element={<HomeRecipe/>} />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
