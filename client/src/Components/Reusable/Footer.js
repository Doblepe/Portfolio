import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--dark-bg);
  padding-top: 10rem;
  color: white;
  font-size: 1.2rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--green)
  }
  .copyright {
    background-color: var(--dark-bg);
    color: var(--green);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
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
          <PText>
            I am a JR Developer who is searching for a new oportunity on the developement world.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: ' +34 695 650 070',
              },
              {
                title: 'Vicdobleperez@gmail.com',
              },
              {
                title: 'Bilbao, Basque Country, Spain',
                path: 'https://www.google.com/maps/place/Bilbao,+Vizcaya/@43.2557861,-2.9412897,14z/data=!4m5!3m4!1s0xd4e4e27664b89b9:0x6534acc41e95a645!8m2!3d43.2630126!4d-2.9349852',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/victor-perez-perez-programacion-web-development/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/doblepe',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Víctor Pérez | @Vicdoblepe
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
