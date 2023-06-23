import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function BloodBlankCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./bloodbank.jpg"
          alt="bloodbank-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           BloodBank Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Blood bank department collects, tests, stores, and distributes blood for transfusions and emergencies.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
