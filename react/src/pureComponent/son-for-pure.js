import React, { PureComponent } from 'react';

class SonForPure extends PureComponent {
    render() {
        const { name } = this.props
        console.log('pure son render')
        return (<div>{name}</div>);
    }
}


export default SonForPure; 