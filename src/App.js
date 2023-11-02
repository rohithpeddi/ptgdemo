import React from "react";
import {useState} from "react";
import './App.css';

import {w3cwebsocket} from "websocket";


import StepCard from "./StepCard";
import {Box} from "@mui/material";
import ErrorCard from "./ErrorCard";


const web_client = new w3cwebsocket('ws://localhost:8000')

const UPDATE_RECIPE = "update recipe";
const UPDATE_STATUS = "update status";
const UPDATE_ERRORS = "update errors";

const COFFEE = "coffee"
const MUGCAKE = "mugcake"
const PINWHEELS = "pinwheels"


/*
3 Types of messages
1. Recipe Change
    a. Message of type - "update recipe"
    b. Fetch the json of steps and sub steps
    c. Present on the screen
2. Sub Step status update
    a. Message of type - "update status"
    b. Receive a list of numbers of [size=len(sub-steps)] with status for each sub-step
    c. Update the dom of the sub steps correspondingly
    d. Also have recipe id included in it
3. Error strings
    a. Message of type - "update error"
    b. Receive a list of errors
    c. Create cards for each error and display on the right
    d. Also have recipe id included in it
*/



const App = () => {

    const [recipe, setRecipe] = useState([]);
    const [recipeState, setRecipeState] = useState([]);
    const [errors, setErrors] = useState([]);


    web_client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    web_client.onmessage = (message) => {

        const server_message = JSON.parse(message.data);
        const message_type  = server_message.Type;

        // console.log(server_message)

        if (message_type === UPDATE_RECIPE){
            // console.log(server_message?.Details?.RecipeState)
            setRecipe(server_message?.Details?.Recipe)
            setRecipeState(server_message?.Details?.RecipeState)
        } else if (message_type === UPDATE_STATUS){
            // console.log(JSON.parse(server_message?.Details?.RecipeState))
            setRecipeState(JSON.parse(server_message?.Details?.RecipeState))
            if (server_message?.Details?.Recipe !== recipe){
                setRecipe(server_message?.Details?.Recipe)
            }
        } else if (message_type === UPDATE_ERRORS){
            setErrors(server_message?.Details?.Errors)
            if (server_message?.Details?.Recipe !== recipe){
                setRecipe(server_message?.Details?.Recipe)
            }
        }

    };

    return (

        <div className="App">

            <div className="header">
                <h1>{recipe}</h1>
            </div>

            <Box display="flex">
                <div className="recipeContainer">
                    {
                        recipeState?.length > 0
                            ? (
                                <div className="steps" width='100%'>
                                    {recipeState.map((step) => (
                                        <StepCard step={step}></StepCard>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty">
                                    <h2>Sorry! No steps found.</h2>
                                </div>
                            )
                    }
                </div>

                <div className="recipeContainer">

                    <div className="errorHeader">
                        <h1>Errors</h1>
                    </div>

                    {
                        errors?.length > 0
                            ? (
                                <div className="errors" width='100%'>
                                    {errors.map((error) => (
                                        <ErrorCard error={error}></ErrorCard>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty">
                                    <h2>Yay! No errors found.</h2>
                                </div>
                            )
                    }
                </div>
            </Box>
        </div>

    );
}

export default App;
