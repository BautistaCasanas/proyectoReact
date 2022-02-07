import React from "react";
import img from "../NotFound/404.png"


const NotFound = () => {
    return(
        <div className="error-page">
            <img src={img} width="100%" alt="ErrorPage" />
        </div>
    );
};

export default NotFound;