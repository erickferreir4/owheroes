import React from 'react';
import styles from './styles.scss'

const Header = (props) => {

    return (
        <header className="header">
            <div className="header--wrapper">
            <span>
                <img src="http://via.placeholder.com/150x50" />
            </span>

            <ul>
                <li>
                    <span><img src="http://via.placeholder.com/50x50"/></span>
                </li>
                <li>
                    <span><img src="http://via.placeholder.com/50x50"/></span>
                </li>
                <li>
                    <span><img src="http://via.placeholder.com/50x50"/></span>
                </li>
                <li>
                    <span><img src="http://via.placeholder.com/50x50"/></span>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default Header;
