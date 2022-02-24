import React, { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FireBase";
import swal from "sweetalert";
import MessageID from "../../componentes/MessageID/MessageID";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import "./Shop.css";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};

const Shop = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState('');
  const {buyItem, items, clearItems} = useContext(CartContext);

  const onChange =(e)=>{
    const{value, name}=e.target
    setValues({...values, [name]: value})
  }


  const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};
    

  const confirmPurchase=()=>{

    if(items.length <= 0){
      swal({
        title:"No items in Cart",
        icon:"error",
        button: "OK"
      })
    } else{
      buyItem()
    }
  }
    



  return (<>
    <div>
      <center>
        <form className="formContainerShop" onSubmit={onSubmit}>
          <TextField
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px" }}
          />

          <TextField
            placeholder="lastName"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px" }}
            
          />

          <TextField
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px" }}
          />

          <TextField
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px" }}
          />

          <button className="btnSendAction" onClick={()=>confirmPurchase()}>
            <b>CONFIRM PURCHASE</b>
          </button>
        </form>
        <Button variant="contained" color="primary" size="small" onClick={()=>{clearItems()}} component={Link} to={"/Products"}>Keep Buying</Button>
        {items.length >=1 ? purchaseID && <MessageID purchaseID={purchaseID}/>: ""}
      </center>
    </div>
    
    </>
  );
};

export default Shop;
