import React, {useEffect, useState} from "react";
import StepCard from "./StepCard";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

const recipeDetailList = [
    {
        "Steps": [
            {
                "SubSteps": [
                    {
                        "Title": "1. Take Cutting Board",
                        "NotSure": 0,
                        "Done": 1,
                        "Error": 0
                    },
                    {
                        "Title": "2. Place tortilla on cutting board",
                        "NotSure": 0,
                        "Done": 1,
                        "Error": 0
                    }
                ],
                "Title": "Step 1"
            },
            {
                "SubSteps": [
                    {
                        "Title": "1. Take butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "2. Take nut butter jar",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "3. Scoop nut butter from butter jar using butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "4. Spread nut butter on tortilla",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    }
                ],
                "Title": "Step 2"
            }
        ],
        "Title": "pinwheels.txt"
    },
    {
        "Steps": [
            {
                "SubSteps": [
                    {
                        "Title": "1. Take Cutting Board",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "2. Place tortilla on cutting board",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    }
                ],
                "Title": "Step 1"
            },
            {
                "SubSteps": [
                    {
                        "Title": "1. Take butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "2. Take nut butter jar",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "3. Scoop nut butter from butter jar using butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "4. Spread nut butter on tortilla",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    }
                ],
                "Title": "Step 2"
            }
        ],
        "Title": "mugcake"
    },
    {
        "Steps": [
            {
                "SubSteps": [
                    {
                        "Title": "1. Take Cutting Board",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "2. Place tortilla on cutting board",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    }
                ],
                "Title": "Step 1"
            },
            {
                "SubSteps": [
                    {
                        "Title": "1. Take butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "2. Take nut butter jar",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "3. Scoop nut butter from butter jar using butter knife",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    },
                    {
                        "Title": "4. Spread nut butter on tortilla",
                        "NotSure": 0,
                        "Done": 0,
                        "Error": 0
                    }
                ],
                "Title": "Step 2"
            }
        ],
        "Title": "coffee"
    }
];

const HomeRecipe = () => {

    let {recipeId} = useParams();
    const [recipeState, setRecipeState] = useState();
    const [recipeDetails, setRecipeDetails] = useState([]);

    const fetchRecipeDetails = async () => {
        // Fetch steps from a file for a recipe
        setRecipeDetails(recipeDetailList);
    }

    // console.log("params.." + recipeId);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will be called every 2 seconds');
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(recipeId != null) {
            console.log("line 18:", recipeDetails)
            const state =  recipeDetails.filter(recipe => recipe.Title == recipeId)
            console.log(state)
            setRecipeState(state[0]);
            fetchRecipeDetails();
        }
    })

    return (
        <Box display="flex">
            <div className="stepDetails">
                {
                    recipeState?.Steps?.length > 0
                        ? (
                            <div className="steps" width='100%'>
                                {recipeState.Steps.map((step) => (
                                    <StepCard step={step}></StepCard>
                                ))}
                            </div>
                        ) : (
                            <div className="empty">
                                <h2>No steps found</h2>
                            </div>
                        )
                }
            </div>

            <div className="stepDetails">
                <h1>Errors</h1>
            </div>
        </Box>
    );

}

export default HomeRecipe;