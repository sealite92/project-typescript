"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { Pokemon } from "../components/PokemonContextProvider"

export const useFetchPokemon = (): [Pokemon[], boolean, (node: Element | null) => void, string] => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [error, setError] = useState<string>("")

  const limit = 12
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const fetchPokemonList = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        console.log(data)
        const pokemonData = data.results.map((pokemon: Pokemon, index: number) => ({
          id: offset + index + 1,
          name: pokemon.name,
          image: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
        }))
        setPokemonList((prev) => [...prev, ...pokemonData])
      } catch (error) {
        setError("Failed to fetch Pokemon data")
      } finally {
        setIsLoading(false)
      }
    }
    fetchPokemonList()
  }, [offset])

  const lastPokemonRef = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setOffset((prev) => prev + limit)
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading],
  )

  return [pokemonList, isLoading, lastPokemonRef, error]
}
