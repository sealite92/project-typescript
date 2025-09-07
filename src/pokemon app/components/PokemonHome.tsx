import PokemonContextProvider from "./PokemonContextProvider"
import PokemonList from "./PokemonList"
import { Gamepad2, Zap, Trophy, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function PokemonHome() {
  return (
    <PokemonContextProvider>
      <div className="min-h-screen bg-[#1a2b33]">
     
        <header className="relative overflow-hidden bg-gradient-to-br from-[#3cbcb2]/10 via-[#1a2b33] to-[#f4b433]/10">
       <div className="absolute inset-0 bg-[url('/abstract-pokemon-battle-arena-background.jpg')] bg-cover bg-center opacity-5"></div>

          <div className="relative z-10 container mx-auto px-4 pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3cbcb2]/10 border border-[#3cbcb2]/30 text-[#3cbcb2] hover:bg-[#3cbcb2]/20 transition-all duration-200 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
          </div>

          <div className="relative container mx-auto px-4 py-16 text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-[#3cbcb2]/15 border border-[#3cbcb2]/30">
                <Zap className="w-8 h-8 text-[#3cbcb2]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
                Pokémon <span className="text-[#3cbcb2]">Warriors</span>
              </h1>
              <div className="p-3 rounded-full bg-[#f4b433]/15 border border-[#f4b433]/30">
                <Trophy className="w-8 h-8 text-[#f4b433]" />
              </div>
            </div>

            <p className="text-xl text-[#a8bec9] mb-8 max-w-2xl mx-auto text-pretty">
              Enter the ultimate battle arena where legendary Pokémon clash in epic encounters
            </p>

            <div className="flex justify-center items-center gap-6 text-sm text-[#a8bec9]">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Battle Ready</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#a8bec9]/50"></div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Power Up</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#a8bec9]/50"></div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Victory Awaits</span>
              </div>
            </div>
          </div>
        </header>


        <main className="container mx-auto px-4 py-12">
          <PokemonList />
        </main>

        <footer className="border-t border-[#a8bec9]/20 bg-[#1a2b33]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-[#a8bec9]">© 2024 Pokémon Warriors. Ready for battle.</p>
          </div>
        </footer>
      </div>
    </PokemonContextProvider>
  )
}
