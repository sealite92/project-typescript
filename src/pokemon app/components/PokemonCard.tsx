
type PokemonProps = {
  pokemon: {  
    id: number;
    name: string;
    image: string;
  }
}
export default function PokemonCard({pokemon}: PokemonProps) {


  return <div>
   
   
        <div  className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
  alt={pokemon.name} className="w-full h-auto" />
        </div>
     
  
  </div>;
}
