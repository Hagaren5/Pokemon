import React, { useState, useEffect } from 'react'
import { getTypeColorClass } from '@/utils/utils'
import { NavLink } from 'react-router-dom'

interface PokemonCardProps {
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const [pokemonData, setPokemonData] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPokemonData(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonData()
  }, [name])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const typeClass = pokemonData ? getTypeColorClass(pokemonData.types[0].type.name) : 'bg-gray-200'
  const typeClassSecondary = pokemonData ? getTypeColorClass(pokemonData.types[1]?.type.name) : 'bg-gray-200'

  return (
    <NavLink to={`/pokemon-details/${name}`}>
    <div
      className={`h-62 w-40 rounded-lg hover:duration-700 shadow-lg ${typeClass} bg-opacity-50 hover:bg-opacity-100 m-2 p-2 border-2 flex flex-col justify-center`}
    >
      <img className='max-w-40' src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h2 className='capitalize flex justify-center font-bold pb-1'>{pokemonData.name}</h2>
      <span className='flex justify-around'>
        <p className={`${typeClass} capitalize rounded-full px-2 border-2`}>{pokemonData.types[0].type.name}</p>
        {pokemonData.types[1]?.type.name != null ? (
          <p className={`${typeClassSecondary} capitalize rounded-full px-2 border-2`}>
            {pokemonData.types[1].type.name}
          </p>
        ) : null}
      </span>
    </div>
    </NavLink>
  )
}

export default PokemonCard
