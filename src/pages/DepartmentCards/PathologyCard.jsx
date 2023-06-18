import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PathologyCard() {
  return (
    <Card sx={{ maxWidth: 340 }}>
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
          Pathology is the study of diseases, their causes,
          It involves diagnosing diseases by examining tissues, cells, and bodily fluids.
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
