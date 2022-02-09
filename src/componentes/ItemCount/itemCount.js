import React from "react";
import Swal from 'sweetalert';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './itemCounter.css';

const ItemCount = ({stock, initial, onAdd}) => {

    stock = parseInt(5);
    initial= 1;

    const [counter, setCounter] = React.useState(parseInt(initial));
   
    

    const aumentar =()=>{
        if (stock > counter) {
            setCounter(counter + 1);
        }else{
            Swal({
                title: 'Available',
                text: 'You have exceeded the amount available',
                icon: 'error',
                
            })
        }
    }

    const disminuir = () => {
        if (counter > initial) {
            setCounter(counter - 1);
            }
        };



return <>
    
    <div className="itemCounter">
    <div><b>Stock:</b><b>{stock}</b></div>
    <br/>
    <div className="counter">
    <button className="BotonCounter" onClick={aumentar}>➕</button>
    <div className="numCounter"><b>{counter}</b></div>
    <button className="BotonCounter" onClick={disminuir}>➖</button>
    </div>
    <CardActions sx={{display:"flex", margin:"20px"}}>
        <Button sx={{margin:"0px",marginTop:"30px"}} color="success" onClick={onAdd} variant='contained' size="small">Add to Cart</Button>
      </CardActions>
    
    

  </div>
  </>
};

export default ItemCount;
