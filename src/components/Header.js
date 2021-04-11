import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header-container">
            <Link to="/">
                <img src="https://m.blog.hu/fi/filmvilag/skins/classic/fejlec/eden6.jpg" alt=""/>
            </Link>
        </div>
    );
}

export default Header;