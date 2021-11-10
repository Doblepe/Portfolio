import React from 'react'

import Map from '../Components/About/Map'
import styled from 'styled-components'
import AboutImg from '../assets/images/IMG_8178-min.jpg'
import SectionTitle from '../Components/Reusable/SectionTitle'
import PText from '../Components/Reusable/PText'
export default function About() {
  const AboutPageStyles = styled.div`
  background-color: var(--dark-bg);
  color: white;
  padding: 10rem 0;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  a{
    color: white;
  }
  p{font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  padding: 2rem 0 0 0;
}
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--green);
      padding: 0.5rem;
      border-radius: 8px;
      opacity: inherit;
      color: white;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: var(--green)
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--green);
    }
  }
  .about__info__items {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    background-color: var(--deep-dark); 
    margin-top: 5rem;
    padding: 5rem;
    margin-bottom: 5rem;
    border: solid var(--green);
 i{
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }
  h1{
    align-items: center;
  }
  h3{
    padding: 2rem 0 0 0;
    font-size: 3rem;
    justify-content: center;
    font-style: bold;
  }
}
  .about__info__item {
    margin-bottom: 5rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 2rem 2rem;
    border-bottom: 2px solid var(--green);
  }
  .about__info__heading {
    font-size: 2.6rem;
    padding: 2rem 0 2rem 0;
    color: var(--green);
    border-bottom: 2px solid var(--green);
    span {
      background-color: var(--green);
      font-family: 'Raleway', sans-serif;
      padding: 0.5rem;
      border-radius: 8px;
      opacity: inherit;
      color: white;
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
  font-size: 1.2rem;
}
p{
  font-size: 1.2rem;
}

`;
  return (
    <AboutPageStyles>
      <SectionTitle heading="About" subheading="" />
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Víctor Pérez</span>
            </p>
            <h2 className="about__heading">A Full Stack JR JavaScript Developer</h2>
            <div className="about__info">
              <PText>
                My name is Víctor and after the becoming of the pandemy I decided to change my professional career. I've worked in different jobs, but I couldn't find that one which would fit with my vital features until I found out the wonderful world of programming. Development and programming have changed the way i see the world, so I am looking for my first profesional opportunity in the Web Development universe.
                <br />
                <br />
                My vision is to make the world a better place. Nowadays almost everything is becoming better than ever. It is time for us to create better stuff that helps the world to become a better place.
              </PText>
            </div>
          {/*   <Button variant="success" download='#'>Descarga CV</Button> */}
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
     {/* ---------------------   ABOUT BOX -----------------------------*/}
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            
            <p>JavaScript Full Stack Developer course on <a href="http://cursos.bbkbootcamp.com/?gclid=CjwKCAjwn8SLBhAyEiwAHNTJbQcvt29TMEJ8eHRgVsS7aQOgNgs-KxJCEIV_bJcLF7qoeNsuOBDUDhoCwIUQAvD_BwE" rel='noreferrer' target='_blank'>BBK Bootcamp.</a>
            <br />
            Desarrollo de aplicaciones con Angular on <a href="https://formacion.ipartek.com/"> Ipartek.</a>
            <br />
            Also autodidactic learning.</p>
    
          </div>
          <div className="about__info__item">
            <div className="inside_items">
            <h1 className="about__info__heading"> Dev tools</h1>
            <h3>FrontEnd</h3>
              <i class="fab fa-html5 fa-5x"></i>
              <i class="fab fa-react fa-5x"></i>
              <i class="fab fa-angular fa-5x"></i>
              <i class="fab fa-css3 fa-5x"></i>
              <i class="fab fa-js-square fa-5x"></i>
              <i class="fab fa-bootstrap fa-5x"></i>
            <h3>BackEnd</h3>
            <i class="fab fa-node fa-5x"></i>
            <h3>Also</h3>
            <i class="fab fa-github-square fa-5x"></i>
           {/*  <PText>Agiles, Scrum</PText> */}
            </div>
          </div>
        </div>
      </div>
      <Map />
    </AboutPageStyles>
  )
}
