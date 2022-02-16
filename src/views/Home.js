import img from "./logo_to_use_png.png"

import "./Home.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { MenuItem } from "@mui/material";


// const Home = () => {

//     return <>
//         <center><img src={img} width="500px" alt="PhotoAllShop"></img></center>
//         <br/>
//         <br/>
//         <div className="buttonCategory">
//             <Button>Men's clothing</Button>
//             <Button>Men's clothing</Button>
//             <Button>Men's clothing</Button>
//         </div>
//     </>
//   };
  
//   export default Home;

const images = [
    {
      url: 'https://img.freepik.com/vector-gratis/conjunto-bocetos-hermosos-diversos-atuendos-moda-femenina_1150-50902.jpg?w=1380',
      title: 'Women`s Clothing',
      width: '25%',
      
    },
    {
      url: 'https://mensandbeauty.com/wp-content/uploads/2019/03/moda-hombre-prendas-calzado-ropa-complementos-2.jpg.webp',
      title: 'Men`s Clothing',
      width: '25%',
      
    },
    {
      url: 'https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-1/255275602_4855082431192160_6945914501260371590_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=HUyK9QQZjzoAX833cTF&_nc_ht=scontent.faep14-2.fna&oh=00_AT_mwwFVxjfFXZx7ASgVM9mEW5NHTThY80Qow3mquQT4zA&oe=62108812',
      title: 'Jewelery',
      width: '25%',
      
    },
    {
        url: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg',
        title: 'Electronics',
        width: '25%',
        
      },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    objectFit:"contain",
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  
  const Home = () =>  {
    return (<>

        {/* <center><img src={img} width="500px" alt="PhotoAllShop"></img></center> */}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      
        {images.map((image) => (
           
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
               <MenuItem component={Link} to="/category/:itemCategory">{image.title}</MenuItem>
               
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
          
        ))}
      </Box>
      </>
    );
  }
  export default Home