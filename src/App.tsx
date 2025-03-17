import { useState } from 'react'
import './App.css'
import CustomNavBar from './components/custom_nav_bar'
import CustomNavBottom from "./components/custom_nav_bottom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <CustomNavBar />
        <CustomNavBottom />
      </nav>
    </>
  )
}

export default App
