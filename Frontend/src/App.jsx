import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './Oldalak/Home'
import Menu from './Oldalak/Menu'
import Felvettek from './Oldalak/Felvettek'

function App() {
  return (
    <>
        <div className='App'>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/felvettek' element={<Felvettek />} />
          </Routes>
        </div>   
    </>
  )
}

export default App
