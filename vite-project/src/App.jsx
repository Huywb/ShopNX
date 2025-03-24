import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1440px] bg-red-500 flex align-center justify-center mx-auto'>
        <Navbar></Navbar>
    </div>
  )
}

export default App
