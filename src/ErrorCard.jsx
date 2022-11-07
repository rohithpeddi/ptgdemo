import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ErrorCard = ({error}) => {

    return (
        <div className="error">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {error}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );

}

export default ErrorCard;