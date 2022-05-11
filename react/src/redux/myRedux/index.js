import { Button } from 'antd';
import React, { PureComponent } from 'react';
import store from './my-redux';
import SonA from './sonA';
import SonB from './sonB';

class MyReduxDemo extends PureComponent {
    constructor(props) {
        super(props)
        store.subscribe(this.storeChange)
        this.state = store.getState();
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {
        store.dispatch({ type: 'changeAge', data: 1 })
    }

    render() {
        const { name, age } = this.state
        return (<div>
            {/* <div>name:{name}</div>
            <div>age:{age}</div>
            <Button onClick={this.handleClick}>click</Button> */}
            <SonA/>
            <SonB/>
        </div>);
    }
}

export default MyReduxDemo;