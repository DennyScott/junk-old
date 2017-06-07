import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getOpenPrograms } from '../../selectors/openPrograms';
import { openProgram } from '../../actions/openProgram';
import Icon from '../../../components/Computer/Desktop/Icon/icon';
import ProgamWindow from '../Window/programWindow';


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
                    {this.props.programs.map(program =>
                        <Icon key={program.id} onDoubleClick={() => this.props.openProgram(program.id)} name={programname} logo={program.logo}/>
                    )}
                </DesktopIcons>

                <OpenWindows>
                    {this.props.openPrograms.map(program =>
                        <ProgamWindow key={program.windowId} program={program}/>
                    )}      
                </OpenWindows>          
            </DesktopDiv>
        );
    }
}

const mapStateToProps = state => ({
    programs: state.programs,
    openPrograms: getOpenPrograms(state),
});

const mapDispatchToProps = dispatch => ({
    openProgram: programId => dispatch(openProgram(programId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);