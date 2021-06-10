import React from 'react';
// import global style
import GlobalStyle from './components/GlobalStyle';
// import pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
// Router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
