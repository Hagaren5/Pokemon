import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@/components/Button'

interface PokemonType {
  type: {
    name: string
  }
}

interface PokemonSprites {
  front_default: string
  back_default: string
  front_shiny: string
  back_shiny: string
  other: {
    dream_world: {
      front_default: string
    }
  }
}

interface PokemonDetails {
  name: string
  height: number
  weight: number
  types: PokemonType[]
  sprites: PokemonSprites
}

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>()
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPokemonDetails(data)
        console.log(data.name)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [name])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Button to='/pokedex'>Pokedex</Button>
      {pokemonDetails && (
        <div>
          <h2 className='capitalize'>{pokemonDetails.name}</h2>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Type: {pokemonDetails.types[0].type.name}</p>
          {pokemonDetails.types[1]?.type.name != null && <p>Secondary type: {pokemonDetails.types[1].type.name}</p>}
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <img src={pokemonDetails.sprites.back_default} alt={pokemonDetails.name} />
          <img src={pokemonDetails.sprites.front_shiny} alt={pokemonDetails.name} />
          <img src={pokemonDetails.sprites.back_shiny} alt={pokemonDetails.name} />
          <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} />
        </div>
      )}
    </>
  )
}

export default PokemonDetails
