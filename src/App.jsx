import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Process from './components/Process'
import Featured from './components/Featured'
import Team from './components/Team'
import Contact from './components/Contact'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Service />
      <Process />
      <Featured />
      <Team />
      <Contact/>
      
    </>
  )
}

export default App
