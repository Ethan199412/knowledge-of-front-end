import React, { Component } from 'react';

export default class ComponentDidCatchDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
    }
    componentDidCatch(error, info) {
        console.log('[p2.0] catch', { error, info })
        this.setState({ error, info });
    }
    render() {
        if (this.state.error) {
            return <h1>Error: {this.state.error.toString()}</h1>;
        }
        return <>{this.props.children.toString()}</>;
    }
}