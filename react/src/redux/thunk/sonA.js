import React, { PureComponent } from 'react';
import { store } from './store.js';

class SonA extends PureComponent {
    constructor(props) {
        super(props)
        this.state = store.getState();
    }

    componentDidMount() {
        //subscribe当store中数据发生变化就会更新数据
        store.subscribe(() => {
            console.log('[p0.3] subscribe A')
            this.setState({ name: store.getState().name })
        })
    }

    handleClick = () => {
        store.dispatch({ type: 'changeValue', data: 10 })
    }

    render() {
        const { name } = this.state
        return (<div>
            <div>sonA</div>
            <div>name:</div>
            <div>{name}</div>
            <button onClick={this.handleClick}>change value</button>
        </div>);
    }
}

export default SonA;