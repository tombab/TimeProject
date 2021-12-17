import './App.scss';
import  Header  from './components/header/Header'
import Card from './components/card/Card'
import data from './data'

function App() {

  return (
    <div className="App d-flex flex-column p-5">
      <Header
      
      />
      {data.map((m) => 
        <Card 
          key={m.title} 
          title={m.title}
          timeframes= {m.timeframes}
          />)
      }
    </div>
  );
}

export default App;
