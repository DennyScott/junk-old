import React from 'react';
import PropTypes from 'prop-types';
import ProgramWindow from 'containers/Computer/Desktop/Window/programWindow';
import styled from 'styled-components';

const Description = styled.div`` 

const SingleValueForm = styled.form``

const singleInputWindow = props => (
    <ProgramWindow program={props.program}>
        <Description>
            {props.description}
        </Description>
        
        <SingleValueForm onSubmit={e => {e.preventDefault(); props.onSubmitForm();}}>

            <input type={props.type} value={props.content} name={props.name} onChange={props.onInputChange} placeholder={props.placeholder}/>
            <button>OK</button>
        </SingleValueForm>
    </ProgramWindow>
);

singleInputWindow.propTypes = {
    type: PropTypes.oneOf(['text', 'password']).isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    program: PropTypes.object.isRequired,

};

export default singleInputWindow;