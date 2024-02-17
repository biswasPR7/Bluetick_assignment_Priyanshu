import React from "react";
import logo_pic from "./logo@bluetick.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faNewspaper,faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <header>
      <nav>
      <div className="left"> <img  src={logo_pic } alt="pic" /></div>
        <div className="right">
          <ul className="navItems">
            <li>
              <Link to="about_id" smooth={true}>
              <FontAwesomeIcon icon={faUser} />
               <div>About</div> 
              </Link>
            </li>

           
            <li>
            <Link to="blogs_id" smooth={true}>
            <FontAwesomeIcon icon={faNewspaper} />
              <div>Blogs</div>
              </Link>
            </li>
            
            <li>
            <Link to="contact_id" smooth={true}>
            <FontAwesomeIcon icon={faEnvelope } />
             <div>Contact us</div> 
             </Link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
