import React from 'react'
import { Button } from 'react-bootstrap'
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
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
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
}
  .about__info__item {
    margin-bottom: 5rem;
    align-items: center;
    justify-content: center;
  }
  .about__info__heading {
    font-size: 3.6rem;
    color: var(--grey-1);
    span {
      background-color: var(--green);
      padding: 0.5rem;
      border-radius: 8px;
      opacity: inherit;
      color: white;
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
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
                My vision is to make the world a better place. Nowadays almost everything is becoming better than ever. It is time for us to create better stuff that helps the world to become a better place
              </PText>
            </div>
            <Button variant="success" download='#'>Descarga CV</Button>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading"><span>Education</span></h1>
            
            <PText>JavaScript Full Stack Developer course on <a href="http://cursos.bbkbootcamp.com/?gclid=CjwKCAjwn8SLBhAyEiwAHNTJbQcvt29TMEJ8eHRgVsS7aQOgNgs-KxJCEIV_bJcLF7qoeNsuOBDUDhoCwIUQAvD_BwE" rel='noreferrer' target='_blank'>BBK Bootcamp</a>
            <br />
            Desarrollo de aplicaciones con Angular on <a href="https://formacion.ipartek.com/"> Ipartek</a></PText>
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading"><span> Dev tools </span></h1>
            <h3>FrontEnd</h3>
            <div className="frontend-icons">
              <i class="fab fa-html5 fa-5x"></i>
              <i class="fab fa-react fa-5x"></i>
              <i class="fab fa-angular fa-5x"></i>
              <i class="fab fa-css3 fa-5x"></i>
              <i class="fab fa-js-square fa-5x"></i>
            </div>
            <h3>BackEnd</h3>
            <i class="fab fa-node fa-5x"></i>
            <h3>Metodology</h3>
            <PText>Agiles, Scrum</PText>
          </div>
          {/* <div className="about__info__item">
            <h1 className="about__info__heading"><span>Experiences</span></h1>
            <h5>I'm still looking for my first chance on the developement world</h5>
          </div> */}
        </div>
      </div>
      <Map />
    </AboutPageStyles>
  )
}
