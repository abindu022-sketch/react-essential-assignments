//1. Import statemetnts (if needed).
import './App.css';
import PortfolioCard from './components/PortfolioCard';

// 2. Component Function (always starts with capital letter!)
function App(){

  //3. Javascripty logic goes here

  //4. Return JSX (the UI)
  return (
    <div className="App">
      <PortfolioCard />
    </div>
  );
}

//5. exort so other files can use it
export  default App;