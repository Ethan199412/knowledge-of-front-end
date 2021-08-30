import React, { Component } from 'react';
import { Button, Input } from 'antd'
import DataSource from './dataSource'
import Blog from './blog'

class HocDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 假设 "DataSource" 是个全局范围内的数据源变量
            comments: DataSource.getComments(),
            value: ''
        };
    }

    componentDidMount() {
        // 订阅更改
        DataSource.listen('change', this.handleUpdate);
    }

    componentWillUnmount() {
        // 清除订阅
        //DataSource.removeChangeListener(this.handleChange);
        DataSource.removeListener('change')
    }

    handleUpdate = (e) => {
        // 当数据源更新时，更新组件状态
        this.setState({
            comments: DataSource.getComments()
        });
    }

    handleAdd = () => {
        DataSource.add({
            id: DataSource.getComments().length + 1,
            text: this.state.value
        })
    }

    handleChange = (e) => {
        console.log('e', e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { value } = this.state
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
                <Input value={value} onChange={this.handleChange} />
                <Button onClick={this.handleAdd}>添加评论</Button>
                <Blog />
            </div>
        );
    }
}

class Comment extends Component {
    render() {
        return (<div>
            {this.props.comment.text}
        </div>)
    }
}

export default HocDemo;