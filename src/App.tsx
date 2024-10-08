import { useState } from 'react'
import './App.css'

function App() {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
  return (
    <>
      <div>
          <header>TEST</header>
          <p>{value}</p>
          <input
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={ (e) => {
                  if(e.key == 'Enter') {
                      setValue(message)
                      setMessage('')
                  }
                }
              }
              value={message}
          />
          <button>Send</button>
      </div>
    </>
  )
}

export default App
