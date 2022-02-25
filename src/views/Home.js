import "./Home.css";
import * as React from "react";
import { Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];
  const itemData1 = [
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_734987-MLA49056153524_022022-F.webp",
      title: "Volkswagen Golf",
      author: "@Volkswagen",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_626637-MLA49055922348_022022-O.webp",
      title: "Nissan NP300",
      author: "@Nissan",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_676982-MLA47876080459_102021-W.webp",
      title: "Volkswagen Amarok V6 ",
      author: "@Volkswagen",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_675191-MLA49067086244_022022-O.webp",
      title: "Citroën C-Elysée 1.6",
      author: "@Citroën",
      cols: 2,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_687941-MLA48601059070_122021-O.webp",
      title: "Citroën Jumpy 1.6",
      author: "@Citroën",
      cols: 2,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_646697-MLA48531811863_122021-O.webp",
      title: "Citroën C4 Cactus",
      author: "@Citroën",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_705004-MLA48551467768_122021-O.webp",
      title: "Citroën C4 Cactus 1.6",
      author: "@Citroën",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_753983-MLA49154513532_022022-O.webp",
      title: "Volkswagen Amarok 2.0",
      author: "@Volkswagen",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_848184-MLA49158947222_022022-O.webp",
      title: "BMW 220",
      author: "@BMW",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_606407-MLA49159933523_022022-O.webp",
      title: "BMW Serie 2 3.0 ",
      author: "@BMW",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_764283-MLA44805505559_022021-O.webp",
      title: "Sea DS DS7 Crossback ",
      author: "@DS",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_713924-MLA49153262698_022022-O.webp",
      title: "Chevrolet Cruze",
      author: "@Chevrolet",
      cols: 2,
    },
  ];

  return (
    <>
      <div className="catalogoContainer">
        <div className="buttonCatalogo">
          <div className="clotheButton">
            <Button
              component={Link}
              to="/category/women's clothing"
              sx={{ color: "black" }}
            >
              <b>Women`s Cloth</b>
            </Button>
          </div>
        </div>

        <div className="buttonCatalogo1">
          <div className="clotheButton">
            <Button
              component={Link}
              to="/category/men's clothing"
              sx={{ color: "black" }}
            >
              <b>Men`s Cloth</b>
            </Button>
          </div>
        </div>

        <div className="buttonCatalogo2">
          <div className="clotheButton">
            <Button
              component={Link}
              to="/category/jewelery"
              sx={{ color: "black" }}
            >
              <b>Jewelry</b>
            </Button>
          </div>
        </div>

        <div className="buttonCatalogo3">
          <div className="clotheButton">
            <Button
              component={Link}
              to="/category/electronics"
              sx={{ color: "black" }}
            >
              <b>Tech</b>
            </Button>
          </div>
        </div>
      </div>

      <h1 className="comingSoon">Coming Soon..</h1>
      <center>
        <div className="allContainer">
          <div className="boxContainer">
            <br />
            <h3 className="comingSoonTitle">Household Products</h3>
            <Box
              className="boxComingSoon"
              sx={{ width: 350, height: 450, overflowY: "scroll" }}
            >
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <br />
          </div>

          <div className="boxContainer">
            <h3 className="comingSoonTitleCars">Cars</h3>
            <ImageList sx={{ width: 350, height: 450 }}>
              {itemData1.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </center>

      <div className="social">
        <ul>
          <li className="socialLi">
            <MenuItem className="icon" component={Link} to="/">
              <FacebookRoundedIcon
                sx={{ cursor: "pointer", background: "blue", color: "white" }}
                color="primary"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon" component={Link} to="/">
              <WhatsappRoundedIcon
                sx={{ cursor: "pointer", background: "green", color: "white" }}
                color="success"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon" component={Link} to="/">
              <EmailRoundedIcon
                sx={{ cursor: "pointer", background: "red", color: "white" }}
                color="error"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon" component={Link} to="/">
              <TwitterIcon
                sx={{ cursor: "pointer", background: "blue", color: "white" }}
                color="primary"
                fontSize="large"
              />
            </MenuItem>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
