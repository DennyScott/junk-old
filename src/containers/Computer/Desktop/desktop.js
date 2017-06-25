import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getOpenPrograms, getNotepadOpenPrograms } from '../../../selectors/openPrograms';
import { getExplorerOpenProgramsWithContents, getDesktopContents } from '../../../selectors/drive';
import { openProgram } from '../../../actions/openProgram';
import { storeVariable } from '../../../actions/variable';
import Icon from '../../../components/Computer/Desktop/Icon/icon';
import Notepad from '../../../components/Computer/Desktop/Window/Programs/notepad';
import Explorer from './Window/Programs/explorer';
import { NOTEPAD, EXPLORER } from '../../../programs';

import './desktop.css';

const DesktopDiv = styled.div`
    height: calc(100% - 50px);
    top:0;
    left: 0;
    right: 0;
    bottom: 50px;
    position: fixed;
`

const OpenWindows = styled.div`
    height: 100%;
`

const DesktopIcons = styled.div`
    height: 100%;
`

class Desktop extends Component {
    render() {
        return (
            <DesktopDiv>
                <DesktopIcons> 
                    {Object.keys(this.props.contents).map(key =>
                        <Icon key={key} onDoubleClick={() => this.props.openProgram(this.props.contents[key])} name={key} logo={this.props.contents[key].logo}/>
                    )}
                </DesktopIcons>

                <OpenWindows>
                    {this.props.notepadOpenPrograms.map(program => <Notepad key={program.windowId} program={program} text={program.payload.text}/>)}
                    {this.props.explorerOpenPrograms.map(program => <Explorer key= {program.windowId} program={program}/>)}    
                </OpenWindows>          
            </DesktopDiv>
        );
    }
}

const mapStateToProps = state => ({
    contents: getDesktopContents(state),
    programs: state.programs,
    notepadOpenPrograms: getNotepadOpenPrograms(state),
    explorerOpenPrograms: getExplorerOpenProgramsWithContents(state),
});

const mapDispatchToProps = dispatch => ({
    openProgram: program => dispatch(openProgram(program)),
    createVariable: (variableName, payload) => dispatch(storeVariable(variableName, payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);