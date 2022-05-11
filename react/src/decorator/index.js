import { Button } from 'antd';
import React, { Component } from 'react';

// 存在函数的变量提升，不能在函数前使用装饰器。
// @myDecorator
// function test(){
//     console.log('test')
// }

const Helper = {
    f: () => { console.log('custom') }
}

@customDecorator(Helper)
@myDecorator
class DecoratorDemo extends Component {
    constructor(props) {
        super(props);
    }

    @readOnly
    name = 'Ethan'

    state = {

    }

    changeName = () => {
        this.name += 'a'
    }

    render() {
        return (<div>
            decorator
            <div>{this.name}</div>
            <div>
                <Button type='primary' onClick={this.eat}>click</Button>
            </div>
            <div>
                <Button onClick={this.f}>custom</Button>
            </div>
            <div>
                <Button onClick={this.changeName}>change name</Button>
            </div>
        </div>);
    }
}

function readOnly(target, name, descriptor) {
    // 这里的 target 指的是实例
    console.log({target, name, descriptor})
    descriptor.writable = false
}

function myDecorator(target) {
    console.log('[p0.0] target', target)
    target.prototype.eat = () => {
        console.log('eating')
    }
}

function customDecorator(Helper) {
    return function (target) {
        Object.assign(target.prototype, Helper)
        console.log('[p0.1] target', target.prototype)
    }
}

export default DecoratorDemo;