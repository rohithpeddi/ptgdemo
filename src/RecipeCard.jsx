import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const RecipeCard = ({recipe}) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        // console.log("onclick btn")
        navigate(recipe.Id);
    }

    return (
        <div className="recipe">
            <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    alt={recipe.Title}
                    image = {recipe.Image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {recipe.Title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default RecipeCard;