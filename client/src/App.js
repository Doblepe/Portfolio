import Home from './pages/Home';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './Components/Reusable/NavMenu';
import Footer from './Components/Reusable/Footer';
import SmoothScrollBar from './Components/Reusable/SmoothScrollbar'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyle'


function App() {

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <NavMenu themeToggler={themeToggler} />
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
        <br />
        <Footer />
      </Router>
    </ThemeProvider >

  );
}

export default App;
