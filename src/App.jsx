import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <Routes path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
