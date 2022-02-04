import * as React from 'react';
import './CartWidget.css';



import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Login from './Login/Login';



const CartWidget = () => {

  
  return <div className='cartWidget'>
  <p>0</p><ShoppingCartOutlinedIcon/>
  <Login/>
  </div>;
};

export default CartWidget;

