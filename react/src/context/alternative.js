import { Button } from 'antd';
import React, { Component } from 'react';
class Alternative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
        const { color } = this.state
        this.button = <Button style={{ backgroundColor: color }}>按钮</Button>
        this.text = <h1 style={{ color }}>text</h1>
    }
    render() {
        return (<Toolbar
            button={this.button}
            text={this.text}
        />);
    }
}

class Toolbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: 100, height: 100 }}>
                <h3>替代方案</h3>
                {this.props.button}
                {this.props.text}
            </div>
        )
    }
}
export default Alternative;