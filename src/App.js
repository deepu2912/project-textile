import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from './Components/Footer';
//  import Aboutus from './Pages/AboutUs';
// import Solutions from './Pages/Solutions';
// import NotFound from './Pages/NotFound';
// import Embroidery from './Pages/Embroidery';
// import Vector from './Pages/Vector';
// import Pricing from './Pages/Pricing';
// import WhyWe from './Pages/WhyWe';
// import ContactUs from './Pages/ContactUs';
import Routes from './Routes';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <ScrollToTopOnMount></ScrollToTopOnMount> */}
        <Router>
          <Loader></Loader>
          <Header></Header>

          {/* Routing Configurations */}
          <Routes></Routes>
          {/* Routing Configurations */}

          <Footer></Footer>


        </Router>
      </div>
    );
  }

}

export default App;
