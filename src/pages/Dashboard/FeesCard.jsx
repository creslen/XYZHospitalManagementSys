import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddFees from '../CardButtons/AddFees'


export default function FeesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="fees.jpg"
          alt="fee-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Fees
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Settle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddFees />
        </Button>
      </CardActions>
    </Card>
  );
}
