import { Routes, Route } from 'react-router-dom'
import Landing from '@/pages/Landing'
import Pokedex from '@/pages/Pokedex'

function App() {
  return (
    <div className="bg-yellow-100/50 h-full w-full">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
      </Routes>
    </div>
  )
}

export default App
