import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CancerCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./cancer.jpg"
          alt="orthopedic-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Cancer Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cancer department diagnoses and treats cancer, creating personalized treatment plans.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
