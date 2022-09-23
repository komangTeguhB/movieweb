import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navbar';
import Routers from './Routers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
