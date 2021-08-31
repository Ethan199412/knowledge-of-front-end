import React, { Component } from 'react';
import DataSource from './dataSource'
import Blog from './blog'
import HocDemo from './index'

function withSubscription(WrappedComponent, selectedData) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: selectedData(DataSource, props)
            }
        }

        handleChange = () => {
            this.setState({
                data: selectedData(DataSource, this.props)
            })
        }

        componentDidMount() {
            DataSource.listen('change', this.handleChange)
        }

        componentWillUnmount() {
            DataSource.removeListener('change', this.handleChange)
        }

        render() {
            return <WrappedComponent
                data={this.props.data}
                {...this.props}
            />
        }
    }
}

export const CommentListWithSubscription = withSubscription(
    HocDemo,
    (DataSource) => DataSource.getComments()
);

export const BlogPostWithSubscription = withSubscription(
    Blog,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);