import { Routes , Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Pokedex from './pages/Pokedex'

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" exact element={<Landing />}> </Route>
        <Route path="/pokedex" element={<Pokedex />}></Route>
      </Routes>
    </>
  )
}

export default App
