import React, {useState, useEffect} from 'react';

import './Header.sass';
import {sideMenuBG,
        shareIcon,
        editIcon,
        donateIcon,
        cloudIcon,
        settingsIcon,
        userPhoto} from '../assets';

function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    useEffect(() => {
        const header = document.querySelector('header');

        if (isSideMenuOpen) {
            header.classList.add('menu-open');
        } else {
            header.classList.remove('menu-open');
        }
    }, [isSideMenuOpen])

    return (
        <header>
            <div className="header-row">
                <div className="toggleMnu-btn" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="user-wrap">
                    <span>Username</span>
                    <div className="user-photo-wrap">
                        <img src={userPhoto} alt={userPhoto} />
                    </div>
                </div>
            </div>

            <div className="side-menu">
                <div className="side-menu-img">
                    <img src={sideMenuBG} alt={sideMenuBG} />
                </div>
                <nav>
                    <ul className="side-menu-list">
                        <li>
                            <div className="icon-wrap">
                                <img src={shareIcon} alt={shareIcon} />
                            </div>
                            <a href="!#">Share</a>
                        </li>
                        <li>
                            <div className="icon-wrap">
                                <img src={editIcon} alt={editIcon} />
                            </div>
                            <a href="!#">Edit</a>
                        </li>
                        <li>
                            <div className="icon-wrap">
                                <img src={donateIcon} alt={donateIcon} />
                            </div>
                            <a href="!#">Donate</a>
                        </li>
                        <li>
                            <div className="icon-wrap">
                                <img src={cloudIcon} alt={cloudIcon} />
                            </div>
                            <a href="!#">Upload to cloud</a>
                        </li>
                        <li>Design by<a href='https://www.behance.net/yuliavladi8e1a?tracking_source=search_projects_recommended%7Cspa' className="behance-link">Yulia Fedorova</a>.</li>
                        <li>
                            <div className="icon-wrap">
                                <img src={settingsIcon} alt={settingsIcon} />
                            </div>
                            <a href="!#">Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="overlay-menu"></div>
        </header>
    )
}

export default Header;