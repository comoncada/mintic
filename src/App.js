import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import signup from './components/signup';
import signin from './components/signin';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
             <Route  path="/" exact component={Home} />
             <Route  path="/signup" exact component={signup} />
             <Route  path="/signin" exact component={signin} />
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
