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
                <h2 className="mx=5">Project Board</h2>
                {console.log(projects)}
                {projects.map(project =>(
                    <div className="cardcontainer bg-success" > 
                        <div className="row mx-5 my-4 ">
                            <div className="card border-success bg-success">
                                <p key={project._id.projectName}>Project Name: {project.projectName}</p>
                                <p key={project._id.businessType}>Business Type: {project.businessType}</p>
                                <p key={project._id.projectDescription}>Project Description: {project.projectDescription}</p>
                                <p key={project._id.projectFeatures}>Basic Application Features: {project.projectFeatures}</p>
                                <p key={project._id.projectNotes}>Additional Notes: {project.projectNotes}</p>
                                <p key={project._id.fee}>Proposed Fee: ${project.fee}</p> 
                                <p key={project._id.email}>Contact Email: {project.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
              
                <SubmitProject value={projects} onClick={addProject}  />
                
            </div>
 
    )   

}

export default ProjectBoard;