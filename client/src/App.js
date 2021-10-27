import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './Components/Reusable/NavMenu';
import Footer from './Components/Reusable/Footer';
import SmoothScrollBar from './Components/Reusable/SmoothScrollbar'


function App() {
  return (

    <Router>
      <NavMenu />
      <SmoothScrollBar /> 
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
          <br/> 
        <Footer />
  
    </Router>

  );
}

export default App;
