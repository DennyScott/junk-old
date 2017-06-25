import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProgramWindow from '../programWindow';
import { closeProgram } from '../../../../../actions/openProgram';

class PasswordDialog extends Component {

    static propTypes = {
        program: PropTypes.object.isRequired,
    };

    onSubmitPassword() {
        this.props.program.payload.neededPassword === this.passwordInput.value
            ? this.onSuccessPasswordSubmit()
            : this.passwordInput.value = "";
    }

    onSuccessPasswordSubmit() {
        this.props.program.payload.successCallback();
        this.props.closeProgram(this.props.program.windowId);
    }

    render() {
        return (
            <ProgramWindow program={this.props.program}>
                <input type="text" name="password" ref={input => this.passwordInput = input}/>
                <button onClick={() => this.onSubmitPassword(this.props.program.payload.successCallback)} />
            </ProgramWindow>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closeProgram: windowId => dispatch(closeProgram(windowId)),
})

export default connect(null, mapDispatchToProps)(PasswordDialog);
