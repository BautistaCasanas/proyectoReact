import React from "react";
import Item from "./Item";
import Box from '@mui/material/Box';


const ItemList =({items})=>{

return(
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:"center", borderRadius:"1"}}>
    { items.map((item)=>(<div key={item.id}><Item  item={item}></Item></div>))}
    </Box>
    )  
    
}
export default ItemList;