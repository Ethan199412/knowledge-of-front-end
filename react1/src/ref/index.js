import React, { Component } from 'react';
import { Button, Input } from 'antd'
/**
 * 假如面试官问你 ref 有什么用，你可以回答他 ref 是用来
 * 获取真实 dom 的，而获取真实 dom 可以管理 input 元素
 * 的焦点，有时也会和第三方库结合使用，比如 react-viewer
 * 的 container 属性，需要你传一个 dom 进去。
 */
class refDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.ref1 = React.createRef()
    }
    componentDidMount() {
        console.log('[p2] ref1', this.ref1.current)
        console.log('[p3] didMount ref2', this.ref2)
    }

    componentWillMount() {
        console.log('[p4] willMount ref2', this.ref2)
    }

    handleClick1 = () => {
        this.ref1.current.focus()
    }

    handleClick2 = () => {
        this.ref2.focus()
    }

    render() {
        console.log('[p1] render ref2', this.ref2)
        return (<div>
            <div>
                <span>input1</span>
                <Input
                    id='input'
                    type='text'
                    ref={this.ref1}
                />
            </div>
            <div>
                <span>input2</span>
                <Input
                    type='text'
                    ref={(ref) => {
                        /**
                         * 注意这种方式获得 ref2 只有在 componentDidMount
                         * 里面才可以拿到 render 里面是拿不到的。
                         */
                        this.ref2 = ref
                        console.log('[p3] ref', ref)
                    }}
                />
            </div>

            <Button onClick={this.handleClick1}>输入1焦点</Button>
            <Button onClick={this.handleClick2}>输入2焦点</Button>
        </div>);
    }
}

export default refDemo;