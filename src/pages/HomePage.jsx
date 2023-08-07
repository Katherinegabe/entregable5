import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import '../components/PageStyles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispath = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispath(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div>
      <div>
        <section>
          <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Pokedex" />
        </section>
      </div>
      <h2 className="home_title">Hi trainer!</h2>
      <p className="home_paragraph">To start with the app, give me your name </p>
      <form className="home_form" onSubmit={handleSubmit}>
        <input className="home_input" id='inputTrainer' ref={inputTrainer} type="text" placeholder="Your name"  />
        <button className="home_btn">Gotta catch em all!</button>
      </form>
    </div>
  )
}

export default HomePage