import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddDepartment from '../../CardButtons/AddDepartment'


export default function DepartmentCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="department.jpg"
          alt="department-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Departments
          </Typography>
          <Typography variant="body2" color="text.secondary">
            List of Departments
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddDepartment />
        </Button>
      </CardActions>
    </Card>
  );
}
