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



const ItemDetail=({item, initial, stock})=> {

  const [cart, isInCart]= React.useState(false)
  const {isAuthenticated}= useAuth0();
  const {addItem} =useContext(CartContext)


  const onAdd = ({item,qty}) => {
    if(isAuthenticated){
      isInCart(true);
      addItem({item,qty})
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
        alt="green iguana"
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
      {!cart ?<ItemCount sx={{display:"flex", justifyContent:"center"}} stock={parseInt(5)} initial={1} onAdd={onAdd}/>
      : <Link to={`/Cart`}><Button sx={{margin:"10px"}} color="success" variant='contained'  size="medium">Finish Buying</Button></Link>}
      </div>
      <br/>
    </Card>
    </div>
    {console.log(item)}
    </>
  );
}


export default ItemDetail;