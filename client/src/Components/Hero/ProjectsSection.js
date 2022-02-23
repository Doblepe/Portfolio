import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../Projects/ProjectItem';
import SectionTitle from '../Reusable/SectionTitle';
import projects from '../../assets/data/projects';


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
  @media only screen and (max-width: 768px) {
    
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
