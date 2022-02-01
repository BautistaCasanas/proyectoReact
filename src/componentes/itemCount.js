import React from "react";
import './itemCounter.css';

const ItemCount = () => {

    let stock = parseInt(10);
    const [counter, setCounter] = React.useState(parseInt(0));

    const aumentar =()=>{
        if (stock > counter) {
            setCounter(counter + 1);
        }else{
            console.log("No hay Stock disponible")
        }
    }

    const disminuir = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            }
        };



return <>
    
    <div className="itemCounter">
    <p><b>Stock:</b><b>  {stock}</b></p>

    <div className="counter">
    <button className="BotonCounter" onClick={aumentar}>➕</button>
    <p className="numCounter"><b>{counter}</b></p>
    <button className="BotonCounter" onClick={disminuir}>➖</button>
    </div>
    

  </div>
  </>
};

export default ItemCount;
