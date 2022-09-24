import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navbar';
import Routers from './Routers';
import { GlobalStore } from "./store/GlobalStore";


function App() {
  return (
    <GlobalStore>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routers />
        </div>
      </BrowserRouter>
    </GlobalStore>
  );
}

export default App;
