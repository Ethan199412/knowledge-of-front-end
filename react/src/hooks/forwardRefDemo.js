import React, { forwardRef, PureComponent, useEffect, useImperativeHandle, useRef, useState } from 'react';

/**
 *     
 * 如果子组件是 hooks，父组件有两种方法控制子组件的方法
 * 方法1：通过 props 传 ref，子组件把方法放到 ref 的 current 里，注意
 * current 要初始化为一个空对象。
 * 方法2：通过 forwardRef 传 ref，本质和 props 传区别不大。通过 useImperativeHandle
 * 往 current 上面放函数，本质和手动往 current 上放区别不大。
 */

function Son(props) {
    console.log('[p0.0] props', props)
    const { myRef } = props
    return <input ref={myRef} type='text' />
}

// 实现父组件直接操控 dom
const MyComponent = React.forwardRef((props, ref) => {
    console.log('[p0.1] ref', ref)
    return <input ref={ref} type='text' />
    // return <Son
    //     {...props}
    //     myRef={ref}
    // />
})

const TextInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    // 关键代码
    useImperativeHandle(ref, () => ({
        focus2: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />
})

let RefSon = (props, ref) => {
    const { myRef } = props
    const [number, setNumber] = useState(0)
    const log = () => {
        console.log('log')
        setNumber(number + 1)
    }

    // useEffect(() => {
    //     console.log('[p0.4] myRef', myRef)
    //     // myRef.current = {}
    //     myRef.current.log = log
    //     myRef.log = log
    // }, [log])

    useImperativeHandle(ref, () => ({
        log
    }), [log])

    return <div>son
        <div>{number}</div>
    </div>
}

RefSon = forwardRef(RefSon)

class ForwardRefDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.ref.current = this.ref.current || {}
    }
    ref = React.createRef()

    state = {}

    componentDidMount() {
        console.log('[p0.5] ref', this.ref)
    }

    handleClick = () => {
        // console.log('[p0.2] ref', this.ref.current)
        // this.ref.current.focus2()
        console.log('[p0.3]', this.ref)
        const { log } = this.ref.current || {}
        log && log()
    }

    render() {
        return (<div>
            <button onClick={this.handleClick}>点我</button>
            {/* <MyComponent ref={this.ref} /> */}
            {/* <TextInput ref={this.ref} /> */}
            <RefSon ref={this.ref} />
        </div>);
    }
}

// function ForwardRefDemo(props) {
//     const ref = useRef({});

//     const onClick = () => {
//         ref.current.log && ref.current.log()
//     }

//     console.log('[p0.4] this', this)
//     return [
//         <RefSon myRef={ref} />,
//         <button onClick={onClick}>call inner function</button>
//     ];
// }

export default ForwardRefDemo;