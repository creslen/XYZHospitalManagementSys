import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddRoom from '../CardButtons/AddRoom'


export default function RoomCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="room.jpg"
          alt="room-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Rooms
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rooms
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddRoom />
        </Button>
      </CardActions>
    </Card>
  );
}
