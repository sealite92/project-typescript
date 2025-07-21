
import React, { createContext, useContext } from 'react';
import { useFetchPokemon } from './FetchPokemon';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type PokemonItemsContextType = {
  pokemonList: Pokemon[];
  isLoading: boolean;
  lastPokemonRef: (node: Element | null) => void;
  error: string
}

type PokemonContextTypeProps = {
  children: React.ReactNode;
  }

  export const PokemonContext = createContext<PokemonItemsContextType |null>(null)

export default function PokemonContextProvider({children}: PokemonContextTypeProps ) {
   const [pokemonList, isLoading, lastPokemonRef, error] = useFetchPokemon();



  return (
   <PokemonContext.Provider value={{
    pokemonList, 
    isLoading,
    lastPokemonRef,
    error
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