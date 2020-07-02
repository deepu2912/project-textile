import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Loader from "./Components/Loader";
import Header from "./Components/Header";
 import Footer from './Components/Footer';
import Aboutus from './Pages/AboutUs';
import Solutions from './Pages/Solutions';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Loader></Loader>
        <Header></Header>
        

        <Switch>
              <Route  path="/"  exact  component={Home}></Route>
              <Route exact path="/about" component={Aboutus}></Route>
              <Route exact path="/solutions" component={Solutions}></Route> 
              <Route component={NotFound}></Route> 
        </Switch>


        <Footer></Footer>

      
      </Router>
    </div>
  );
}

export default App;
