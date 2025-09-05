import PokemonContextProvider from "./PokemonContextProvider"
import PokemonList from "./PokemonList"
import { Gamepad2, Zap, Trophy } from "lucide-react"

export default function PokemonHome() {
  return (
    <PokemonContextProvider>
      <div className="min-h-screen bg-background">
        {/* Hero Header Section */}
        <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 bg-[url('/placeholder-5cknn.png')] opacity-5"></div>
          <div className="relative container mx-auto px-4 py-16 text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
                Pokémon <span className="text-primary">Warriors</span>
              </h1>
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Enter the ultimate battle arena where legendary Pokémon clash in epic encounters
            </p>

            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Battle Ready</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Power Up</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Victory Awaits</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <PokemonList />
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-muted-foreground">© 2024 Pokémon Warriors. Ready for battle.</p>
          </div>
        </footer>
      </div>
    </PokemonContextProvider>
  )
}
