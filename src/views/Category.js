import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../componentes/Spinner/Spinner';
import ItemList from '../componentes/ItemList/ItemList';

const Category=()=> {

    const [items, setItems]=useState([]);
    const [loading, setLoading]=useState(true);
    
    let {itemsCategory}= useParams();

  
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{ 
            setItems(json.filter(items=>items.category===(itemsCategory))) 
          })
        
        .catch(err=>console.log(err)) 
        .finally(()=>setLoading(false)) 
        
    },[itemsCategory])

  return (<>
  {console.log(items)}
  {loading ? <Spinner /> : <ItemList items={items} />}

  </>);
}

export default Category;
