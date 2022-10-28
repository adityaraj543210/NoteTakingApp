/*jshint esversion: 6 */
import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (
        <div>
            <footer> 
                <p>Made with ❤ by <a href="https://www.linkedin.com/in/aditya-raj-505361194/"> Aditya </a>ⓒ {year}</p>
                
            </footer>
        </div>
    );
}

export default Footer;