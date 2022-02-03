import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import Spinner from './Spinner';

const ItemDetailComponent=()=> {

    const [item, setItem]=useState({});
    const [items, setItems]=useState([]);
    const [loading, setLoading]=useState(true);

    let {itemID}= useParams();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setItem(json.find(item=>item.id===Number(itemID)))
          })
        .catch(err=>console.log(err)) 
        .finally(()=>setLoading(false)) 
        
    },[itemID])

  return (<>
  {loading ? <Spinner /> : <ItemDetail item={item} />}

  </>);
}

export default ItemDetailComponent;
