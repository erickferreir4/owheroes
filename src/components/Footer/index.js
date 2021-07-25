import React from 'react';
import styles from './styles.scss'
import logo from './images/ow-logo.png'

const Footer = (props) => {

    return (
        <footer className="footer">
            <span>
                <img src={logo} />
            </span>
        </footer>
    )
}

export default Footer;
