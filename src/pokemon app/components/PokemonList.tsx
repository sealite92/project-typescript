import PokemonCard from "./PokemonCard";
import { usePokemonContext } from "./PokemonContextProvider";

export default function PokemonList() {
  const { pokemonList, isLoading, lastPokemonRef } = usePokemonContext();

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {pokemonList.map((pokemon, index) => {
          const isLast = index === pokemonList.length - 1;
          return (
            <li
              key={pokemon.id}
              ref={isLast ? lastPokemonRef : null}
            >
              <PokemonCard pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
      {isLoading && <p className="text-center mt-4">Loading...</p>}
    </>
  );
}
