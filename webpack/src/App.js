import React, { Component } from "react";
import "./index.less";

class App extends Component {

  render() {
    console.log('[p0] props', this.props)
    return (
      <div className='app' style={{ display: 'flex' }}>
        haha
      </div>
    );
  }
}

export default App;
