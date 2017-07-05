import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TaskbarItem from './components/taskbar-item/taskbar-item';
import MenuTray from './components/menu-tray/menu-tray';
import { getActivePrograms } from 'selectors/activePrograms';
import { hideProgram } from 'modules/program';
import backgroundImage from './assets/xptaskbar.png';
import startButton from './assets/xpstart_btn.png';


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
        activePrograms: PropTypes.array.isRequired,
    }

    render() {
        return (
            <TaskbarDiv>
                <StartButton />
                {this.props.activePrograms.map(program => <TaskbarItem key={program.windowId} name={program.name} onClick={() => this.props.hideProgram(program.windowId, !program.isShowing)}/>)}
                <MenuTray />
            </TaskbarDiv>
        );
    }
}

const mapStateToProps = state => ({
    activePrograms: getActivePrograms(state)
});

const mapDispatchToProps = dispatch => ({
  hideProgram: (windowId, isShowing) => dispatch(hideProgram(windowId, isShowing))
});

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);
