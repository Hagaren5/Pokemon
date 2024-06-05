import React, { useState, useEffect } from 'react'
import PokemonCard from '@/components/PokemonCard'

const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=50')
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null)
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(currentPageUrl)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPokemon(data.results)
        setNextPageUrl(data.next)
        setPrevPageUrl(data.previous)
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
    fetchData()
  }, [currentPageUrl])

  const goToNextPage = () => {
    if (nextPageUrl !== null) {
      setCurrentPageUrl(nextPageUrl)
    }
  }

  const goToPrevPage = () => {
    if (prevPageUrl !== null) {
      setCurrentPageUrl(prevPageUrl)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className='flex justify-around flex-wrap p-10 w-4/5'>
        {pokemon.map((p, index) => (
          <PokemonCard key={index} name={p.name} />
        ))}
      </div>

      <div className='flex justify-center p-4 gap-2'>
        {prevPageUrl && (
          <button
            className='flex font-bold px-2 border-2 border-black rounded-l-lg text-blue-400 hover:duration-300 hover:bg-yellow-200'
            onClick={goToPrevPage}
          >
            Previous Page
          </button>
        )}
        {nextPageUrl && (
          <button
            className='flex font-bold border-2 border-black text-blue-400 px-2 rounded-r-lg hover:duration-300 hover:bg-yellow-200'
            onClick={goToNextPage}
          >
            Next Page
          </button>
        )}
      </div>
    </>
  )
}

export default PokemonList
