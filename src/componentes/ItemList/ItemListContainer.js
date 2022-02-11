import React,{useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = (props) => {

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json));
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
    },[])
    
return <>
    
    <div>
    {isLoading? <Spinner/>: <ItemList items={items}/>}   
    </div>
    
    
</>
};

export default ItemListContainer;
