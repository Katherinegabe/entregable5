import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PageStyles/PokeIdPage.css'

const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [ pokemon, getSinglePokemon ] = useFetch(url)
  
  useEffect(() => {
    getSinglePokemon()
  }, [id])

  //console.log(pokemon)  

  return (
    <article className="container_poke">
      <img className="poke_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2 className="poke_name">{pokemon?.name}</h2>
    </article>
  )
}

export default PokeIdPage