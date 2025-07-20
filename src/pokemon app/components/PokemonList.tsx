import PokemonCard from "./PokemonCard";
import { usePokemonContext, type Pokemon } from "./PokemonContextProvider";



export default function PokemonList() {

const { pokemonList } = usePokemonContext()


  return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
    {pokemonList && pokemonList.map((pokemon: Pokemon, index: number) => (
      <li key={index}>
        <PokemonCard key={index} pokemon={pokemon}/>
      </li>
    ))}
  </ul>;
}

