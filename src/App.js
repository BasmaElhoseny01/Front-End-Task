//import Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//styling
import './App.css';

import Sigin from './components/Sigin';
import Signup from './components/Signup';

import Social from './components/Social';

import Forget from './components/Forget';

function App() {
  return (
    <div className="App">
        <Router>
        <h1>Welcome</h1>
        <Routes>
    
          <Route path="/" element={<Sigin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/social" element={<Social/>}/>

          <Route path="/forgetpassword" element={<Forget/>}/>
          

        </Routes>
      </Router>
     


   
    </div>
  );
}

export default App;
