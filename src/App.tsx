import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import  { Register } from './pages/Register';
import { Info } from './pages/Info';

function App() {
  return (
    <div className="App">
      <Register/>
      <Info />
    </div>
  );
}

export default App;
