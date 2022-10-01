import logo from './logo.svg';
import './App.css';
import HeadBar from './components/Headbar';
import Navbar from './components/Navbar';
import { Sliding } from './components/sliding';
import { Middle } from './components/middle';
import { Abovefooter } from './components/abovefooter';
import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
     <HeadBar/>
     <Navbar/>
     <Sliding/>
     <Middle/>
     <Abovefooter/>
     <Footer/>
    </div>
  );
}

export default App;
