import Home from './pages/Home';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './Components/Reusable/NavMenu';
import Footer from './Components/Reusable/Footer';
import BackToTop from './Components/Reusable/BackToTop'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyle';


function App() {

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackToTop />
      <Router>
        <NavMenu themeToggler={themeToggler} />
        <Switch>
          <Route path='/about'>
            <About theme={theme} />
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
