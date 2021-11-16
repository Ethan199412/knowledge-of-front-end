import React, { Component } from "react";
import "./index.less";
import img from "./react.jpg";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Router, Route, BrowserRouter, Link, Switch, HashRouter } from 'react-router-dom'
import RefDemo from './ref'
import ContextDemo from './context'
import HocDemo from './hoc'
import Test from './test'

const { SubMenu } = Menu;

class App extends Component {
  handleClick = e => {
    console.log('click ', e);
    // if (e.key === '1') {
    //   <Link to='/about'></Link>
    // }
  };

  render() {
    console.log('[p0] props', this.props)
    return (
      <div className='app' style={{ display: 'flex' }}>
        <Test/>
        <BrowserRouter>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <Link to='/ref'>
                ref
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to='/context'>
                context
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to='/hoc'>
                Hoc
              </Link>
            </Menu.Item>

            <Menu.Item key="4">Hooks</Menu.Item>
          </Menu>
          <div className='container'>
            <Switch>
              <Route path='/ref' component={RefDemo} />
              <Route path='/context' component={ContextDemo} />
              <Route path='/hoc' component={HocDemo} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
