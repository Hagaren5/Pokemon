import React, { useState, useEffect } from 'react';
import PokemonCard from '@/components/PokemonCard';  

const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=52');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-around flex-wrap p-10 w-4/5">
      {pokemon.map((p, index) => (
        <PokemonCard key={index} name={p.name} />
      ))}
    </div>
  );
};

export default PokemonList;
