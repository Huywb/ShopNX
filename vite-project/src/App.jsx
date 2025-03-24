import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1440px] flex align-center justify-center mx-auto'>
        <Navbar></Navbar>
        <Routes>
        </Routes>
    </div>
  )
}

export default App
