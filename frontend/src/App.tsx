
import './App.css';
import Feed from "./components/feed/Feed";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
  
      <div className='App'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='feed'>

        <Feed/>
        </div>
      </div>

  );
}

export default App;
