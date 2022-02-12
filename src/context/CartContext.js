import React, {useState, createContext} from 'react'
import Swal from 'sweetalert';

export const CartContext = createContext();

export const CartProvider =({children})=> {
    const [items,setItems]=useState([]);

    const isInCart=(id)=>{
        const found =items.find(item=>item.id === id);
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

return (
    <CartContext.Provider value={{items,addItem,removeItem}}>
        {children}
    </CartContext.Provider>
)
}