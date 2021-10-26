import React from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroContent } from './HeroElements'
import Videobg from '../assets/images/video.mp4'
import Typical from 'react-typical';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Videobg} type='video/mp4' ></VideoBg>
      </HeroBg>
      <HeroContent>
        
        <h1>
          {""}
          <Typical
            steps={['Hello World!🌎⚡', 1000, 'Are you looking for the best JR Developer?👀 ', 1000, `You're on the right place!😏👌`, 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
        <Button variant="success" as={Link} to="/contact">CONTACT ME</Button>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
