import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Validation from "./components/Validation";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({
    picture: "",
  });

  const [show, setShow] = useState(null);

  const [name, setName] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [score, setScore] = useState(0);
  const [failures, setFailures] = useState(0);

  function handleChange(event) {
    setName(event.target.value);
  }
 const handleDelete=()=>(pokeName ? setPokeName("") : null)

 
  function GetRandomPokemon() {
    setShow(pokemon);
  }
  const random = Math.floor(Math.random() * (1 - 888) + 888);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then((res) => {
        console.log(res.data);
        console.log("res.data>", res.data);

        setPokemon({
          picture: res.data.sprites.front_default,
        });
        setPokeName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [show]);

  // function handleClick(){
  //   //Aqui tiene que ir useValidation o las funciones que extraemos de ahí
  // }
  function handleClick() {
    if (name === pokeName) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setFailures((prevFail) => prevFail + 1);
    }
  }

  return (
    <div className="App">
      <div>GuessName Pokemon Game</div>
      <div className="container">
        <Card picture={pokemon.picture} />
        <button onClick={GetRandomPokemon}>Get random pokemon</button>
      </div>
      <div className="container">
        <h3>VALIDATION DASHBOARD</h3>
        <Validation
          value={name}
          onChange={handleChange}
          onClick={handleClick}
          score={score}
          failures={failures}
          handleDelete={handleDelete}
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;
