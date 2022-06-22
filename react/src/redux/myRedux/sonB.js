import { Button } from 'antd';
import React, { PureComponent } from 'react';
import store from './my-redux';


class SonB extends PureComponent {
    constructor(props) {
        super(props)
        store.subscribe(this.storeChange)
        this.state = store.getState()
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {
        store.dispatch({ type: 'changeName', data: 'NB' })
    }

    state = {}
    render() {
        const { age } = this.state
        return (<div>
            <div>age:{age}</div>
            <Button onClick={this.handleClick}>change name</Button>
        </div>);
    }
}

export default SonB;