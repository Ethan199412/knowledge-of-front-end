import React, { PureComponent } from 'react';
import SonA from './sonA';
import SonB from './sonB';

class ReduxDemo extends PureComponent {
    state = {  }
    render() { 
        return ( <div>
            <SonA/>
            <SonB/>
        </div> );
    }
}
 
export default ReduxDemo;