import React, {Component} from 'react';
import { getOpenPrograms } from '../../selectors/openPrograms';
import { connect } from 'react-redux';
import ProgamWindow from '../Window/programWindow';
import Desktop from './desktop';

class WorkDesk extends Component {
    render() {
        return (
            <div className="work-desk">
                <div className='windows-conatiner'>
                    {this.props.openPrograms.map(program =>
                        <ProgamWindow key={program.windowId} program={program}/>
                    )}
                </div>
                <Desktop />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

export default connect(mapStateToProps)(WorkDesk);