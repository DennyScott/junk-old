import React from 'react';
import Window from '../Window/window';
import Icon from '../Desktop/Icon/icon';
import MyComputerLogo from './my_computer.png';

import './desktop.css';

const desktop = props =>(
    <div className="desktop">
        <Window isFullscreen={false}/>
        <Icon img={MyComputerLogo} appName="My Computer"/>
    </div>
);

export default desktop;