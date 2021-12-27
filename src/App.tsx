import { useState, ReactEventHandler} from 'react';

import './App.scss';
import Header from './components/header/Header'
import Card from './components/card/Card'
import data from './data/data'
import { timeframesProp } from './data/data';

//Quand l'utilisateur clique sur daily/weekly/monthly, il set le state sur daily/weekly/monthly
//Le card component récupère le nouveau state et change le render.

function App() {
    //set le state de base sur daily
    const [selection, setSelection] = useState<string>("Daily")

    //set le state lors du click sur le card components
    const setCardTime = (): void => {
      selection === 'Daily' ? (setSelection('Weekly')
      ) : selection === 'Weekly' ? (setSelection('Monthly')
      ) : setSelection('Daily')
    }

  return (
    <div className="App">
      <Header
        setSelection={setSelection}
        buttons={["Daily", "Weekly", "Monthly"]}
      />
      <div className='grid'>
        {data.map((m) =>
          <Card
            key={m.title}
            title={m.title}
            timeframes={m.timeframes}
            selection={selection}
            setCardTime={setCardTime}
          ></Card>)
        }
        </div>
    </div>
  );
}

export default App;
