import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);
    const transitionNavbar = () => {
        if(window.scrollY >100){
            handleShow(true);
        } else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener('scroll',transitionNavbar)
    }, []);

  return (
    <div className= {'nav ${show && "nav_black"}'}> 
        <div className="nav_contents">
        <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
        <img className="nav_avatar" src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/351efdd5c9879db23df33bde_rw_600.png?h=e1e19e4f0eb5c66ca9eceb0e9438b2ca" alt=""></img>
        </div>
    </div>
  )
}

export default Nav