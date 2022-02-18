import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import Spinner from '../Spinner/Spinner';





//firebase-firestore
import {getDoc, getFirestore,doc} from "firebase/firestore";
 

const ItemDetailComponent=()=> {

    const [item, setItem]=useState({});

    const [loading, setLoading]=useState(true);

    let {itemID}= useParams();

  //llamo a los items del firestore  y los busco por el id
    
    useEffect(() => {
      const db = getFirestore();
      const itemRef = doc(db, "allshop", itemID);
      getDoc(itemRef).then(docSnapshot => {
          if(docSnapshot.exists()) {
              setItem({id: docSnapshot.id, ...docSnapshot.data()});
          }
      });
      setTimeout(() => {
              setLoading(false);
            }, 2000);
  }, [itemID]);

  return (<>
  {loading ? <Spinner /> : <ItemDetail item={item} />}
  </>);
}

export default ItemDetailComponent;
