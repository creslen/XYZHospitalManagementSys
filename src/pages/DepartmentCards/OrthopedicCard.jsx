import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function OrthopedicCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./orthopedic.jpg"
          alt="orthopedic-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Orthopedic Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Orthopedics specializes in musculoskeletal disorders, treating conditions like fractures, arthritis, and injuries.        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
