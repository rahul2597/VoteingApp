import { useState } from 'react'
import './App.css'
import VoteingApp from './components/VoteingApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <VoteingApp />
    
    </>
  )
}

export default App
