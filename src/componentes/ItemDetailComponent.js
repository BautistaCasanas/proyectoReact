import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';

const ItemDetailComponent=()=> {

    const [item, setItem]=useState(undefined);
    const [items, setItems]=useState([]);

    let {itemID}= useParams();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setItems(json));
        setItem(items.find(item=> item.id === Number(itemID)));
  
    },[itemID])

  return <>
  {console.log(itemID)}
    <ItemDetail item={item}/>
  </>;
}

export default ItemDetailComponent;
