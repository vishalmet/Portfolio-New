import '../src/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from '../src/pages/About';
import Experience from './pages/Experience';
import SecureDApp from './components/SecureDApp';
import YugaasTech from './components/YugaasTech';
import Works from './pages/Works';


function App (){
  return(
    <div >
      
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/experience" Component={Experience}/>
        <Route path="/securedapp" Component={SecureDApp}/>
        <Route path="/yugaastech" Component={YugaasTech}/>
        <Route path="/works" Component={Works}/>

      </Routes>
    </Router>

    </div>
    )
}

export default App;