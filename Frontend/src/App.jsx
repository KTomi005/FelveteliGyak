import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './Oldalak/Home'
import Menu from './Oldalak/Menu'
import Felvettek from './Oldalak/Felvettek'
import Select from './Oldalak/Select'


function App() {
  return (
    <>
        <div className='App'>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/felvettek/:agazat' element={<Felvettek />} />
          </Routes>
        </div>   
    </>
  )
}

export default App
