import React from 'react';
import {Link} from 'gatsby';
import '../static/NavBar.css'


const NavBar = ()=>{
    return(
        <div className="navbar ">
                <Link to="/" className="brand">Gatsby</Link>
                <ul className="nav_ul">
                    <li className="nav_li">
                        <Link to="/" className="nav_item">Home</Link>
                    </li>
                    <li className="nav_li">
                        <Link  to="/about" className="nav_item">About</Link>
                    </li>
                   
                </ul>
        </div>
    )
}

export default NavBar;
