import { usePokemonContext, type Pokemon } from "./PokemonContextProvider";



export default function PokemonList() {

const { pokemonList } = usePokemonContext()


  return <ul>
    {pokemonList && pokemonList.map((pokemon: Pokemon, index: number) => (
      <li key={index}>{pokemon.name}</li>
    ))}
  </ul>;
}
