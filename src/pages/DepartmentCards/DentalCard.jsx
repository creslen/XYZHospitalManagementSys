import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DentalCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./dental.jpg"
          alt="dental-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Dental Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dental department promotes oral health through examinations, cleanings, fillings, and treatments.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
