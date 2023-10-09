import React,{useState} from "react";
import "./Header.css"
import {Link} from "react-scroll"
import {Link as Link1} from "react-router-dom"

const Navbar = () => {

    const [color,setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    };
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar" }>
        
        <h2 className="header"> Parthiv Borda </h2>
        <div>
           <Link to="project" smooth={true} duration={500} className="project-link">
              Project
           </Link>
           <Link1 to="/about" className="about-link">
              About
           </Link1>
         </div>
    </div>
  );
}

export default Navbar;






// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Header.css";

// const Header = () => {
//   return (
//     <section className="section">
//       <div className="header">
//          <h2 className='header-heading'>Parthiv Borda</h2>
        //  <div>
        //    <Link to="/" className="project-link">
        //       Project
        //    </Link>
        //    <Link to="/about" className="about-link">
        //       About
        //    </Link>
        //  </div>
//       </div>
//     </section>
//   )
// }

// export default Header
