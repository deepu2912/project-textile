import React  from 'react';

import {  Route, Switch } from 'react-router-dom'
 import Home from './Pages/Home';
// import Loader from "./Components/Loader";
// import Header from "./Components/Header";
// import Footer from './Components/Footer';
 import Aboutus from './Pages/AboutUs';
import Solutions from './Pages/Solutions';
import NotFound from './Pages/NotFound';
import Embroidery from './Pages/Embroidery';
import Vector from './Pages/Vector';
import Pricing from './Pages/Pricing';
import WhyWe from './Pages/WhyWe';
import ContactUs from './Pages/ContactUs';
 
 
class Routes extends React.Component {
  
  render() {

    return (
      <div className="App">
        {/* <ScrollToTopOnMount></ScrollToTopOnMount> */}
      
           <Switch>
            <Route exact path="/"  component={Home}></Route>
            <Route exact path="/about" component={Aboutus}></Route>
            <Route exact path="/solutions" component={Solutions}></Route>
            <Route exact path="/embroidery" component={Embroidery}></Route>
            <Route exact path="/vector" component={Vector}></Route>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/whywe" component={WhyWe}></Route>
            <Route exact path="/contact" component={ContactUs}></Route> 
            <Route component={NotFound}></Route> 
          </Switch> 
         
      </div>
    );
  }

}

export default Routes;
