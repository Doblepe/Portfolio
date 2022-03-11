
import React from 'react';
import styled from 'styled-components';
import PText from '../Components/Reusable/PText';
import Map from '../Components/About/Map';
import AboutImg from '../assets/images/about_pic.jpg';
import ContactBanner from '../Components/Contact/ContactBanner';
import ProgressBar from 'react-bootstrap/ProgressBar';
const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  background-color: ${(props) =>
    props.theme.bg
  };
  color: ${(props) =>
    props.theme.text
  };
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  font-family: 'Raleway', sans-serif;
 .top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
p{font-family: 'Raleway', sans-serif;
font-size: 1.8rem;
padding: 2rem 0 0 0;
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
      background-color:${(props) =>
    props.theme.secondary
  };
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
    img {border: 2px solid ${(props) => props.theme.secondary};
    }
  }
  .about__info__items {
    margin-top: 5rem;
    background-color: ${(props) =>
    props.theme.bg_2
  };
    border: solid 2px ${(props) =>
    props.theme.secondary
  };
    padding: 2rem;
  }
  .about__info__item {
    margin-bottom: 5rem;
  }
  .about__info__item i{
   font-size: 5rem;
  };
  .about__info__heading {
  text-transform: uppercase;  
  font-size: 2.6rem;
  padding: 2rem 0 1rem 0;
  color: ${(props) =>
    props.theme.secondary
  };
   text-align:center;
  border-bottom: 2px solid ${(props) =>
    props.theme.secondary
  };
  }
   h3 {
  font-size: 2.4rem;
  padding: auto;
  color: ${(props) =>
    props.theme.text
  };
   text-align:center;
  }
  .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding:3rem 
  }
  .skills_article{
   display: inline;
   flex-direction: column;
   border: solid 2px ${(props) =>
    props.theme.secondary
  };
  margin-top:1em;
  padding: 1.2em;
  width:200px;
  }
   @media only screen and (max-width: 1100px) {
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
     font-size: 1.2rem;
  .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .right {
    flex-wrap: wrap;
   }img{
      max-height:400px;    }
     h3 {
  font-size: 2rem;
  padding: 2rem 0 1rem 0;
  color: ${(props) =>
    props.theme.text
  };
    .aboutSection__left {
    flex: 4;
  }
  .aboutSection__right {
    flex: 3;
  }
}
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 0;
      .right {
    flex-wrap: wrap;
  
   }
     img{
      max-height:390px;    }
  }
    .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
  }
  h3 {
  font-size: 1.8rem;
  padding: 1rem 0 1rem 0;
  color: ${(props) =>
    props.theme.text
  };
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 5rem;
      text-align:center;
    }
    .about__info__item i{
   font-size: 3.5rem;
  }
    .aboutSection__left {
    flex: 4;
  }
  .aboutSection__right {
    flex: 3;
  }
}
  @media only screen and (max-width: 450px) {
  .about__info__heading {
      font-size: 3.5rem;
       text-align:center;
    }
     .about__info__item i{
   font-size: 3.5rem;
  }
    h3 {
  font-size: 1.8rem;
  font-family: bold;
  padding: 2rem 0 1rem 0;
  color: ${(props) => props.theme.text};
    }
  
  }`;

export default function About(props) {
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
                  My name is Víctor and after the becoming of the covid-19 pandemy I decided to change my professional career. I've worked in different jobs, but I couldn't find that one which would fit in with my vital objectives until I found the wonderful world of programming.  Digital projects and programming have changed my perspective of life, so I am looking for new profesional opportunities in the Web Development universe.
                  <br />
                  <br />
                  Besides my knowledge on coding, I have several years of experience in journalism. Where I gained so many soft skills on comunication and working and cooperating in team.
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
              <PText>I've studied Jornalism at the UPV/EHU and also a Master degree on Multimedia Journalism.</PText>
              <PText>JavaScript Full Stack Developer course on <a href="http://cursos.bbkbootcamp.com/?gclid=CjwKCAjwn8SLBhAyEiwAHNTJbQcvt29TMEJ8eHRgVsS7aQOgNgs-KxJCEIV_bJcLF7qoeNsuOBDUDhoCwIUQAvD_BwE" rel='noreferrer' target='_blank'>BBK Bootcamp.</a></PText>
              <PText>Desarrollo de aplicaciones con Angular on <a href="https://formacion.ipartek.com/"> Ipartek.</a></PText>
              <PText> Also autodidactic learning.</PText>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <h3>FrontEnd</h3>
              <div className="icons_box">
                <article className='skills_article'>
                  <i class="devicon-html5-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>HTML</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-react-original"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={85} label="85%" />
                  <p>REACT</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-angularjs-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={60} label="60%" ></ProgressBar>
                  <p>ANGULAR</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-css3-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>CSS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-javascript-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={80} label="80%" />
                  <p>JS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-bootstrap-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={90} label="90%" />
                  <p>Bootstrap</p>
                </article>

              </div>
              <h3>BackEnd</h3>
              <div className="icons_box">
                <article className='skills_article'>
                  <i class="devicon-nodejs-plain-wordmark"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>Node JS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-mongodb-plain-wordmark"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>Mongo DB</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-php-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>PHP</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-symfony-original"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>Symfony</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-apache-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>Apache</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-mysql-plain-wordmark"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>MYSQL</p>
                </article>

              </div>
              <h3>Others</h3>
              <div className="icons_box">
                <article className='skills_article'>
                  <i class="devicon-github-original-wordmark"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>GitHub</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-vscode-plain-wordmark"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>VS Code</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-phpstorm-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>PHP-Storm</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-jira-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={70} label="70%" />
                  <p>JIRA</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-linux-plain"></i>
                  <ProgressBar variant={props.theme === "dark" ? "info" : "success"} animated now={75} label="75%" />
                  <p>Linux</p>
                </article>
              </div>
              <h1 className="about__info__heading">Experience</h1>
              <div className="icons_box">
                <PText>I've worked on many different jobs, such as a Journalist, as a comercial, as administrative and also as a Lifeguard.</PText>
                <PText>On the IT world I worked for three months developing at <a href="http://jamenet.eus/" rel='noreferrer' target='_blank'>Jamenet Sollutions.</a></PText>
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