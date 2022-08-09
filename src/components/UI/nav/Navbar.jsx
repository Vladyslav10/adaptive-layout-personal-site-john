import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';
import { BLOG_ROUTE, WORKS_ROUTE } from "../../../utils/consts";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../../store/pageReducer";
import { Link } from "react-scroll/modules";

const Navbar = (props) => {
    const dispatch = useDispatch();


    return(
       <nav className={props.active === true ? "navbar active" : "navbar"}>
           <ul className="navbar__list">
               <li>
                   <NavLink onClick={() => dispatch(setIsActive(false))} className="navbar__link" to={WORKS_ROUTE}>Works</NavLink>
               </li>
               <li>
                   <NavLink onClick={() => dispatch(setIsActive(false))} className="navbar__link" to={BLOG_ROUTE}>Blog</NavLink>
               </li>
               <li>
                <Link activeClass="active"
                    onClick={() => dispatch(setIsActive(false))}
                    to="footer"
                    smooth={true}
                    duration={500}
                    className="navbar__link" 
                >
                    Contact
                </Link>
               </li>
           </ul>
       </nav> 
    );
};

export default Navbar;