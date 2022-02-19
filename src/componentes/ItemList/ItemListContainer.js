import React, { useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";




//firebase
import { db } from "../../firebase/FireBase";
import { collection, query, getDocs} from "firebase/firestore";


const ItemListContainer = (props) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(items);
  useEffect(() => {
    
    //Traigo los productos del firebase
    const getProducts = async()=>{
        const q = query(collection(db, "allshop"));
        const items=[];
        const querySnapshot = await getDocs(q);
        // console.log( "DATA:", querySnapshot);
        querySnapshot.forEach((item)=>{
            // console.log("DATA:", item.data(), "ID:", item.id);
            items.push({...item.data(), id: item.id});
        })
        // console.log(items);
        setItems(items);
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getProducts();
  }, []);



  return (
    <>
      <div>{isLoading ? <Spinner /> : <ItemList items={items} />}</div>
    </>
  );
};

export default ItemListContainer;
