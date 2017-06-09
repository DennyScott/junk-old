import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOpenPrograms } from '../../../selectors/openPrograms';
import styled from 'styled-components';
import { hideProgram } from '../../../actions/openProgram';
import TaskbarItem from '../../../components/Computer/Taskbar/TaskbarItem/taskbar-item';
import MenuTray from '../../../components/Computer/Taskbar/MenuTray/menu-tray';


const StartButton = styled.div`
    width: 100px;
    height: 100%;
    background-color: blue;
    color:white;
`

const MenuButton = styled.div`
    height: 100%;
    width: 200px;
    background-color: lightgrey;
    margin-left: auto;
`

const TaskbarDiv = styled.div`
    background-color: grey;
    width: 100%;
    height:50px;
    position:absolute; 
    bottom:0;
    z-index:2;
    display: flex;
    align-items: flex-end;
`

class Taskbar extends Component {
    static propTypes = {
        openPrograms: PropTypes.array.isRequired,
    }

    render() {
        return (
            <TaskbarDiv>
                <StartButton>
                    Start
                </StartButton>
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