import React from 'react';
import styled from 'styled-components';
import Button from '../Reusable/Button';
import PText from '../Reusable/PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: ${(props) =>
    props.theme.bg
  };
  color: ${(props) =>
    props.theme.text
  };
  .contactBanner__wrapper {
    background-color: ${(props) =>
    props.theme.bg_2
  };
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind?</PText>
          <h3 className="contactBanner__heading">Let's work together</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
