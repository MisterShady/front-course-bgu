import React from 'react';
import './css/Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="nav">
            <a href="#" className="nav-logo">
                <img src="vladick-logo.png" alt="Логотип" />
            </a>
            <a href="#filmList" className="nav-link">Фильмы</a>
            <a href="#booking" className="nav-link">Билеты</a>
        </nav>
    );
};

export default Nav;
