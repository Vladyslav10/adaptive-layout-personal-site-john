import React from "react";
import './Footer.scss';
import fb from '../../img/footer/fb.png';
import insta from '../../img/footer/insta.png';
import Group from '../../img/footer/Group.png';
import Linkedin from '../../img/footer/Linkedin.png';

const Footer = () => {

    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__img">
                        <a href="https://m.facebook.com">
                            <img src={fb} alt="logo facebook" />
                        </a>
                    </div>
                    <div className="footer__img">
                        <a href="https://www.instagram.com">
                            <img src={insta} alt="logo instagram" />
                        </a>
                    </div>
                    <div className="footer__img">
                        <a href="https://twitter.com/?lang=ru">
                            <img src={Group} alt="logo twitter" />
                        </a>
                    </div>
                    <div className="footer__img">
                        <a href="https://ua.linkedin.com/">
                            <img src={Linkedin} alt="logo linkedin" />
                        </a>
                    </div>
                </div>
                <p className="footer__copyright">Copyright ©2020 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;