import axios from 'axios';
import React, { useState } from 'react';
import { Input, Button } from 'antd'

function App() {
  const [random, setRandom] = useState(Math.random())
  const [input, setInput] = useState('')

  const handleClick = () => {
    axios.post('/api/user/createUser', { code: input }).then(res => {
      console.log('[p1.0] res', res.data)
    })
  }

  const reset = () => {
    setRandom(Math.random())
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return <div>
    <img src={`/api/user/code?random=${random}`} onClick={reset} />
    <Button onClick={handleClick}>send</Button>
    <Input value={input} onChange={handleChange} />
  </div>
}

export default App;
