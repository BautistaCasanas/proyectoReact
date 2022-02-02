import React, { useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailComponent() {

    const [detail, setDetail]=React.useState([]);
    const [item, setItem]=React.useState([]);

    

    useEffect(()=>{
        
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setDetail(json));
        setItem(detail.find(item=> item.id === 3));
    },[])

  return <>
  {console.log(item)}
    <ItemDetail item={item}/>
  </>;
}

export default ItemDetailComponent;
