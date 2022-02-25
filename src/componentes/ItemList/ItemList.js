import React from "react";
import Item from "../ItemList/Item";
import Box from "@mui/material/Box";
import "./ItemList.css";

import { MenuItem } from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const ItemList = ({ items }) => {
  //mapeo los items
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "300",
          height: "500",
          margin: "20px",
          overflow: "hidden",
        }}
      >
        {items.map((item) => (
          <div key={item.id}>
            <Item item={item}></Item>
          </div>
        ))}
      </Box>

      <div className="social">
        <ul>
          <li className="socialLi">
            <MenuItem className="icon">
              <FacebookRoundedIcon
                sx={{ cursor: "pointer", background: "blue", color: "white" }}
                color="primary"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon">
              <WhatsappRoundedIcon
                sx={{ cursor: "pointer", background: "green", color: "white" }}
                color="success"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon">
              <EmailRoundedIcon
                sx={{ cursor: "pointer", background: "red", color: "white" }}
                color="error"
                fontSize="large"
              />
            </MenuItem>
          </li>
          <li className="socialLi">
            <MenuItem className="icon">
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
export default ItemList;
