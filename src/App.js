import {useEffect, useState} from "react"
import './App.css';
import Card from "./components/Card"
import axios from "axios"

function App() {
const [pokemon, setPokemon]= useState({
  picture: "",
})

const[show, setShow]=useState(null)
// function handleClick(){
//   GetRandomPokemon()
// }

  function GetRandomPokemon(){
    setShow(pokemon)

  }
    const random = Math.floor(Math.random() * (1 - 888)+888);
    useEffect(() => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
  .then((res)=>{
    console.log(res.data)
    console.log("res.data>",res.data)

    setPokemon({
      picture: res.data.sprites.front_default
    })
  })
  .catch((err)=>{
    console.log(err);
  })
    }, [show])
  
  
  return (
    <div className="App">
      <div></div>
      <div className="container">
        <Card
        picture={pokemon.picture}
        />
        <button onClick={GetRandomPokemon}>Get random pokemon</button>
      </div>
      <div className="container">
        {/* <Validation/> */}
        <h3>VALIDATION DASHBOARD</h3>

      </div>
      <div></div>
     
    </div>
  );
}

export default App;
