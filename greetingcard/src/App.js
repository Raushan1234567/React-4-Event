import logo from './logo.svg';
import './App.css';
import Greet from './ClassComponent/Greet';
import Event from './ClassComponent/Event';
function App() {
  return (
    <div className="App">
    {/* <Greet name="Raushan Kumar" reply="Good Morning"/>

    <Greet name="Sanjay Kumar" reply="Good Morning"/>

    <Greet name="Amit Kumar" reply="Good Morning"/> */}
    <Event />
    </div>
  );
}

export default App;
