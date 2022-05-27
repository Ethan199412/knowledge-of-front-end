import React, { PureComponent, useState } from 'react';

let showSex = false
function HooksDemo(props) {
    if (Math.random() > 0.5) {
        useState(10000)
    }
    const [value, setValue] = useState(0)

    return (
        <div>
            <button onClick={() => setValue(value + 1)}>+</button>
            {value}
        </div>
    )
}

export default HooksDemo;