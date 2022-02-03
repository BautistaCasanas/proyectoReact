import React from "react";
import './itemCounter.css';

const ItemCount = () => {

    let stock = parseInt(5);
    let Initial= 1;

    const [counter, setCounter] = React.useState(parseInt(Initial));
    const [mensaje, setMensaje] = React.useState("");

    const aumentar =()=>{
        if (stock > counter) {
            setCounter(counter + 1);
        }else{
            setMensaje("No hay mas Stock!")
            setTimeout(() => {
                setMensaje("")
            }, 2000);
        }
    }

    const disminuir = () => {
        if (counter > Initial) {
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
    <p><b>{mensaje}</b></p>
    </div>
    

  </div>
  </>
};

export default ItemCount;
