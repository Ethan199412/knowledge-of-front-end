import React, { PureComponent } from 'react';
import { observer } from 'mobx-react'
import { toJS, autorun } from 'mobx'
import { Button } from 'antd'
import store from './store'

// autorun(() => {
//     console.log('[p1] data changed', toJS(store.data))
// })
@observer
class Demo extends PureComponent {
    store = store

    renderData = () => {
        console.log('[p0] toJS', toJS(this.store))
        let res = []
        for (let e in this.store.data) {
            res.push(<div>{this.store.data[e]}</div>)
        }
        return res
    }

    handleClick = () => {
        this.store.addOne()
    }

    render() {
        console.log('[p0] render')
        return (<div>
            {this.renderData()}
            <Button onClick={this.handleClick}>增加</Button>
            {this.store.list.map(e => {
                return <div>{e}</div>
            })}
        </div>);
    }
}

export default Demo;