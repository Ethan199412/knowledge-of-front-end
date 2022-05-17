

import classnames from 'classnames';
import React, { Component } from 'react';

// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

class Autocomplete extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        const { value } = e.target
        this.setState({
            value
        })
        this.getList(value)
    }

    getList = (value) => {
        console.log('ac')
        axios.get(ITEMS_API_URL, {
            params: {
                q: value
            }
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="wrapper">
                <div className="control">
                    <input onChange={this.handleChange} type="text" className="input" />
                </div>
                <div className="list is-hoverable" />
            </div>
        );
    }
}



export default Autocomplete;