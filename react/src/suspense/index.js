import { Spin } from 'antd';
import React, { Suspense, lazy } from 'react';
const LazyComp = lazy(() => {
    const res = import('./lazy.js') // import 函数返回的事 promise
    console.log('[p1.3] res', res)
    return res
});


console.log('[p1.1] lazyComp', LazyComp, typeof LazyComp)

let data = "";
let promise = "";

function requestData() {
    if (data) {
        return data;
    }
    if (promise) { 
        console.log('[p1.4] throw')
        throw promise 
    }
    promise = new Promise((resolve) => {
        setTimeout(() => {
            data = "数据出来了";
            resolve();
        }, 500)
    })
    console.log('[p1.5] throw')
    throw promise
}

function SuspenseComp() {
    const data = requestData();
    console.log('[p1.0] data', data)
    return <p>{data}</p>
}

export default class SuspenseDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "初始标题"
        }
    }
    componentDidMount() {
        this.setState({
            title: "渲染后的标题"
        })
    }
    render() {
        console.log('[p1.3] LazyComp', LazyComp)
        return <Suspense fallback={<Spin />}>
            <SuspenseComp />
            <div>{this.state.title}</div>
            <LazyComp />
        </Suspense>
    }
}
