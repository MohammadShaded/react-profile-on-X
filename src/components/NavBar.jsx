import React from 'react';
import twitterData from '../data/twitterData.jsx';
import NavItem from './NavItem';
import logoWhite from '../assets/logo-white.png';

const NavBar = ({navigationItems}) => {
    return (
        <nav>
            <div className="x-logo">
                <img src={logoWhite} alt="X logo" />
            </div>
            <ul>
                {navigationItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;