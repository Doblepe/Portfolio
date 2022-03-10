
import React from 'react';
import styled from 'styled-components';
import PText from '../Components/Reusable/PText';
import Map from '../Components/About/Map';
import AboutImg from '../assets/images/about_pic.jpg'
import ContactBanner from '../Components/Contact/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  background-color: ${(props) =>
    props.theme.bg
  };;
  color: ${(props) =>
    props.theme.text
  };
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  font-family: 'Raleway', sans-serif;
  a{
    color: white;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .education_section{
    font-size: 2rem;
    gap:2rem;
    font-size: 1.8rem;
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
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    line-height: 1.3em;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 5rem;
background-color: ${(props) =>
    props.theme.bg_2
  };
    border: solid 2px var(--green);
    padding: 2rem;
  }
  .about__info__item {
    margin-bottom: 5rem;
  }
  .about__info__item i{
   font-size: 5rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--green);
  }
  .icons_box{
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    padding:3rem 
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 10rem 0;
    .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    h3 {
    justify-content: center;
    align-content: center;
    font-size: 2.8rem;
  }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 5rem;
    }
    .about__info__item i{
   font-size: 3.5rem;
  }
  @media only screen and (max-width: 450px) {
  .about__info__heading {
      font-size: 3rem;
    }
     .about__info__item i{
   font-size: 3.5rem;
  }
  }}
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Víctor Pérez</span>
              </p>
              <h2 className="about__heading">A Junior Full Stack Developer</h2>
              <div className="about__info">
                <PText>
                  My name is Víctor and after the becoming of the pandemy I decided to change my professional career. I've worked in different jobs, but I couldn't find that one which would fit with my vital features until I found out the wonderful world of programming. Development and programming have changed the way i see the world, so I am looking for my first profesional opportunity in the Web Development universe.
                  <br />
                  <br />
                  My vision is to make the world a better place. Nowadays almost everything is becoming better than ever. It is time for us to create better stuff that helps the world to become a better place.
                </PText>
              </div>
              {/*  <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <ul className="education_section">
                <li>JavaScript Full Stack Developer course on <a href="http://cursos.bbkbootcamp.com/?gclid=CjwKCAjwn8SLBhAyEiwAHNTJbQcvt29TMEJ8eHRgVsS7aQOgNgs-KxJCEIV_bJcLF7qoeNsuOBDUDhoCwIUQAvD_BwE" rel='noreferrer' target='_blank'>BBK Bootcamp.</a></li>
                <li>Desarrollo de aplicaciones con Angular on <a href="https://formacion.ipartek.com/"> Ipartek.</a></li>
                <li> Also autodidactic learning.</li>
              </ul>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <h3>FrontEnd</h3>
              <div className="icons_box">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-angularjs-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
              </div>
              <h3>BackEnd</h3>
              <div className="icons_box">
                <i class="devicon-nodejs-plain-wordmark"></i>
                <i class="devicon-mongodb-plain-wordmark"></i>
                <i class="devicon-php-plain"></i>
                <i class="devicon-symfony-original"></i>
                <i class="devicon-apache-plain"></i>
                <i class="devicon-mysql-plain-wordmark"></i>
              </div>
              <h3>Others</h3>
              <div className="icons_box">
                <i class="devicon-github-original-wordmark"></i>
                <i class="devicon-vscode-plain-wordmark"></i>
                <i class="devicon-phpstorm-plain"></i>
                <i class="devicon-jira-plain"></i>
                <i class="devicon-linux-plain"></i>
              </div>
              <h1 className="about__info__heading">Experience</h1>
              <div className="icons_box">
                <ul className="education_section">
                  <li>I've worked for three months developing at <a href="http://jamenet.eus/" rel='noreferrer' target='_blank'>Jamenet Sollutions.</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Map />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}




/* import React from 'react'

import Map from '../Components/About/Map'
import styled from 'styled-components'
import AboutImg from '../assets/images/IMG_8178-min.jpg'
import SectionTitle from '../Components/Reusable/SectionTitle'
import PText from '../Components/Reusable/PText'
import ContactBanner from '../../../../../clone/src/components/ContactBanner'
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
@media only screen and (max-width: 950px) {
  .aboutSection__left {
    flex: 4;
  }
  .aboutSection__right {
    flex: 3;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .aboutSection__left,
  .aboutSection__right {
    width: 100%;
  }
  .aboutSection__right {
    margin-top: 3rem;
  }
  .section-title {
    text-align: center;
  }
  .para {
    margin: 0 auto;
    margin-top: 2rem;
  }
  .aboutSection__buttons {
    flex-direction: column;
    gap: 0rem;
    .button-wrapper,
    a {
      width: 100%;
      text-align: center;
    }
  }
}
`;
export default function About() {
 
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
          {/*   <Button variant="success" download='#'>Descarga CV</Button> 
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
     {/* ---------------------   ABOUT BOX -----------------------------
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
           
           {/*  <PText>Agiles, Scrum</PText> 
            </div>
          </div>
        </div>
      </div>
      <ContactBanner/>
    </AboutPageStyles>
  )
} */