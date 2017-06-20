import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openFolder} from '../../../../actions/drive';

class FolderNavigator extends Component {

    static propTypes = {
        location: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }

    getLocation() {
        let currentLocation = this.props.drive;
        const locationArray = this.props.location.split('/');
        locationArray.forEach(e => currentLocation = currentLocation[e]);
        return currentLocation;
    }

    render() {
        return (
            <div>
                {Object.keys(this.getLocation()).map((key) => (
                    <div key={key} onClick={() => this.props.openFolder(this.props.id, key) }>{key}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    drive: state.drive,
});

const mapDispatchToProps = dispatch => ({
    openFolder: (id, key) => dispatch(openFolder(id, key)),
})


export default connect(mapStateToProps, mapDispatchToProps)(FolderNavigator);