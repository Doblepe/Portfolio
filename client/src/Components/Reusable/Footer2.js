import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const FooterStyle = styled.div`
  background-color: var(--dark-bg);
  font-size: 1.2rem;
  color: white;

  /* padding: 0 3rem 0 3rem; */
  .container {
    display: flex;
    gap: 3rem;
    padding: 2rem;
     }
    h1, h3 {
      color: #5cb85c
    } 
  .footer__col1 {
    flex: 2;
    padding: 0 3rem 3rem 3rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex:1;
    outline:none;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    color: #5cb85c;
    text-align: left;
    padding: 0 3rem 0 3rem;
    margin-top: 0;
    font-size: 2rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0; 
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Víctor Pérez</h1>
          <p>
            I am a JR Developer who is searching for his firts oportunity on the developement World.
          </p>
        </div>
        <div className="footer__col2">
          <Link as={Link} to="/">Home</Link>
          <br></br>
          <Link as={Link} to="/contact">Contact</Link>
          <br></br>
          <Link as={Link} to="/projects">Projects</Link>
          <br></br>
          <Link as={Link} to="/about">About</Link>

        </div>
        <div className="footer__col3">
          <h3>Contact Info</h3>
          <span> <i class="fas fa-phone-alt fa-3x"></i> 695650070</span>
          <br></br>
          <span> <i class="fas fa-envelope fa-3x"></i> Vicdobleperez@gmail.com</span>
        </div>
        <div className="footer__col4">
          <h3>Social Info</h3>
          <span><i className="fab fa-linkedin fa-3x"></i>Linkedin</span>
          <br></br>
          <span><i class="fab fa-github-square fa-3x"></i>GitHub</span>
        </div>
        <hr/>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            © 2021 - Designed By{' '} | Vicdoblepe 
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}