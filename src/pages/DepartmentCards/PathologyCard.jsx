import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PathologyCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./pathology.jpg"
          alt="orthopedic-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Pathology Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pathology studies diseases, diagnosing them through tissue, cell, and fluid analysis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
