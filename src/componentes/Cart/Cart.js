import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Cart=()=> {

  const {items, removeItem, clearItems,total} = useContext(CartContext);
  
  
  

  //Si el carrito esta vacio, me avisa y hay un boton para seguir comprando
  if(items.length<=0){
    return (
      <center>
      <div className='cartEmpty'>
        <h2>Cart</h2>
        <h4>Cart empty..</h4>
        <Link to={ `/Products` }>keep buying</Link>
      </div>
      </center>
    );
  }

 


  return <>
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
              <b>{item.qty}</b>
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
        <div className='p_Total'><b>Subtotal: ${total()}</b></div>
        
        <div>
        <Button color="error" sx={{width:"10px",height:"50px", margin:"15px"}} variant='contained' onClick={()=>{clearItems()}} size="small">Delete Cart</Button>
        <Button color="success" sx={{width:"40px"}} variant='contained' component={Link} to={"/Shop"} size="small">Buy</Button>
        </div>

        </div>
        </div>


  </>;
}

export default Cart;

