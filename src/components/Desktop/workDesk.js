import React, {Component} from 'react';
import { getOpenPrograms } from '../../selectors/openPrograms';
import { connect } from 'react-redux';
import ProgamWindow from '../Window/programWindow';
import Desktop from './desktop';
import styled from 'styled-components';

const Workdesk = styled.div`
    height: calc(100% - 50px);
    top:0;
    left: 0;
    right: 0;
    bottom: 50px;
    position: fixed;
`

const WindowsContainer = styled.div`
    height: 100%;
`

class WorkDesk extends Component {
    render() {
        return (
            <Workdesk>
                <WindowsContainer>
                <Desktop />
                    {this.props.openPrograms.map(program =>
                        <ProgamWindow key={program.windowId} program={program}/>
                    )}
                </WindowsContainer>
            </Workdesk>
        );
    }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

export default connect(mapStateToProps)(WorkDesk);