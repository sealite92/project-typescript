import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
    Fire: "bg-red-500/10 text-red-600 border-red-500/20",
    Water: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Grass: "bg-green-500/10 text-green-600 border-green-500/20",
    Electric: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    Psychic: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    Fighting: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    Poison: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    Ground: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-muted/30 to-accent/5">
          <img
            src={pokemon.image || "/placeholder.svg"}
            alt={pokemon.name}
            className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
          />
          <Badge className={`absolute top-3 right-3 ${typeColors[pokemonType]}`}>{pokemonType}</Badge>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4">
          {/* Name and ID */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground capitalize">{pokemon.name}</h3>
            <span className="text-sm text-muted-foreground font-mono">#{pokemon.id.toString().padStart(3, "0")}</span>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium w-12">HP</span>
              <Progress value={stats.hp} className="flex-1 h-2" />
              <span className="text-sm font-mono w-8 text-right">{stats.hp}</span>
            </div>

            <div className="flex items-center gap-2">
              <Swords className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium w-12">ATK</span>
              <Progress value={stats.attack} className="flex-1 h-2" />
              <span className="text-sm font-mono w-8 text-right">{stats.attack}</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium w-12">DEF</span>
              <Progress value={stats.defense} className="flex-1 h-2" />
              <span className="text-sm font-mono w-8 text-right">{stats.defense}</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium w-12">SPD</span>
              <Progress value={stats.speed} className="flex-1 h-2" />
              <span className="text-sm font-mono w-8 text-right">{stats.speed}</span>
            </div>
          </div>

          {/* Battle Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" size="sm">
            <Zap className="w-4 h-4 mr-2" />
            Battle Ready
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
