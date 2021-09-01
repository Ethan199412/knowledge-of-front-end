import React, { PureComponent, Fragment } from 'react';
import Comments from './comments';
import Blog from './blog';
import { CommentListWithSubscription, BlogPostWithSubscription } from './hoc'
import { Button, Input } from 'antd'
import DataSource from './dataSource'
/** 高阶组件对于组件复用来说，它的逻辑就是把相同的逻辑放在，把两种
 * 组件都需要的一些功能放到高阶组件集中起来，剩下的功能让组件自己去
 * 完成。达到节省代码量，复用代码的目的
 * */ 

class HocDemo extends PureComponent {
    state = {
        comment: ''
    }
    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleAddComment = () => {
        DataSource.add({ id: 3, text: this.state.comment })
    }
    handleUpdateBlog = () => {
        DataSource.updateBlogPost('I visit youtube and I think the ad in it is like a shit.')
    }
    render() {
        return (
            <Fragment>
                {/* <Comments />
                <Blog />
                <br/> */}
                <CommentListWithSubscription />
                <hr />
                <BlogPostWithSubscription />
                <Input onChange={this.handleChange} />
                <Button onClick={this.handleAddComment}>添加评论</Button>
                <Button onClick={this.handleUpdateBlog}>更新博客</Button>
            </Fragment>
        );
    }
}

export default HocDemo;