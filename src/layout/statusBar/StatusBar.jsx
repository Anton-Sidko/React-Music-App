import React, {useState, useEffect} from 'react';
import './StatusBar.sass';
import wifiIcon from '../../img/icons/wifi-icon.svg';
import bluetoothIcon from '../../img/icons/bluetooth-icon.svg';

function StatusBar() {
    let [time, setTime] = useState(new Date().toLocaleString([], {hour: '2-digit', minute: '2-digit'}));

    let [baterryLevel, setBaterryLevel] = useState();

    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date().toLocaleString([], {hour: '2-digit', minute: '2-digit'}));
        }, 10000);
        return () => clearInterval(timeId);
    }, []);

    useEffect(() => {
        let level = Math.floor(Math.random() * 100);
        setBaterryLevel(level);
        const baterryRect = document.querySelector('.baterryRect');
        baterryRect.style.width = `${level}%`
        if (level <= 20) {
            baterryRect.style.backgroundColor = 'red';
            baterryRect.style.height = '100%';
            baterryRect.style.transform = 'none';
        }
    }, [])

    return (
        <div className="status-bar">
            <div className="mobile-signal-info">
                <ul className="mobile-signal-lvl">
                    <li className="good-lvl"></li>
                    <li className="good-lvl"></li>
                    <li className="good-lvl"></li>
                    <li ></li>
                    <li ></li>
                </ul>
                <span className="operator">Mobile</span>
            </div>
            <div className="timeNow">{time}</div>
            <div className="system-info-wrap">
                <img className="icons" src={wifiIcon} alt={wifiIcon} />
                <img className="icons" src={bluetoothIcon} alt={bluetoothIcon} />
                <div className="baterry-wrap">
                    <span className="baterry-level">{baterryLevel}%</span>
                    <div className="battery-icon">
                        <span className="baterryRect"></span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StatusBar;


