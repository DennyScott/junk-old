import React, {Component} from 'react';
import { openProgram } from '../../actions/openProgram';
import { connect } from 'react-redux';
import Window from '../Window/window';
import Icon from '../Desktop/Icon/icon';
import Desktop from './desktop';
import MyComputerLogo from './my_computer.png';

class WorkDesk extends Component {
    myComputer = {
        id: 'My_Computer',
        logo: MyComputerLogo,
    }

    render() {
        console.log(this.props.openPrograms);
        return (
            <div className="work-desk">
                <div className='windows-conatiner'>
                    {Object.keys(this.props.openPrograms).map(program =>{
                        console.log('hello')
                        return (<Window />)
                    })}
                </div>
                <Desktop />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    openPrograms: state.openPrograms
});

const mapDispatchToProps = dispatch => ({
    openProgram: newProgram => dispatch(openProgram(newProgram.id, newProgram))
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkDesk);