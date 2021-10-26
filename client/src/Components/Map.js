import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';


const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
    margin-bottom: inherit;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--green);
    opacity:90%;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I am!</h3>
          <p>Bilbao, Basque Country, Spain</p>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Bilbao,+Vizcaya/@43.2615021,-2.9447265,14.75z/data=!4m13!1m7!3m6!1s0xd4e4e27664b89b9:0x6534acc41e95a645!2sBilbao,+Vizcaya!3b1!8m2!3d43.2630126!4d-2.9349852!3m4!1s0xd4e4e27664b89b9:0x6534acc41e95a645!8m2!3d43.2630126!4d-2.9349852"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}