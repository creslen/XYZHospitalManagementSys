import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ViewRoom from '../Staff/ViewRoom'

export default function RoomCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="room.jpg"
          alt="patient-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Room
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ViewRoom />
        </Button>
      </CardActions>
    </Card>
  );
}
