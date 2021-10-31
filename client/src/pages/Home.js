import React from 'react'
import ProjectsSection from '../Components/Hero/ProjectsSection'
import HeroSection from '../Components/Hero/HeroSection'
import ContactBanner from '../Components/Contact/ContactBanner'
import AboutSection from '../Components/Hero/AboutSection'

export default function Home() {
    return (
        <>
            <HeroSection /> 
            <br />
            <AboutSection />
            <br />
            <ProjectsSection />
            <br />
            <ContactBanner />
        </>
    )
}
