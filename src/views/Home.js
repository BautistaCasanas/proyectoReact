

import "./Home.css"
import * as React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {

    return <>
        <div className="catalogoContainer">

          <div className="buttonCatalogo">

          <div className="clotheButton"><Button component={Link} to="/category/women's clothing" sx={{color:"black"}}><b>Women`s Clothing</b></Button></div>

          </div>

          <div className="buttonCatalogo1">

          <div className="clotheButton"><Button component={Link} to="/category/men's clothing" sx={{color:"black"}}><b>Men`s Clothing</b></Button></div>

          </div>

          <div className="buttonCatalogo2">

          <div className="clotheButton"><Button component={Link} to="/category/jewelery" sx={{color:"black"}}><b>Jewelry</b></Button></div>

          </div>

          <div className="buttonCatalogo3">

          <div className="clotheButton"><Button component={Link} to="/category/electronics" sx={{color:"black"}}><b>Tech</b></Button></div>

          </div>
          
        </div>
      </>
    };
  
  export default Home;
