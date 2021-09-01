import React, { Component } from 'react';
import { Button, Input } from 'antd'
import DataSource from './dataSource'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 假设 "DataSource" 是个全局范围内的数据源变量
            //blogPost: DataSource.getBlogPost(),
            value: ''
        };
    }

    // componentDidMount() {
    //     // 订阅更改
    //     DataSource.listen('updateBlog', this.handleUpdate);
    // }

    // componentWillUnmount() {
    //     // 清除订阅
    //     DataSource.removeListener('updateBlog')
    // }

    // handleUpdate = (e) => {
    //     // 当数据源更新时，更新组件状态
    //     this.setState({
    //         blogPost: DataSource.getBlogPost()
    //     });
    // }

    // handleClick = () => {
    //     DataSource.updateBlogPost("I'm lee")
    // }

    render() {
        console.log('blog',this.props.data)
        return <div>
            <TextBlock text={this.props.data} />
            {/* <Button onClick={this.handleClick} >更新博客</Button> */}
        </div>;
    }
}

class TextBlock extends Component {
    render() {
        return (<div>
            {this.props.text}
        </div>)
    }
}

export default Blog;