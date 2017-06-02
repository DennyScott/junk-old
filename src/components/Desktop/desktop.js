import React, {Component} from 'react';
import { openProgram } from '../../actions/openProgram';
import { connect } from 'react-redux';
import Icon from '../Desktop/Icon/icon';
import MyComputerLogo from './my_computer.png';

import './desktop.css';

class Desktop extends Component {
    myComputer = {
        id: 'My_Computer',
        logo: MyComputerLogo,
        name: 'My Computer',
    }

    render() {
        return (
            <div className="desktop">
                {this.props.programs.map(program =>
                    <Icon key={program.id}onDoubleClick={() => this.props.openProgram(program.id)} program={program}/>
                )}                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    programs: state.programs
});

const mapDispatchToProps = dispatch => ({
    openProgram: programId => dispatch(openProgram(programId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);