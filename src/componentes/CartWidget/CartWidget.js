import React,{useContext} from 'react';
import './CartWidget.css';
import {Link} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Login from '../Login/Login';
import { CartContext } from '../../context/CartContext';
import { MenuItem } from '@mui/material';

const CartWidget = () => {
  const {items} = useContext(CartContext);

  //cantidad de items en el carrito
  let itemsInCart=0;
  items.map((item)=>{
    return(itemsInCart = itemsInCart + item.qty)
  })

 

  return <>
    <div>
    { items && items.length>0 ? <div className='cartItm'><MenuItem sx={{gap:"5px"}} component={Link} to="/Cart"><p>{itemsInCart}</p><ShoppingCartOutlinedIcon sx={{marginTop:"0px"}}/></MenuItem> </div> : null }
    </div>
  <Login/>
  </>
};

export default CartWidget;

