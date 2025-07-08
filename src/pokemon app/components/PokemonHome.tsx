import { useState } from "react";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export default function PokemonHome() {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [pokemon, setPokemon] = useState<string | null>(null);

  return <div>PokemonHome</div>;
}
