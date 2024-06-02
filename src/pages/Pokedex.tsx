import Button from '@/components/Button'
import PokemonList from '@/components/PokemonList'

export default function Pokedex() {

  return (
    <div>
      <Button to='/'>Home</Button>
      <PokemonList />
    </div>
  )
}
