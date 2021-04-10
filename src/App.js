import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
   <div className="App">
     <Wrapper>
       <Home />
       <Header />
     </Wrapper>
     </div>
   </Router>
  );
}

export default App;
