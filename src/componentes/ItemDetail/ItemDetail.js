import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/itemCount';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import './ItemDetail.css';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert';
import { CartContext } from "../../context/CartContext";
import { MenuItem } from '@mui/material';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import TwitterIcon from '@mui/icons-material/Twitter';


const ItemDetail=({item, initial, stock})=> {

  const [cart, isInCart]= React.useState(false)
  const {isAuthenticated}= useAuth0();
  const {addItem} =useContext(CartContext);
  //Agrego al carrito los items
  const onAdd = (item, qty) => {
    const newItem = {
      item: item,
      qty: qty
    };
    if(isAuthenticated){
      isInCart(true);
      addItem(newItem);
    }else{
      Swal({
        title: "You have to login or register!",
        icon: "error",
        button: "OK",
      });
    }
    }
    
    
  return (<><div className='cardDetail'>
    <Card sx={{ width:"50%",margin:"50px", display:"flex", flexFlow:"column", borderRadius:"20px",boxShadow:" 0 10px 10px rgba(0, 0, 0, 0.4)", gap:"20px"}}>

      <CardMedia sx={{objectFit:"contain"}}
        component="img"
        image={item?.image}
        height={250}
        alt="Product"
      />
      <CardContent sx={{display:"flex", flexWrap:"wrap"}}>
        <Typography  variant="h5" component="div">
          <b>{item?.title}</b>
        </Typography>
        <Typography sx={{display:"flex", flexWrap:"wrap"}} variant="body1" color="black">
          {item?.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <b>${item?.price}</b>
        </Typography>
      </CardContent>
      <div>
      {!cart ?<ItemCount sx={{display:"flex", justifyContent:"center"}} stock={item.stock} initial={1} onAdd={onAdd} item={item}/>
      : <Link to={`/Cart`}><Button sx={{margin:"10px"}} color="success" variant='contained' initial={1} size="medium">Finish Buying</Button></Link>}
      </div>
      <br/>
    </Card>
    </div>
    <div className="social">

      <ul>
          <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><FacebookRoundedIcon sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
          <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><WhatsappRoundedIcon sx={{cursor:"pointer", background:"green", color:"white"}}  color="success" fontSize="large"/></MenuItem></li>
          <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><EmailRoundedIcon    sx={{cursor:"pointer", background:"red", color:"white"}}  color="error" fontSize="large"/></MenuItem></li>
          <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><TwitterIcon         sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
      </ul>

    </div>
    {console.log(item)}
    </>
  );
}


export default ItemDetail;