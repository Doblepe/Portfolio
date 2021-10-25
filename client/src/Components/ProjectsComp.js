import { Row, Container, Col, Card } from 'react-bootstrap';


function ProjectsComp({projectData}) {
    /*   */
    return (
            <Col xs md={12}>
                <Card className="products-cards" style={{ width: '18rem', height:'auto', padding:'1rem' }} key={projectData.index}>
                <h3 className="font-wheight">{projectData.title}</h3>
                <p>{projectData.description}</p>
                <h5>{projectData.languajes}</h5>
                <img variant="top" src ={projectData.img} alt={projectData.title} />
                <a href={projectData.link} rel='noreferrer' target='_blank'> Visitar sitio </a>
                </Card>
            </Col>)
}

export default ProjectsComp