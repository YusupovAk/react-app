import { useState } from 'react'
import './App.css'
import CustomNavBar from './components/custom_nav_bar'
import CustomNavBottom from "./components/custom_nav_bottom"
import DlyaDoma from "./components/dlya_doma"
import AdsBanner from "./components/ads_banner"
import CategoryBanner from "./components/category_banner"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav>
        <CustomNavBar />
        <CustomNavBottom />
      </nav>
      <div className="menu">
        <DlyaDoma/>
      </div>
      <div className="ads_banner">
        <AdsBanner/>
      </div>
      <div className="category_banners">
        <CategoryBanner/>
      </div>
    </header>
    </>
  )
}

export default App
