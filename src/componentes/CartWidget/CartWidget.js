import React,{useContext} from 'react';
import './CartWidget.css';
import {Link} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Login from '../Login/Login';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
  const {items} = useContext(CartContext);
  console.log(items)

  return <div className='cartWidget'>
  <p>{items.length}</p><Link  to={"/Cart"}><ShoppingCartOutlinedIcon/></Link>
  <Login/>
  </div>;
};

export default CartWidget;

