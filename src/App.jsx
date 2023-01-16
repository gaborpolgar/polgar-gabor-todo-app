import { useState } from 'react';
import './App.css';

function App() {
  const [feladatok, setFeladatok] = useState([]);
  const[feladat, setFeladat] = useState("");
  const [teendo, setTeendo] = useState("");
  const [fozes, setFozes] = useState("");
  const [mosogatas, setMosogatas] = useState("");

  const feladatHozzaadasa = () =>{
  const feladat = {
    feladat: feladat,
    teendo: teendo
  };
  const ujFeladatok = [];
  feladatok.forEach(feladat => ujFeladatok.push(feladat))
  ujFeladatok.push(feladat);
  setFeladatok(ujFeladatok);
  };

  const feladatLista=[];
  feladatok.forEach(feladat=>{
    feladatLista.push(<div> <h4>{feladat.feladat}</h4> 
    <p>{feladat.teendo}</p></div>)
  }
    )
  return (
    <div className="todo-app">
      <section>
        <div>
          <h1>Teendők</h1>
          <h2>Feladat hozzáadása</h2>
        </div>
        <div>
          <p>Feladat:</p>
        <input type="text" placeholder="Feladat" value={feladat} 
        onInput={(e)=> {setFeladat(e.target.value);}}/>
        </div>
        <button onClick={()=>feladatHozzaadasa()}>Hozzáad</button>
        <div>
          <h2>Teendők</h2>
          <div>
          <input type="checkbox" id="fozes" name="fozes" value={fozes}
           onInput={(e)=> setTeendo(e.target.value)} />
          <label for="fozes">Főzés</label>
          </div>
          <div>
          <input type="checkbox" id="mosogatas" name="mosogatas" value={mosogatas}
           onInput={(e)=> setTeendo(e.target.value)}/>
          <label for="mosogatas">Mosogatás</label>
            </div>
        </div>
      </section>
      <section>
        {
          feladatLista
        }
      </section>
    </div>
  );
}

export default App;
