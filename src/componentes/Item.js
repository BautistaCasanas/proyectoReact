import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './itemCount';
import './Item.css';
import {Link} from "react-router-dom";

const Item =({item})=> {

  return (
    <Card  sx={{ width: 270, height:570, margin:"30px",boxShadow:" 0 10px 10px rgba(0, 0, 0, 0.4)", borderRadius:"20px"}}>
    <CardMedia sx={{objectFit:"contain"}}
        component="img"
        image= {item.image}
        height={200}
        alt="Productos"
      />
      <CardContent>
        <div className='titleCard'>
        <Typography variant="h7" component="div">
        <b>{item.title}</b>
        </Typography>
        </div>
        <br></br>
        <Typography fontSize={17} variant="body2" color="text.secondary">
          <b>${item.price}</b>
        </Typography>
        <div className="ItemCounter">
        <ItemCount/>
        </div>
      </CardContent>

      <CardActions sx={{display:"flex", margin:"20px"}}>
        <Button color="success" variant='contained' size="small">Add Cart</Button>
        <Link  to={`/detail/${item.id}`}><Button sx={{margin:"10px"}} variant='contained' size="small">+info</Button></Link>
      </CardActions>
    </Card>

);
};

export default Item;