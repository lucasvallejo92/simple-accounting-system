import React from 'react';

export const NavBar = ({onChangeRoute, page}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Account</a>
            <ul className="navbar-nav">
                <li className={page == 'home' ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" onClick={() => onChangeRoute('home')}>Home<span className="sr-only"></span></a>
                </li>
                <li className={page == 'new' ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" onClick={() => onChangeRoute('new')}>New transaction</a>
                </li>
            </ul>
      </nav>
    )
}