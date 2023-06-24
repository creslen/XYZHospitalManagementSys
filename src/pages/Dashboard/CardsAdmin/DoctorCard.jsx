import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddDoctor from '../../CardButtons/AddDoctor';

export default function DoctorCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/doctor.jpg"
          alt="doctor-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doctor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            secret
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddDoctor />
        </Button>
      </CardActions>
    </Card>
  );
}
