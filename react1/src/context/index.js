import React, { Component } from 'react';
import { Button } from 'antd'
import Alternative from './alternative'

const ThemeContext = React.createContext('pink');
class ContextDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'salmon'
        }
    }
    handleClick = () => {
        this.setState({
            color: 'brown'
        })
    }
    render() {
        //console.log('[p1] context', context)
        return (
            <div>
                <ThemeContext.Provider value={this.state.color}>
                    <Toolbar theme="pink" />
                </ThemeContext.Provider>
                <Button onClick={this.handleClick}>外部按钮</Button>

                <Alternative/>
            </div>
        );
    }
}

class Toolbar extends Component {
    static contextType = ThemeContext
    render() {
        return (
            <div style={{ width: 200, height: 100, backgroundColor: 'pink' }}>
                <h1 style={{ color: this.context }}>toolbar</h1>
                <ThemedButton />
            </div>
        )
    }
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        console.log('[p0] context', this.context)
        return (
            <div><Button
                style={{ backgroundColor: this.context }}
                onClick={this.handleClick}
            >内部按钮</Button>
            </div>);
    }
}
export default ContextDemo;