import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Heart, Swords } from "lucide-react"

type PokemonProps = {
  pokemon: {
    id: number
    name: string
    image: string
  }
}

export default function PokemonCard({ pokemon }: PokemonProps) {
  const stats = {
    hp: Math.floor(Math.random() * 50) + 50,
    attack: Math.floor(Math.random() * 40) + 60,
    defense: Math.floor(Math.random() * 35) + 45,
    speed: Math.floor(Math.random() * 45) + 55,
  }

  const types = ["Fire", "Water", "Grass", "Electric", "Psychic", "Fighting", "Poison", "Ground"]
  const pokemonType = types[pokemon.id % types.length]

  const typeColors: Record<string, string> = {
    Fire: "bg-red-500/15 text-red-400 border-red-500/30",
    Water: "bg-[#3cbcb2]/15 text-[#3cbcb2] border-[#3cbcb2]/30", 
    Grass: "bg-green-500/15 text-green-400 border-green-500/30",
    Electric: "bg-[#f4b433]/15 text-[#f4b433] border-[#f4b433]/30", 
    Psychic: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    Fighting: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Poison: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    Ground: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-[#a8bec9]/20 bg-[#1a2b33]/90 backdrop-blur-sm hover:shadow-[#3cbcb2]/20">
      <CardContent className="p-0">
     
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-[#a8bec9]/10 to-[#3cbcb2]/10">
          <img
            src={pokemon.image || "/placeholder.svg"}
            alt={pokemon.name}
            className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            style={{
              
            }}
          />
          <Badge className={`absolute top-3 right-3 ${typeColors[pokemonType]}`}>{pokemonType}</Badge>
        </div>

        <div className="p-4 space-y-4">
     
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white capitalize">{pokemon.name}</h3>
            <span className="text-sm text-[#a8bec9] font-mono">#{pokemon.id.toString().padStart(3, "0")}</span>
          </div>

          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium w-12 text-[#a8bec9]">HP</span>
              <div className="flex-1 h-2 bg-[#a8bec9]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(stats.hp, 100)}%` }}
                />
              </div>
              <span className="text-sm font-mono w-8 text-right text-white">{stats.hp}</span>
            </div>

            <div className="flex items-center gap-2">
              <Swords className="w-4 h-4 text-[#f4b433]" />
              <span className="text-sm font-medium w-12 text-[#a8bec9]">ATK</span>
              <div className="flex-1 h-2 bg-[#a8bec9]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f4b433] to-yellow-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(stats.attack, 100)}%` }}
                />
              </div>
              <span className="text-sm font-mono w-8 text-right text-white">{stats.attack}</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#3cbcb2]" />
              <span className="text-sm font-medium w-12 text-[#a8bec9]">DEF</span>
              <div className="flex-1 h-2 bg-[#a8bec9]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#3cbcb2] to-teal-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(stats.defense, 100)}%` }}
                />
              </div>
              <span className="text-sm font-mono w-8 text-right text-white">{stats.defense}</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#f4b433]" />
              <span className="text-sm font-medium w-12 text-[#a8bec9]">SPD</span>
              <div className="flex-1 h-2 bg-[#a8bec9]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f4b433] to-orange-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(stats.speed, 100)}%` }}
                />
              </div>
              <span className="text-sm font-mono w-8 text-right text-white">{stats.speed}</span>
            </div>
          </div>

          <Button className="w-full bg-[#3cbcb2] hover:bg-[#3cbcb2]/90 text-white font-semibold" size="sm">
            <Zap className="w-4 h-4 mr-2" />
            Battle Ready
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
