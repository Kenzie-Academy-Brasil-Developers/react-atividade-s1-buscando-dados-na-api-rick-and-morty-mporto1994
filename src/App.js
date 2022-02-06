import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Characters} from "./components/Characters"



function App() {
  const [charList, setCharList] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response)=>response.json())
    .then((response)=> setCharList(response.results))
    .catch((err)=>console.log(err))
  },[])

  console.log(charList)

  return (
    <div className="App">
      <header className="App-header">
        <Characters prop={charList}/>
      </header>
    </div>
  );
}

export default App;
