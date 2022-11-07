import React from "react";
import {useEffect, useState} from "react";
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

// const coffee_json = [{"Title": "Step 1:\n", "SubSteps": [{"Title": "1. Take bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Fill water using measure bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Take kettle\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Open the lid of kettle\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Pour water\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "6. Close the lid of kettle\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 2:\n", "SubSteps": [{"Title": "1. Take Filter cone\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take mug\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Place the filter cone on top of mug\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 3:\n", "SubSteps": [{"Title": "1. Take Paper filter\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Prepare Paper filter half\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Prepare Paper filter quarter\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Put Paper filter into dripper\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 4:\n", "SubSteps": [{"Title": "1. Take the kitchen scale\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take the coffee beans with container on the scale\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Take the coffee grinder\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Open the coffee grinder\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Pour the coffee beans into the grinder\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "6. Cover the lid of grinder\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "7. Grind coffee beans\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "8. Take the dripper\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "9. Open the coffee grinder\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "10. Transfer the grounds to the filter cone\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 5:\n", "SubSteps": [{"Title": "1. Take kettle\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Open the lid of kettle\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Take the thermometer\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Put the thermometer into kettle\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Take out the thermometer\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "6. Close the lid of kettle\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 6:\n", "SubSteps": [{"Title": "1. Take the dripper with grounds coffee\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Pour a small amount of water into dripper\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 7:\n", "SubSteps": [{"Title": "1. Pour the rest of the water over the grounds in a circular motion\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 8:\n", "SubSteps": [{"Title": "1. Removing the dripper\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Discard the paper filter and coffee grounds.", "Done": 0, "NotSure": 0, "Error": 0}]}]
// const mugcake_json = [{"Title": "Step 1:\n", "SubSteps": [{"Title": "1. Take the mug\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take the paper cake liner\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Place the paper cake liner inside the mug\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Set aside the mug\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 2:\n", "SubSteps": [{"Title": "1. Take the bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Add flour to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Add sugar to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Add baking powder to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Add salt to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 3:\n", "SubSteps": [{"Title": "1. Take the whisk\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Use the whisk to combine\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 4:\n", "SubSteps": [{"Title": "1. Add oil to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Add water to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Add vanilla to the mixing bowl\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 5:\n", "SubSteps": [{"Title": "1. Take the whisk\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Use the whisk to combine\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 6:\n", "SubSteps": [{"Title": "1. Take the mug\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Pour the batter into the mug\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 7:\n", "SubSteps": [{"Title": "1. Open the microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Put the mug into the microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Close the microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Microwave the mug and batter\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 8:\n", "SubSteps": [{"Title": "1. Open the microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take the mug\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Take the toothpick\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Insert the toothpick into the center of the cake\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Take the toothpick to do the wet batter cling test\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "6. If wet batter clings to the toothpick\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "7. Open Microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "8. Put the mug into the microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "9. Close the Microwave\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "10. Microwave for additional 5 seconds\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "11. Wet batter does not cling to the toothpick continue to the next step\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 9:\n", "SubSteps": [{"Title": "1. Take the plate\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Invert the mug to release the cake onto a plate\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Allow to cool\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Carefully remove paper liner\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 10: prepare to pipe for frosting\n", "SubSteps": [{"Title": "1. Take spoon\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take zip-top bag\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Scoop 4 spoonfuls of chocolate frosting into a zip-top bag\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Seal the zip-top bag\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "5. Remove as much air as possible\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 11:\n", "SubSteps": [{"Title": "1. Take the scissors\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Cut one corner of the bag to create small opening\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 12:\n", "SubSteps": [{"Title": "1. Squeeze the frosting through the opening to apply small dollops of frosting to the plate in a circle around the base of the cake.\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 13:\n", "SubSteps": [{"Title": "1. Show the cake", "Done": 0, "NotSure": 0, "Error": 0}]}]
// const pinwheels_json = [{"Title": "Step 1:\n", "SubSteps": [{"Title": "1. Take Cutting Board\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Place tortilla on cutting board\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 2:\n", "SubSteps": [{"Title": "1. Take butter knife\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take nut butter jar\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Scoop nut butter from butter jar using butter knife\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Spread nut butter on tortilla\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 3:\n", "SubSteps": [{"Title": "1. Take the paper towel\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Clean the butter knife using paper towel\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 4:\n", "SubSteps": [{"Title": "1. Take butter knife\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Take jelly jar\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "3. Scoop jelly from jelly jar using butter knife\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "4. Spread jelly on tortilla\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 5:\n", "SubSteps": [{"Title": "1. Take the paper towel\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Clean the butter knife using paper towel\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 6:\n", "SubSteps": [{"Title": "1. Tightly roll the tortilla\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 7:\n", "SubSteps": [{"Title": "1. Take the toothpicks\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Insert 5 toothpicks into the tortilla\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 8:\n", "SubSteps": [{"Title": "1. Trim the ends of the tortilla roll with the butter knife on both sides\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 9:\n", "SubSteps": [{"Title": "1. Take floss\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Place floss under the tortilla halfway between the two toothpicks\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 10:\n", "SubSteps": [{"Title": "1. Cross the two ends of the floss over the top of the tortilla roll\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Pull the floss to cut the tortilla\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 11:\n", "SubSteps": [{"Title": "1. Continue slicing with floss to create the second pinwheel.  (Repeat 10)\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 12:\n", "SubSteps": [{"Title": "1. Continue slicing with floss to create the third pinwheel.  (Repeat 10)\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 13:\n", "SubSteps": [{"Title": "1. Continue slicing with floss to create fourth and fifth pinwheels.  (Repeat 10)\n", "Done": 0, "NotSure": 0, "Error": 0}]}, {"Title": "Step 14:\n", "SubSteps": [{"Title": "1. Take the plate\n", "Done": 0, "NotSure": 0, "Error": 0}, {"Title": "2. Place the pinwheels on the plate", "Done": 0, "NotSure": 0, "Error": 0}]}]

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

    // const fetchRecipeState = () => {
    //
    //     let recipe_json = []
    //
    //     if (recipe === COFFEE){
    //         recipe_json = coffee_json
    //     } else if (recipe === PINWHEELS){
    //         recipe_json = pinwheels_json
    //     } else if (recipe === MUGCAKE){
    //         recipe_json = mugcake_json
    //     }
    //     //
    //     let recipe_state = JSON.parse(JSON.stringify(recipe_json))
    //     console.log("Updated recipe")
    //     let newRecipe = [...recipe_state]
    //     console.log(newRecipe)
    //     setRecipeState(newRecipe)
    // }

    web_client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    web_client.onmessage = (message) => {

        const server_message = JSON.parse(message.data);
        const message_type  = server_message.Type;

        // console.log(server_message)

        if (message_type === UPDATE_RECIPE){
            // console.log(server_message?.Details?.Recipe)
            setRecipe(server_message?.Details?.Recipe)
            setRecipeState(server_message?.Details?.RecipeState)
        } else if (message_type === UPDATE_STATUS){
            // Update statuses
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

    // useEffect(() => {
    //     fetchRecipeState()
    // }, [recipe])


    return (

        <div className="App">

            <div className="header">
                <h1>DARPA - PTG</h1>
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
                    <h1>Errors</h1>
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
