import React, { Component } from 'react';

class SonForCommon extends Component {
    render() {
        const { name } = this.props
        console.log('common son render')
        return (<div>{name}</div>);
    }
}

export default SonForCommon;