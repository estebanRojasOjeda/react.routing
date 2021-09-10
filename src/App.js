import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Number path="/:number"></Number>
        <Hello path="/:word"></Hello>
        <Color path="/:back/:color"></Color>
      </Router>
    </div>
  );
}

export default App;
