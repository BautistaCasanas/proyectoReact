import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"
import Button from '@mui/material/Button';

const Cart=()=> {

  const {items, removeItem} = useContext(CartContext);
  
  console.log(items);

  return <>
    <h1>Cart</h1>

      <div>
        {
          items.map((item,index) => {
            return(
            <div className='cartItems' key={index}>

            <ul className='ulCartItems'>
            
              <p><img src={item.image} width="100" alt="ItemProduct"/></p>

              <div className='dataItemCart'>
              <p><b>{item.title}</b></p>
              <p>$ {item.price}</p>

              <div className="itemCartCount">
              <p>{item.qty}</p>
              </div>
              <Button color="error" sx={{width:"40px"}} variant='contained' onClick={()=>{removeItem(item.id)}} size="small">Remove</Button>
              </div>
            </ul>

            </div>
          )})
        }
        </div>

  </>;
}

export default Cart;
