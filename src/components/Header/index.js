import React from 'react';
import styles from './styles.scss'
import logo from './images/ow-logo.png'

const Header = (props) => {

    return (
        <header className="header">
            <div className="header--wrapper">
                <span>
                    <img src={logo} />
                </span>
            </div>
        </header>
    )
}

export default Header;
