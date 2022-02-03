import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './itemCount';

const ItemDetail=({item})=> {
  return (<>
    <Card sx={{ maxWidth: 1200,margin:"50px", display:"flex"}}>

      <CardMedia
        component="img"
        image={item?.image}
        height={250}
        alt="green iguana"
      />
      <CardContent sx={{display:"flex", flexWrap:"wrap"}}>
        <Typography  variant="h5" component="div">
          <b>{item?.title}</b>
        </Typography>
        <Typography variant="body1" color="black">
          {item?.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <b>${item?.price}</b>
        </Typography>
      </CardContent>
      <ItemCount sx={{display:"flex",flexWrap:"wrap"}}></ItemCount>
      <br/>
      <CardActions>
        <Button color="success" variant='contained' size="small">Add Cart</Button>
      </CardActions>
    </Card>
    {console.log(item)}
    </>
  );
}
export default ItemDetail;