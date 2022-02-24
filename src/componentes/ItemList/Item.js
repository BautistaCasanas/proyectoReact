import React,{ useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import ItemCount from '../ItemCount/itemCount';
import './Item.css';
import {Link} from "react-router-dom";
import Swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';



const Item =({item, onAdd})=> {

  const {isAuthenticated,user}= useAuth0();
  const uniqueId = () => parseInt(Date.now() * Math.random(), 10).toString();

//Swal al comprar
const swalAlert =()=>{
 if(isAuthenticated){
  Swal({
    title: "Your purchase has been successful",

    text: `User: ${user.nickname}
    Email: ${user.email}

    Purchase ID: ${uniqueId()}

    Purchase: 1 - ${item?.title}
    
    Total: $${item.price}
    `,

    icon: "success",
    button: "Keep Buying",
  })
 }else{
  Swal({
    title: "You have to login or register!",
    icon: "error",
    button: "OK",
  });
 }
  
}
  return (
    <Card  sx={{ width: 270, height:480, margin:"30px",boxShadow:" 0 10px 10px rgba(0, 0, 0, 0.4)", borderRadius:"20px"}}>
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
        <Typography  fontSize={17} variant="body2" color="text.secondary">
        <CardActions sx={{display:"flex", justifyContent:"space-evenly", marginTop:"-20px"}}>
          <b>${item.price}</b>
        <Link  to={`/detail/${item.id}`}><VisibilityIcon color="primary" variant='contained' size="small"/></Link>
      </CardActions>
        </Typography>
        <div className="ItemCounter">
        <Button sx={{margin:"0px",marginTop:"30px"}} color="success" variant='contained' size="small" onClick={swalAlert}>Buy Now</Button>
        </div>
      </CardContent>
    </Card>

);
};

export default Item;