import React, {useState, useEffect, } from "react";
import API from "../../utils/API";
import SubmitProject from "../../components/SubmitProject/submit-project";
import "./project-board.css";

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
                {console.log(projects)}
                {projects.map(project =>(
                    <div key={project._id} className="cardcontainer" key={project._id}> 
                        <div className="row mx-5 my-4 ">
                            <div className="card">
                                <p>Project Name: {project.projectName}</p>
                                <p >Business Type: {project.businessType}</p>
                                <p >Project Description: {project.projectDescription}</p>
                                <p >Basic Application Features: {project.projectFeatures}</p>
                                <p >Additional Notes: {project.projectNotes}</p>
                                <p >Proposed Fee: ${project.fee}</p> 
                                <p>Contact Email: {project.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
              
                <SubmitProject value={projects} onClick={() => {addProject}} userName={props.userName} />
                
            </div>
 
    )   

}

export default ProjectBoard;