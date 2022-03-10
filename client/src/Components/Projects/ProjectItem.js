import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
.card__container{
  border: solid 3px var(--green);
  padding: 1.5rem;
  background-color: ${(props) =>
    props.theme.bg
  }

}
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid ${(props) =>
    props.theme.text
  };
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 2rem;
      background-color: ${(props) =>
    props.theme.bg
  };
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: var(--green);
    font-weight: 500;
  }
  .projectItem__desc {
    font-size: 1.4rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__links{
    display: flex;
    justify-content: space-around;
  }
  .projectItem__links i {
    color: var(--green)
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
      font-size:1.4rem;
    }
  }
`;
export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  git = 'Lorem Ipsum is simply dummy text o',
  link = ''
}) {
  return (
    <ProjectItemStyles>
      <div className='card__container'>
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="#">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
          <div className="projectItem__links">
            <a href={git} target="_blank" rel='noreferrer' > <i className="fab fa-github-square fa-3x"></i></a>
          </div>
        </div>
      </div>
    </ProjectItemStyles>
  );
}