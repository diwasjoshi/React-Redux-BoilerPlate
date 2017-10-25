import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appClickAction } from '../../actions/index';

class First extends Component {
    constructor(props){
        super(props);
    }
    onAppClick = () => {
        this.props.appClickAction();
    }
    render() {
        return (
            <div onClick={this.onAppClick}>{this.props.app_click_message}</div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ appClickAction }, dispatch);
}

function mapStateToProps(state){
    return { app_click_message: state.appClick.app_click_message };
}

export default connect(mapStateToProps, mapDispatchToProps)(First);
