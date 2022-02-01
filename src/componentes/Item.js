import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './itemCount';

import './Item.css';


const Item =({item})=> {


  return (
    <Card  sx={{ maxWidth: 270, margin:"30px"}}>
    <CardMedia
        component="img"
        height="200"
        image= {item.image}
        alt="Productos"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {item.title}
        </Typography>
        {/* <Typography fontSize={17} variant="body2" color="text.secondary">
          {item.description}
        </Typography> */}
        <br></br>
        <Typography fontSize={17} variant="body2" color="text.secondary">
          <b>${item.price}</b>
        </Typography>
        <div className="ItemCounter">
        <ItemCount/>
      
        </div>
      </CardContent>

      <CardActions>
        <Button color="success" variant='contained' size="small">Comprar</Button>
      </CardActions>
    </Card>

);
};

export default Item;