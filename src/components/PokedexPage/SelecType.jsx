import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import '../PageStyles/PokedexPage.css'

const SelecType = ({ setselectValue }) => {
  
  const url = 'https://pokeapi.co/api/v2/type'
  const [ types, getAllTypes ] = useFetch(url)

  useEffect(() => {
    getAllTypes()
  }, [])

  const handleChange = e => {
    setselectValue(e.target.value) 
  }

  return (
      <select className="form_input-type" onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {
          types?.results.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
  )
}

export default SelecType