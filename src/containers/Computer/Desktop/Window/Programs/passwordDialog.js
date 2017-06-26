import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { closeProgram, updatePasswordInput } from 'actions/openProgram';
import SingleInputWindow from 'components/Computer/Desktop/Window/singleInput';

class PasswordDialog extends Component {

    static propTypes = {
        program: PropTypes.object.isRequired,
    };

    onSubmitPassword() {
        this.props.program.payload.neededPassword === this.props.program.payload.inputText
            ? this.onSuccessPasswordSubmit()
            : this.props.updatePasswordInput(this.props.program.windowId, "");
    }

    onSuccessPasswordSubmit() {
        this.props.program.payload.successCallback();
        this.props.closeProgram(this.props.program.windowId);
    }

    render() {
        return (
            <SingleInputWindow 
                program={this.props.program} 
                type="password" 
                name="password-dialog" 
                content={this.props.program.payload.inputText} 
                onInputChange={input => this.props.updatePasswordInput(this.props.program.windowId, input.target.value)} 
                description="Please submit the correct password" 
                onSubmitForm={() => this.onSubmitPassword()}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closeProgram: windowId => dispatch(closeProgram(windowId)),
    updatePasswordInput: (windowId, input) => dispatch(updatePasswordInput(windowId, input)),
})

export default connect(null, mapDispatchToProps)(PasswordDialog);
