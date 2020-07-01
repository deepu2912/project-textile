import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutus from './Pages/AboutUs';
import Solutions from './Pages/Solutions';

function App() {
  return (
    <div className="App">
      <Router>
        <Loader></Loader>
        <Header></Header>
        <Navbar></Navbar> 

        <Switch>
              <Route  path="/"  exact  component={Home}></Route>
              <Route exact path="/about" component={Aboutus}></Route>
              <Route exact path="/solutions" component={Solutions}></Route> 
        </Switch>


        <Footer></Footer>

      
      </Router>
    </div>
  );
}

export default App;
