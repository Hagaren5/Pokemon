import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

export default function Pokedex() {
  return (
    <div>
        <Button to="/">
        Home
        </Button>
      Pokedex
    </div>
  )
}