import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openFolder, backFolder, upFolder, forwardFolder } from '../../../../../actions/drive';
import NavigationBar from '../../../../../components/Computer/Desktop/Window/NavigationBar/navigationBar';
import ProgramWindow from '../programWindow';

class Explorer extends Component {

    static propTypes = {
        program: PropTypes.object.isRequired,
    }

    getLocation() {
        let currentLocation = this.props.drive;
        const locationArray = this.props.program.payload.location.split('/');
        locationArray.forEach(e => currentLocation = currentLocation[e]);
        return currentLocation;
    }

    render() {
        return (
             <ProgramWindow program={this.props.program} displayMenu={true}>
                <NavigationBar upButtonClick={() => this.props.upFolder(this.props.program.windowId)} backButtonClick= {() => this.props.backFolder(this.props.program.windowId)} forwardButtonClick={() => this.props.forwardFolder(this.props.program.windowId)}/>
                {Object.keys(this.getLocation()).map((key) => (
                    <div key={key} onClick={() => this.props.openFolder(this.props.program.windowId, key) }>{key}</div>
                ))}
            </ProgramWindow>
        )
    }
}

const mapStateToProps = state => ({
    drive: state.drive,
});

const mapDispatchToProps = dispatch => ({
    openFolder: (id, key) => dispatch(openFolder(id, key)),
    upFolder: id => dispatch(upFolder(id)),
    backFolder: id => dispatch(backFolder(id)),
    forwardFolder: id => dispatch(forwardFolder(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Explorer);