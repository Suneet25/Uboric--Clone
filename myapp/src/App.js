import logo from './logo.svg';
import './App.css';
import HeadBar from './components/Headbar';
import Navbar from './components/Navbar';
import { Sliding } from './components/sliding';
import { Middle } from './components/middle';
function App() {
  return (
    <div className="App">
     <HeadBar/>
     <Navbar/>
     <Sliding/>
     <Middle/>
    </div>
  );
}

export default App;
