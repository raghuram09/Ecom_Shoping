import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './components/home/Home'
import HeroSection from './components/herosection/HeroSection'
import MainCard from './components/card/MainCard'

function App() {

  return (
    <>
      <Routes path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/herosection' element={<HeroSection />} />
        <Route path='/maincard' element={<MainCard />} />
      </Routes>
    </>
  )
}

export default App
