import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.sass';

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
                            Like
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/chart"
                            className="footer-link"
                            activeClassName="active"
                        >
                            Chart
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/artist"
                            className="footer-link"
                            activeClassName="active"
                        >
                            Artist
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/genre"
                            className="footer-link"
                            activeClassName="active"
                        >
                            Genre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;