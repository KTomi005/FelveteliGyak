import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './Oldalak/Home'
import Menu from './Oldalak/Menu'

function App() {
  return (
    <>
        <div className='App'>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/felvettek' element={<felvettek />} />
          </Routes>
        </div>   
    </>
  )
}

export default App
