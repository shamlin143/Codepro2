import React, {useState, useEffect, } from "react";
import API from "../../utils/API";
import SubmitProject from "../../components/SubmitProject/submit-project";
import "./project-board.css";
import {Container, Col, Card, Button } from 'react-bootstrap';

function ProjectBoard(props) {
console.log(props)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
        }, []);

function loadProjects(){
    API.getProjects()
        .then(res => {
        setProjects(res.data)
    })
}

function addProject(newProject){
    setProjects(newProject);
}



return(        
            <div className="project-board">               
                <h2 className="boardTitle">Project Board</h2>
                
                {projects.map(project =>(
                    <Container>
                        
                        <div key={project._id} className="cardcontainer col-6" key={project._id}> 
                            
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{project.projectName}</Card.Title>
                                        <Card.Subtitle> {project.businessType}</Card.Subtitle>
                                        <Card.Text>
                                            {project.projectDescription}
                                            
                                        </Card.Text>
                                        <Card.Subtitle>
                                            Basic Application Features: {project.projectFeatures}
                                        </Card.Subtitle>
                                        <Card.Text>
                                        {project.projectNotes}
                                        </Card.Text>
                                        <Card.Subtitle>Proposed Fee: ${project.fee}</Card.Subtitle>
                                    </Card.Body>
                                        <Button variant={"danger"}> Apply</Button>
                                </Card>
                           
                        </div>
                    </Container>
                ))}
              
                <SubmitProject value={projects} onClick={() => {addProject}} userName={props.userName} />
                
            </div>
 
    )   

}

export default ProjectBoard;