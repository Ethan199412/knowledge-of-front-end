import { Button } from 'antd';
import React, { PureComponent } from 'react';
import SonForCommon from './son-for-common';
import SonForPure from './son-for-pure';

class PureComponentDemo extends PureComponent {
    state = {
        number: 0,
        name: 'Ethan'
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        const { name, number } = this.state
        return (<div>
            <div>{number}</div>
            <Button onClick={this.handleClick}>增加</Button>
            <SonForPure name={name}/>
            <SonForCommon name={name}/>
        </div>);
    }
}

export default PureComponentDemo;