import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar =() =>{
    return(
        <>
<div className="container-fluid nav_bg">
  <div className="row">
    <div className="col-10 mx-auto"></div>
  </div>
</div>
<nav className=" navbar">
<div className="container-fluid">
  <a className="navbar-brand">STecH</a>
  
  <ul className="nav nav-tabs">
  <li className="nav-item"><a ClassName="menu_active" className="nav-link " aria-current="page" href="/">Home</a></li>
  <li className="nav-item"><a activeClassName="menu_active" className="nav-link "  href="/about">About</a></li>
  <li className="nav-item"><a activeClassName="menu_active" className="nav-link" href="/contact">Contact</a></li>
  <li className="nav-item"><a activeClassName="menu_active" className="nav-link" href="/service">Service</a></li></ul>
  
  </div>
</nav>



</>
    );
};
export default Navbar;