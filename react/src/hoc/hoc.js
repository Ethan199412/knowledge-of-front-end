import React, { Component } from 'react';
import DataSource from './dataSource'
import Blog from './blog'
import Comments from './comments'

function withSubscription(WrappedComponent, selectedData, updateData) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: selectedData(DataSource, props)
            }
        }

        handleChange = () => {
            console.log('[p1] hoc',selectedData(DataSource, this.props))
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
                data={this.state.data}
                {...this.props}
            />
        }
    }
}

export const CommentListWithSubscription = withSubscription(
    Comments,
    (DataSource) => DataSource.getComments(),
);

export const BlogPostWithSubscription = withSubscription(
    Blog,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);