import PokemonCard from "./PokemonCard"
import { usePokemonContext } from "./PokemonContextProvider"
import { Loader2 } from "lucide-react"

export default function PokemonList() {
  const { pokemonList, isLoading, lastPokemonRef, error } = usePokemonContext()

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 font-medium">{error}</p>
        <p className="text-[#a8bec9] mt-2">Please try refreshing the page</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Choose Your Fighter</h2>
        <p className="text-[#a8bec9]">Select a Pokémon and prepare for epic battles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemonList.map((pokemon, index) => {
          const isLast = index === pokemonList.length - 1
          return (
            <div
              key={pokemon.id}
              ref={isLast ? lastPokemonRef : null}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${(index % 8) * 100}ms` }}
            >
              <PokemonCard pokemon={pokemon} />
            </div>
          )
        })}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 text-[#a8bec9]">
            <Loader2 className="w-5 h-5 animate-spin text-[#3cbcb2]" />
            <span className="font-medium">Loading more warriors...</span>
          </div>
        </div>
      )}
    </div>
  )
}
