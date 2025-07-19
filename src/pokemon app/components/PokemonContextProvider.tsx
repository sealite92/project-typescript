
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type PokemonItemsContextType = {
  pokemonList: Pokemon[];
  isLoading: boolean;
}

type PokemonContextTypeProps = {
  children: React.ReactNode;
  }

  export const PokemonContext = createContext<PokemonItemsContextType |null>(null)

export default function PokemonContextProvider({children}: PokemonContextTypeProps ) {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(() => {
    
const fetchPokemonList = async () => {
  setIsLoading(true)
  
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")
    const data = await response.json()
    console.log(data)
    const pokemonData = data.results.map((pokemon: Pokemon, index: number) => ({
      id: index + 1,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));    
    setPokemonList(pokemonData)
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
}
fetchPokemonList();
},[]) 



  return (
   <PokemonContext.Provider value={{
    pokemonList, 
    isLoading,
   }}>
      {children}   
      </PokemonContext.Provider> 
  )
}


export function usePokemonContext() {
    const context = useContext(PokemonContext)
    if(!context) {
        throw new Error("Cannot have Pokemon context outside the context provider")
    }
    return context;
}