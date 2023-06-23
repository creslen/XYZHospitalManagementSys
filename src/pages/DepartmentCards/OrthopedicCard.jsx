import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function OrthopedicCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
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
          Orthopedics is specializing in musculoskeletal disorders. It encompasses the diagnosis and treatment of conditions like fractures, arthritis, and sports injuries.
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Facilities
        </Button>
      </CardActions>
    </Card>
  );
}
