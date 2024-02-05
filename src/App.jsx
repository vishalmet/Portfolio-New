import '../src/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App (){
  return(
    <div >

    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        {/* <Route path="/about" Component={About}/>
        <Route path="/works" Component={Works}/>
        <Route path="/experience" Component={Experience}/>
        <Route path="/securedapp" Component={SecureDApp}/> */}

      </Routes>
    </Router>

    </div>
    )
}

export default App;