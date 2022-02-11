import React, {useState, createContext} from 'react'

export const CartContext = createContext();

export const CartProvider =({children})=> {
    const [items,setItems]=useState([]);


    const addItem = ({item,qty}) => {
        setItems([...items,{...item,qty: qty}])
        
    }



return (
    <CartContext.Provider value={{items,addItem}}>
        {children}
    </CartContext.Provider>
)
}