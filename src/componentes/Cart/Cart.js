import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"


const Cart=()=> {

  const {items} = useContext(CartContext);
  
  console.log(items);

  return <>
    <h1>Cart</h1>

      <div>
        {
          items.map((item) => {
            return(
            <div className='cartItems'>

            <ul className='ulCartItems'>
            
              <p><img src={item.image} width="100" alt="ItemProduct"/></p>

              <div className='dataItemCart'>
              <p><b>{item.title}</b></p>
              <p>${item.price}</p>
              </div>

            </ul>

            </div>
          )})
        }
        </div>

  </>;
}

export default Cart;
