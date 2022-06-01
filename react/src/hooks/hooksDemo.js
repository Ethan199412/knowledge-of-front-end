import { Button } from 'antd';
import React, { PureComponent, useState } from 'react';

let firstRender = true

function HooksDemo(props) {
    let age, setAge
    // 这样使用会报错
    if (Math.random() < 0.5) {
        [age, setAge] = useState(10)
    }
    const [number, setNumber] = useState(0)
    return (
        <>
            <div>age:{age}</div>
            <div>number:{number}</div>
            <Button onClick={() => setNumber(number + 1)}>Fred</Button>
        </>
    );
}

export default HooksDemo;