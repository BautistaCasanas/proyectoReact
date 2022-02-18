
import "./Home.css"
import * as React from 'react';
import { Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";


import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

const Home = () => {

    return <>
        <div className="catalogoContainer">

          <div className="buttonCatalogo">

          <div className="clotheButton"><Button component={Link} to="/category/women's clothing" sx={{color:"black"}}><b>Women`s Cloth</b></Button></div>

          </div>

          <div className="buttonCatalogo1">

          <div className="clotheButton"><Button component={Link} to="/category/men's clothing" sx={{color:"black"}}><b>Men`s Cloth</b></Button></div>

          </div>

          <div className="buttonCatalogo2">

          <div className="clotheButton"><Button component={Link} to="/category/jewelery" sx={{color:"black"}}><b>Jewelry</b></Button></div>

          </div>

          <div className="buttonCatalogo3">

          <div className="clotheButton"><Button component={Link} to="/category/electronics" sx={{color:"black"}}><b>Tech</b></Button></div>

          </div>
          
        </div>

        <div className="social">

            <ul>
              <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><FacebookRoundedIcon sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><WhatsappRoundedIcon sx={{cursor:"pointer", background:"green", color:"white"}}  color="success" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><EmailRoundedIcon    sx={{cursor:"pointer", background:"red", color:"white"}}  color="error" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon" component={Link} to="/"><TwitterIcon         sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
            </ul>

        </div>
      </>
    };
  
  export default Home;
