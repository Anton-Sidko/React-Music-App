import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.sass';
import {heartIcon,
        listIcon,
        personIcon,
        folderIcon} from '../assets';

function Footer() {

    return (
        <footer>
            <nav>
                <ul className="footer-link-list">
                    <li>
                        <NavLink
                            to="/like"
                            className="footer-link"
                            activeClassName="active"
                        >
                            <div className="footer-link-img">
                                <img src={heartIcon} alt={heartIcon} />
                            </div>
                            <span>Like</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            exact to="/"
                            className="footer-link"
                            activeClassName="active"
                        >
                            <div className="footer-link-img">
                                <img src={listIcon} alt={listIcon} />
                            </div>
                            <span>Chart</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/artist"
                            className="footer-link"
                            activeClassName="active"
                        >
                            <div className="footer-link-img">
                                <img src={personIcon} alt={personIcon} />
                            </div>
                            <span>Artist</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/genre"
                            className="footer-link"
                            activeClassName="active"
                        >
                            <div className="footer-link-img">
                                <img src={folderIcon} alt={folderIcon} />
                            </div>
                            <span>Genre</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;