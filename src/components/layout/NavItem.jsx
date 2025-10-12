import React from 'react';

const NavItem = ({ icon, name, path, active }) => (
    <li className={`nav-item ${active ? 'active' : ''}`}>
        <a href={path} className="nav-link">
            {icon && <i className={`nav-icon ${icon}`}></i>}
            <span className="nav-name">{name}</span>
        </a>
    </li>
);

export default NavItem;