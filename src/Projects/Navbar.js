import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify,FaTimes } from "react-icons/fa";
import { Data } from "./Data";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
            <NavLink to='/' className='l'>
            <h1><span>Ray</span><span>.</span>Prem </h1>
            </NavLink>             
           </div>
          </ul>
         
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Data.map(({id,title,cname,to,aClass})=>(
              <li key={id} className="nav-item"><NavLink  to={to }  activeClassName={aClass}
                className={cname} onClick={() => setClick(!click)}>{title}</NavLink></li>))}             
            </ul>
          
        </div>
      </div>
      <div className="nav-icon" onClick={() => setClick(!click)}>
       { click ? <FaTimes/>:<FaAlignJustify />}
      </div>
    </nav>
  );
};

export default Navbar;
