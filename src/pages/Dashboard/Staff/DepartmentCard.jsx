import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ViewDepartment from '../Staff/ViewDepartment'

export default function DepartmentCard() {
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
           Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
            List of All Departments
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ViewDepartment />
        </Button>
      </CardActions>
    </Card>
  );
}
