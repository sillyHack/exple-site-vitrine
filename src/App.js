import React from 'react';
// import global style
import GlobalStyle from './components/GlobalStyle';
// import pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail'
// Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion'; // allow us to detect if the component has gone out from the screen

function App() {
  const location = useLocation(); // contains informations like the key of the page where we are on
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work" exact>
            <OurWork/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
