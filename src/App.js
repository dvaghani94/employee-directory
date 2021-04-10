import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Container from './components/Container';
import Header from './components/Header';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
   <div className="App">
     <Wrapper>
       <Container />
       <Header />
     </Wrapper>
     </div>
   </Router>
  );
}

export default App;
