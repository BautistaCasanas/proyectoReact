import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../componentes/Spinner/Spinner';
import ItemList from '../componentes/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const Category=()=> {

    const [items, setItems]=useState([]);
    const [loading, setLoading]=useState(true);
    
    let {itemsCategory}= useParams();

  
    useEffect(()=>{

        const db = getFirestore();
        const q = query(collection(db,"allshop"),where("category", "==", itemsCategory));
        getDocs(q).then((snapshot)=>{
          if(snapshot.size === 0){
            console.log("No results");
          };
          setItems(snapshot.docs.map((item)=>({id: item.id, ...item.data()})));
        });
        setTimeout(() => {
          setLoading(false);
        }, 2000);

    },[itemsCategory])

    


  return (<>
  {console.log(items)}
  {loading ? <Spinner /> : <ItemList items={items} />}

  </>);
}

export default Category;
