import { Routes, Route } from 'react-router-dom'
import Landing from '@/pages/Landing'
import Pokedex from '@/pages/Pokedex'
import Login from '@/pages/Login'
import PokemonDetails from '@/pages/PokemonDetails'
import Header from '@/components/Header'


function App() {
  return (
    <div className="bg-yellow-100/50 h-full w-full">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='pokemon-details/:name' element={<PokemonDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
