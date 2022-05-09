import React, { PureComponent } from 'react';
import { store } from './store.js';

class SonB extends PureComponent {
    constructor(props) {
        super(props)
        this.state = store.getState();
        //subscribe当store中数据发生变化就会更新数据
        store.subscribe(this.storeChange)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {
        store.dispatch({ type: 'changeName', data: 'a' })
    }
    render() {
        const { value } = this.state
        console.log('[p0.0] value', value)
        return (<div>
            <div>sonA</div>
            <div>value:</div>
            <div>{value}</div>
            <button onClick={this.handleClick}>change name</button>
        </div>);
    }
}

export default SonB;