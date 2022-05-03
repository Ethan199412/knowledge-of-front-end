import React, { PureComponent } from 'react';
import { store } from './store.js';

const action = (params) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(params)
        }, 300)
    }
}

class SonA extends PureComponent {
    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {
        // setTimeout(()=>{
        //     store.dispatch({ type: 'changeValue', data: 10 })
        // },200)
        store.dispatch(action({ type: 'changeValue', data: 20 }))
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