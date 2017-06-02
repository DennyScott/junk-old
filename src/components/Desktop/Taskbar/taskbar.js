import React from 'react';
import PropTypes from 'prop-types';
import './taskbar.css';

const taskbar = props =>(
    <div className="taskbar">
        <div className="start-button" />
        <div className="taskbar-item" />
        <div className="menu-tray pull-right" />
    </div>
);

export default taskbar;


import React, {Component} from 'react';
import { getOpenPrograms } from '../../selectors/openPrograms';
import { connect } from 'react-redux';
import ProgamWindow from '../Window/programWindow';
import Desktop from './desktop';

class Taskbar extends Component {
    render() {
        return (
            <div className="taskbar">
                <div className='programs-conatiner'>
                    {this.props.openPrograms.map(program =>
                        <ProgamWindow key={program.windowId} program={program}/>
                    )}
                </div>
                <div className="start-button" />
                <div className="taskbar-item" />
                <div className="menu-tray pull-right" />   
            </div>
        );
    }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

export default connect(mapStateToProps)(WorkDesk);