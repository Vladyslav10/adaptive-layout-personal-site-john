import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../store/pageReducer";
import Navbar from "../UI/nav/Navbar";
import './Header.scss';


const Header = () => {
    const dispatch = useDispatch();
    const active = useSelector(state => state.pageReducer.isActive);

    return (
        <header className="header">
            <div className="header__row">
                <Navbar active={active} />
                <div className={active === false ? "burger__icon" : "burger__icon active"} onClick={() => dispatch(setIsActive(!active))}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;