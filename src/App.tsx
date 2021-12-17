import './App.scss';
import  Header  from './components/header/Header'
import Card from './components/card/Card'
import data from './data'

function App() {

  return (
    <div className="App">
      <Header/>
      {data.map((m) => 
        <Card 
          key={m.title} 
          title={m.title}
          timeframes= {m.timeframes}
          image={m.image}
          />)
      }
    </div>
  );
}

export default App;
