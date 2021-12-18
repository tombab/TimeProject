import { useState } from 'react';

import './App.scss';
import Header  from './components/header/Header'
import Card from './components/card/Card'
import data from './data'


//Quand l'utilisateur clique sur daily/weekly/monthly, il set le state sur daily/weekly/monthly
//Le card component récupère le nouveau state et change le render





function App() {
  const [selection, setSelection] = useState("Daily")


  const setTime = () :void => {
    console.log({selection})
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
          timeframes= {m.timeframes}
          />)
      }
      </div>
    </div>
  );
}

export default App;
