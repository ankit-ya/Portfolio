import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://shinchancode.github.io/portfolio/" target="_blank">
            {" "}
            Ankit Yadav
          </a>
          😎
        </p>
        <p className="pink-text-gradient">
  No. of Visitors |{" "}
  <a href="https://www.hitwebcounter.com" target="_blank" rel="noreferrer">
    <img
      className="visitcounter"
      src="https://hitwebcounter.com/counter/counter.php?page=20781800&style=0010&nbdigits=5&type=page&initCount=0"
      title="Counter Widget"
      alt="Visit counter For Websites"
      border="0"
    />
  </a>
</p>

      </div>
    );
  };
  
  export default Footer;