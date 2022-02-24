import React from 'react';
import Map from '../Components/About/Map';
import Form from '../Components/Contact/Form';
import SectionTitle from '../Components/Reusable/SectionTitle';
import styled from 'styled-components';
export default function Contact() {
  const ContactSectionStyle = styled.div`
  background-color: var(--dark-bg);
  color: white;
  padding: 10rem 0;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`
  return (
    <ContactSectionStyle>
      <SectionTitle heading="contact" subheading="get in touch" />
      <div className="container">
        <Form />
        <Map />
      </div>
    </ContactSectionStyle>
  );
}
