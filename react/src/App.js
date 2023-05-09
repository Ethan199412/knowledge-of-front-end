import React, { Component, Suspense } from "react";
import "./index.less";
import img from "./react.jpg";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Router, Route, BrowserRouter, Link, Switch, HashRouter } from 'react-router-dom'
const RefDemo = React.lazy(() => import('./ref'))
const ContextDemo = React.lazy(() => import('./context'))
const HocDemo = React.lazy(() => import('./hoc'))
const MobxDemo = React.lazy(() => import('./mobx'))
const ReduxDemo = React.lazy(() => import("./redux/thunk"))
const PureComponentDemo = React.lazy(() => import("./pureComponent"))
const DecoratorDemo = React.lazy(() => import("./decorator"))
const MyReduxDemo = React.lazy(() => import("./redux/myRedux"))
const HooksDemo = React.lazy(() => import("./hooks"))
const SuspenseDemo = React.lazy(() => import("./suspense"))
const ComponentDidCatchDemo = React.lazy(() => import("./suspense/componentDidCatchDemo"))
const LessDemo = React.lazy(() => import('./less'))
// const SuspenseDemo = React.lazy(()=>import('./suspense'))
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
        <Suspense>
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

              <Menu.Item key="4">
                <Link to='/hooks'>
                  Hooks
                </Link>
              </Menu.Item>

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

              <Menu.Item key="10">
                <Link to='/suspense'>
                  Suspense
                </Link>
              </Menu.Item>

              <Menu.Item key="11">
                <Link to='/less'>
                  Less
                </Link>
              </Menu.Item>
            </Menu>
            <div className='container'>
              <Switch>
                <Route path='/ref' component={RefDemo} />
                <Route path='/context' component={ContextDemo} />
                <Route path='/hoc' component={HocDemo} />
                <Route path='/hooks' component={HooksDemo} />
                <Route path='/mobx' component={MobxDemo} />
                <Route path='/redux-thunk' component={ReduxDemo} />
                <Route path='/pure-component' component={PureComponentDemo} />
                <Route path='/decorator' component={DecoratorDemo} />
                <Route path='/my-redux' component={MyReduxDemo} />
                <Route path='/less' component={LessDemo} />
                {/* <Route path='/suspense' component={ComponentDidCatchDemo} /> */}
              </Switch>
            </div>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;
