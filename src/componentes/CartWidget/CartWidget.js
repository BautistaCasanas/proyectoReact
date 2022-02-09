import * as React from 'react';
import './CartWidget.css';
import {Link} from "react-router-dom";


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Login from '../Login/Login';



const CartWidget = () => {

  
  return <div className='cartWidget'>
  <p>0</p><Link  to={"/Cart"}><ShoppingCartOutlinedIcon/></Link>
  <Login/>
  </div>;
};

export default CartWidget;

