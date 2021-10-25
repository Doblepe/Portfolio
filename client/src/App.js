import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBarComp from './Components/NavbarComp';
import Footer from './Components/Footer';


function App() {
  return (
   
    <Router>
      <NavBarComp />
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
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
