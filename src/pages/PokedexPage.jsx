import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelecType from "../components/PokedexPage/SelecType"
import '../components/PageStyles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setinputValue] = useState('')
  const [selectValue, setselectValue] = useState('allPokemons')

  console.log(selectValue)

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=3000'
  const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

  useEffect (() => {
    if(selectValue === 'allPokemons') {
      getAllPokemons() 
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setinputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <div>
      <div >
        <section>
          <img className="pokedex_img" src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Pokedex" />
        </section>
      </div>
      <p className="pokedex_message"><span className="pokedex_message_username">Welcome {trainer}</span>, here you can find your favorite Pokemon. </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_inputs-container">
          <input className="form_name-input" ref={inputSearch} type="text" placeholder="Your pokemon" />
          <button className="form_btn">Search</button>
          <SelecType setselectValue={setselectValue}/>
        </div>
      </form>
      <div>
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage