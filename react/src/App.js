import React, { Component } from "react";
import "./index.less";
import img from "./react.jpg";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Router, Route, BrowserRouter, Link, Switch, HashRouter } from 'react-router-dom'
import RefDemo from './ref'
import ContextDemo from './context'
import HocDemo from './hoc'
import MobxDemo from './mobx'
import ReduxDemo from "./redux/thunk";
import PureComponentDemo from "./pureComponent";
import DecoratorDemo from "./decorator";
import MyReduxDemo from "./redux/myRedux";

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
        {/* <Test/> */}
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

            <Menu.Item key="5">
              <Link to='/mobx'>
                Mobx
              </Link>
            </Menu.Item>

            <Menu.Item key="6">
              <Link to='/redux-thunk'>
                Redux-thunk
              </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to='/pure-component'>
                Pure-Component
              </Link>
            </Menu.Item>

            <Menu.Item key="8">
              <Link to='/decorator'>
                Decorator
              </Link>
            </Menu.Item>

            <Menu.Item key="9">
              <Link to='/my-redux'>
                My-Redux
              </Link>
            </Menu.Item>
          </Menu>
          <div className='container'>
            <Switch>
              <Route path='/ref' component={RefDemo} />
              <Route path='/context' component={ContextDemo} />
              <Route path='/hoc' component={HocDemo} />
              <Route path='/mobx' component={MobxDemo} />
              <Route path='/redux-thunk' component={ReduxDemo} />
              <Route path='/pure-component' component={PureComponentDemo} />
              <Route path='/decorator' component={DecoratorDemo} />
              <Route path='/my-redux' component={MyReduxDemo} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
