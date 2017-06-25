import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openFolder, backFolder, upFolder, forwardFolder } from '../../../../../actions/openProgram';
import NavigationBar from '../../../../../components/Computer/Desktop/Window/NavigationBar/navigationBar';
import ProgramWindow from '../programWindow';

class Explorer extends Component {

    static propTypes = {
        program: PropTypes.object.isRequired,
    }

    render() {
        return (
             <ProgramWindow program={this.props.program} displayMenu>
                <NavigationBar upButtonClick={() => this.props.upFolder(this.props.program.windowId)} backButtonClick= {() => this.props.backFolder(this.props.program.windowId)} forwardButtonClick={() => this.props.forwardFolder(this.props.program.windowId)}/>
                {Object.keys(this.props.program.currentDirectory).map((key) => (
                    <div key={key} onClick={() => this.props.openFolder(this.props.program.windowId, key, this.props.program.currentDirectory[key]) }>{key} password: {this.props.program.currentDirectory[key].password}</div>
                ))}
            </ProgramWindow>
        )
    }
}

const mapStateToProps = state => ({
    drive: state.drive,
});

const mapDispatchToProps = dispatch => ({
    openFolder: (windowId, key, folder) => dispatch(openFolder(windowId, key, folder)),
    upFolder: id => dispatch(upFolder(id)),
    backFolder: id => dispatch(backFolder(id)),
    forwardFolder: id => dispatch(forwardFolder(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Explorer);