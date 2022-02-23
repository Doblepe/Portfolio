import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from '../Projects/ProjectItem';
import SectionTitle from '../Reusable/SectionTitle';
import projects from '../../assets/data/projects';
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
 background-color: var(--dark-bg);
  color: white;
  padding: 10rem 0;
    .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-wrapper{
    box-sizing: border-box;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--green);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
    border: solid 2px white;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
      .projectItem__img {
        width: 100%;
      }
       .swiper-wrapper{
    box-sizing: border-box;
  }
    }
  }
`;

export default function ProjectsSection() {
  
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          {projects.map((project, index) => {
            if (index >= 5) return null;
            return (
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
