import PokemonContextProvider, {  } from "./PokemonContextProvider";

import PokemonList from "./PokemonList";

export default function PokemonHome() {
  return (
         <PokemonContextProvider>
      <h1 className="text-5xl font-bold bg-blue-400 text-center p-4">
      Pokemon Warriors!!!
      </h1>
         <PokemonList />
      </PokemonContextProvider>
  )
}
