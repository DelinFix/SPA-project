import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {Home, About, Contact} from './pages/index'
import {Nav, Footer} from './layout'

function App() {
  return (
      <Router>
          <Nav/>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
