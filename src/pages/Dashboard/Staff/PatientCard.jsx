import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ViewPatient from '../Staff/ViewPatient'

export default function PatientCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="patient.jpg"
          alt="patient-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Patient
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Patient
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ViewPatient />
        </Button>
      </CardActions>
    </Card>
  );
}
