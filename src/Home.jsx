import RecipeCard from "./RecipeCard";
import React from "react";

const Home = ({recipes}) => {

    // console.log(recipes)

    return (
        <div className="container">

            {
                recipes?.length > 0
                    ? (
                        <div className="recipes">
                            {recipes.map((recipe) => (
                                <RecipeCard recipe={recipe}></RecipeCard>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No recipes found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default Home;
