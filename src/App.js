//import Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

//styling
import './App.css';

import Sigin from './components/Sigin';
import Signup from './components/Signup';
import Social from './components/Social';
import Forget from './components/Forget';

function App() {
    useEffect(() => {
      document.title = "Cairo University Eco Team"
    }, [])

  return (
    <div className="App">
        <Router>
        <h1>Welcome</h1>
        <Routes>
    
          <Route path="/Front-End-Task" element={<Sigin/>}/>
          <Route path="/Front-End-Task/signup" element={<Signup/>}/>
          <Route path="/Front-End-Task/social" element={<Social/>}/>

          <Route path="/Front-End-Task/forgetpassword" element={<Forget/>}/>
          

        </Routes>
      </Router>
     


   
    </div>
  );
}

export default App;
