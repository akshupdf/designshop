
import './App.css';
import About from './components/About';
import Home from './components/home';
import Navbar from './components/Nav';
import ReachOut from './components/ReachOut';
import Templates from './components/Templates';

function App() {
  return (
    <div className='font-sen'>
  <Navbar />
  <Home />
  <About />
  <Templates />
  <ReachOut />
    </div>
  );
}

export default App;
