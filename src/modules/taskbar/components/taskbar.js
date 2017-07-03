import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOpenPrograms } from 'selectors/openPrograms';
import styled from 'styled-components';
import { hideProgram } from 'actions/openProgram';
import TaskbarItem from './taskbar-item/taskbar-item';
import MenuTray from './menu-tray/menu-tray';
import backgroundImage from '../assets/xptaskbar.png';
import startButton from '../assets/xpstart_btn.png';


const StartButton = styled.div`
    width: 100px;
    height: 100%;
    background-color: blue;
    color:white;
    background-image: url(${startButton});
`

const TaskbarDiv = styled.div`
    background-image: url(${backgroundImage});
    background-repeat: repeat-x;
    width: 100%;
    height:30px;
    position:absolute;
    bottom:0;
    z-index:2;
    display: flex;
`

class Taskbar extends Component {
    static propTypes = {
        openPrograms: PropTypes.array.isRequired,
    }

    render() {
        return (
            <TaskbarDiv>
                <StartButton />
                {this.props.openPrograms.map(program => <TaskbarItem key={program.windowId} name={program.name} onClick={() => this.props.hideProgram(program.windowId, !program.isShowing)}/>)}
                <MenuTray />
            </TaskbarDiv>
        );
    }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

const mapDispatchToProps = dispatch => ({
  hideProgram: (windowId, isShowing) => dispatch(hideProgram(windowId, isShowing))
});

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);
