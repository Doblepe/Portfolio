import React from 'react'
import Videobg from '../../assets/images/video.mp4'
import styled from 'styled-components'
import Typical from 'react-typical';
import { Link } from 'react-router-dom'
import CoolButton from '../Reusable/CoolButton';
function HeroSection() {

  const HeroStyles = styled.div`
.HeroContainer {
background-color: ${(props) =>
      props.theme.bg
    };
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
}
.HeroBg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.VideoBg{
  width:100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 background: #232a34;
}
.HeroContent{
  padding: 3rem;
  background-color: #ffffff10;
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  border: solid var(--green) 2px;
  width: 600px;
  position: absolute;
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
@media only screen and (max-width: 768px) {
    .HeroContent {
     width: 80%;
     padding: 3rem;
    }

  }
`
  return (
    <HeroStyles>
      <div className='HeroContainer'>
        <div className='HeroBg'>
          <video className='VideoBg' autoPlay loop muted src={Videobg} type='video/mp4' ></video>
        </div>
        <div className='HeroContent'>
          <h1>
            {""}
            <Typical
              steps={['Hello World!🌎⚡', 1000, 'Are you looking for the best JR Developer?👀 ', 1000, `You're on the right place!😏👌`, 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <CoolButton as={Link} to="/contact" />
        </div>
      </div>
    </HeroStyles>
  )
}

export default HeroSection
