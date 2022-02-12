import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"
import Button from '@mui/material/Button';

const Cart=()=> {

  const {items, removeItem, clearItems,total, buyItem} = useContext(CartContext);
  console.log(items);


  return <>
    <h1>Cart</h1>

      <div className='container'>
      <div className='itemContainer'>
        {
          items.map((item,index) => {
            return(
            <div className='cartItems' key={index}>

            <div className='ulCartItems'>
            
                <p><img src={item.image} width="100" alt="ItemProduct"/></p>

              <div className='dataItemCart'>
              <b>{item.title}</b>
                <p>$ {item.price * item.qty}</p>

              <div className="itemCartCount">
              <b>Qty: {item.qty}</b>
              </div> 

              <br/>

                <Button color="error" sx={{width:"40px"}} variant='contained' onClick={()=>{removeItem(item.id)}} size="small">Remove</Button>
              </div>

            </div>
            
            </div>
          )})
        }
        </div>
        <div className='cartTotal'>
        <p className='p_Total'><b>Total: {total()}</b></p>
        
        <div>
        <Button color="error" sx={{width:"10px",height:"50px", margin:"15px"}} variant='contained' onClick={()=>{clearItems()}} size="small">Delete Cart</Button>
        <Button color="success" sx={{width:"40px"}} variant='contained' onClick={()=>{buyItem()}} size="small">Buy</Button>
        </div>

        </div>
        </div>

  </>;
}

export default Cart;

