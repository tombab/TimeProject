import { useState } from 'react';

import './App.scss';
import Header from './components/header/Header'
import Card from './components/card/Card'
import data from './data'


//Quand l'utilisateur clique sur daily/weekly/monthly, il set le state sur daily/weekly/monthly
//Le card component récupère le nouveau state et change le render

function App() {

  //set le state de base sur daily
  const [selection, setSelection] = useState("Daily")
 //set le state sur la valeur du bouton qui est click 
  const setTime = (event:any): void => {
    setSelection(event.target.value)
  }

  return (
    <div className="App p-5">
      <Header
        setTime={setTime}
      />
      <div className='grid'>
        {data.map((m) =>
          <Card
            key={m.title}
            title={m.title}
            timeframes={m.timeframes}
            selection={selection}
          />)
        }
        </div>
    </div>
  );
}

export default App;
