import React from "react";
import Swal from 'sweetalert';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './itemCounter.css';

const ItemCount = ({stock, initial, onAdd, item}) => {


    const [qty, setCounter] = React.useState(parseInt(initial));
   
    

    const aumentar =()=>{
        if (stock > qty) {
            setCounter(qty + 1);
        }else{
            Swal({
                title: 'Available',
                text: 'You have exceeded the amount available',
                icon: 'error',
                
            })
        }
    }

    const disminuir = () => {
        if (qty > initial) {
            setCounter(qty - 1);
            }
        };


return <>
    
    <div className="itemCounter">
    <div><b>Stock:</b><b>{stock}</b></div>
    <br/>
    <div className="counter">
    <button className="BotonCounter" onClick={aumentar}>➕</button>
    <div className="numCounter"><b>{qty}</b></div>
    <button className="BotonCounter" onClick={disminuir}>➖</button>
    </div>
    <CardActions sx={{display:"flex", margin:"20px"}}>
        <Button sx={{margin:"0px",marginTop:"30px"}} color="success" onClick={()=>onAdd(item, qty)}  variant='contained' size="small">Add to Cart</Button>
      </CardActions>
    
    

  </div>
  </>
};

export default ItemCount;
