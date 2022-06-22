import { Button } from 'antd';
import React, { PureComponent } from 'react';
import store from './my-redux';

class SonA extends PureComponent {
    constructor(props) {
        super(props)
        store.subscribe(this.storeChange)
        this.state = store.getState()
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {
        store.dispatch({ type: 'changeAge', data: 1 })
    }

    state = {}
    render() {
        const { name } = this.state
        return (<div>
            <div>name:{name}</div>
            <Button onClick={this.handleClick}>age+</Button>
        </div>);
    }
}

export default SonA;