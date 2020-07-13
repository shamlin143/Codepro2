import React, {useState, useEffect, } from "react";
// import API from "../../utils/API";
// import SubmitProject from "../../components/SubmitProject/submit-project";
// import "./project-board.css";
// import {Container, Col, Card, Button } from 'react-bootstrap';

// function addNewProject() {
//    { <h1>Hello World</h1>}
// }



// function ProjectBoard(props) {
// console.log(props)
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         loadProjects();
//         }, []);

// function loadProjects(){
//     API.getProjects()
//         .then(res => {
//         setProjects(res.data)
//     })
// }

// function addProject(newProject){
//     setProjects(newProject);
// }



// return(        
//             <div className="project-board">               
//                 <h2 className="boardTitle">Project Board</h2>
                
//                 {projects.map(project =>(
//                     <Container>
                        
//                         <div key={project._id} className="cardcontainer col-6" key={project._id}> 
                            
//                                 <Card>
//                                     <Card.Body>
//                                         <Card.Title>New Page {project.projectName}</Card.Title>
//                                         <Card.Text className="m-2"> Business Type: {project.businessType}</Card.Text>
//                                         <Card.Text className="m-2">Project Description:  {project.projectDescription}</Card.Text>
//                                         <Card.Text className="m-2">Basic Application Features:  {project.projectFeatures}</Card.Text>
//                                         <Card.Text className="m-2">Notes:  {project.projectNotes}</Card.Text>
//                                         <Card.Text className="m-2">Proposed Fee:  ${project.fee}</Card.Text>
//                                         <Card.Text className="m-2">Email:  {project.email}</Card.Text>
//                                     </Card.Body>
//                                         <Button variant={"danger"} className="m-3 bg-warning"> Apply</Button>
//                                 </Card>
                           
//                         </div>
//                     </Container>
//                 ))}
              
//                 <SubmitProject value={projects} onClick={() => {addProject}} userName={props.userName} />
                
//             </div>
 
//     )   

// }

// export default addNewProject;