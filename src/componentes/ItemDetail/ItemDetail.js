import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/itemCount';
import './ItemDetail.css';




const ItemDetail=({item})=> {
  return (<><div className='cardDetail'>
    <Card sx={{ width:"50%",margin:"50px", display:"flex", flexFlow:"column", borderRadius:"20px",boxShadow:" 0 10px 10px rgba(0, 0, 0, 0.4)", gap:"20px"}}>

      <CardMedia sx={{objectFit:"contain"}}
        component="img"
        image={item?.image}
        height={250}
        alt="green iguana"
      />
      <CardContent sx={{display:"flex", flexWrap:"wrap"}}>
        <Typography  variant="h5" component="div">
          <b>{item?.title}</b>
        </Typography>
        <Typography sx={{display:"flex", flexWrap:"wrap"}} variant="body1" color="black">
          {item?.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <b>${item?.price}</b>
        </Typography>
      </CardContent>
      <ItemCount sx={{display:"flex", justifyContent:"center"}}></ItemCount>
      <br/>
      <CardActions sx={{marginLeft:"10px"}}>
        <Button  color="success" variant='contained' size="small">Add Cart</Button>
      </CardActions>
    </Card>
    </div>
    {console.log(item)}
    </>
  );
}


export default ItemDetail;