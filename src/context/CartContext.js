import React, {useState, createContext} from 'react'
import Swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';

export const CartContext = createContext();

export const CartProvider =({children})=> {
    const [items,setItems]=useState([]);
    const {user}= useAuth0();

    const isInCart=(id)=>{
        const found =items.find(item=> item.id === id);
        return found;
    }
        
    const addItem = ({item,qty}) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod)=>{
                if(prod.id === item.id){
                    prod.qty += qty
                } 
                return prod
            }))
            :
        setItems([...items,{...item,qty: qty}]);
    }

    const removeItem= (id) => {
        setItems(items.filter(item => item.id !== id))
    }
  
    const clearItems =()=>{
        setItems([]);
    }

    const total= () => {
        return items.reduce((acc, total) => acc + total.price * total.qty, 0);
      };

        


      const uniqueId = () => parseInt(Date.now() * Math.random(), 10).toString();

      const buyItem =()=>{
        Swal({
            title: "Thanks for buying in AllShop",
            
            text:`
                User: ${user.nickname}
                Email:${user.email}
                
            Your purchase ID: ${uniqueId()}
            
            Purchase: ${items.map((item)=>{
                return `
                °${item.qty} ${item.title}`
            })}

            Total: ${parseInt(total())}$`,
            icon:"success",
            button: "OK",
            });
        clearItems();
    }

return (
    <CartContext.Provider value={{items,addItem,removeItem,clearItems,total,buyItem,uniqueId}}>
        {children}
    </CartContext.Provider>
)
}