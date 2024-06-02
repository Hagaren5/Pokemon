import { Routes, Route } from 'react-router-dom'
import Landing from '@/pages/Landing'
import Pokedex from '@/pages/Pokedex'
import Login from '@/pages/Login'
import Header from '@/components/Header'


function App() {
  return (
    <div className="bg-yellow-100/50 h-full w-full">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default App
