// create a transparent Navbar component

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = (props) => {
    const title = 'Mahesh Jamdade'
    return (
        <>
            <nav className="navbar row">
                <div className="navbar-container">
                    {/* <Link to="/">
                        <img className='circular' src="https://maheshjamdade.com/img/profile_pic.jpg " alt="logo" />
                    </Link> */}
                    <Link to="/" className="navbar-logo"> {title} </Link>
                    {/* Dark mode icon */}
                    {/* create a dark mode toggle icon */}

                    < div className="dark-mode__toggle" onClick={props.toggleMode}>
                        <div

                            className={props.darkMode ? 'toggle toggled' : 'toggle'}
                        />

                    </div>



                </div>
            </nav>
        </>
    )
}

export default Navbar;