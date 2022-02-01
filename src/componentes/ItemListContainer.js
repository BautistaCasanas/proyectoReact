import React,{useEffect, Suspense, lazy} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import Spinner from './Spinner';

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
        <center>
            <h1 className="titulos">{props.greetings}</h1>
        </center>
    </div>
    <div>
    {isLoading? <Spinner/>: <ItemList items={items}/>}   
    </div>
    
    
</>
};

export default ItemListContainer;
