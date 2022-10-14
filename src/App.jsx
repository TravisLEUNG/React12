import './App.css';
import './components/componentStyles.css';
import data from "./data/data"
import Navbar from './components/NavBar';
import Card from './components/Card';

function App() {
  const cards = data.map(item => {
    return <Card 
      key={item.id}
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
          {cards}
      </div>
    </div>
  )
}

export default App