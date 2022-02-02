import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemDetail=({item})=> {
  return (<>
    <Card sx={{ maxWidth: 345,margin:"50px"}}>

      <CardMedia
        component="img"
        image={item?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <b>${item?.price}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="success" variant='contained' size="small">Comprar</Button>
      </CardActions>
    </Card>
    {console.log(item)}
    </>
  );
}
export default ItemDetail;