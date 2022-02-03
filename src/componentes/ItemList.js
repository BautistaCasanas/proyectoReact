import React from "react";
import Item from "./Item";
import Box from '@mui/material/Box';


const ItemList =({items})=>{

return(
    <Box sx={{ display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent:"center", width:"300", height:"500", margin:"20px", overflow:"hidden"}}>
    { items.map((item)=>(<div key={item.id}><Item  item={item}></Item></div>))}
    </Box>
    )  
    
}
export default ItemList;