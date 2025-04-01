import { useState } from 'react'
import './App.css'
import CustomNavBar from './components/custom_nav_bar'
import CustomNavBottom from "./components/custom_nav_bottom"
import DlyaDoma from "./components/dlya_doma"
import AdsBanner from "./components/ads_banner"
import CategoryBanner from "./components/category_banner"
import ProductsPage from './components/products_banner'
import Aksiya from './components/aksiya'
import Idei from './components/idei'
import Brendi from './components/brendi'
import Pomosh from './components/pomosh'

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
      <div className="PB">
        <ProductsPage/>
      </div>
      <div className="acsiya_s">
        <Aksiya/>
      </div>
      <div className="idei_Container">
        <Idei/>
      </div>
      <div className="brendi">
        <Brendi/>
      </div>
      <div className="Pomosh">
        <Pomosh/>
      </div>
    </header>
    </>
  )
}

export default App
