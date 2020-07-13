import React, {useState, useEffect} from  "react";
import API from "../../utils/API";
import { Container, Col,  Form } from 'react-bootstrap';
import './submit-project.css';
import {Sidebar} from '../../components/sidebar/sidebar.js';





function SubmitProject(props){
    const [project, setProject] = useState({});
    const [user, setUser] =useState("")
    
    console.log(props.userName)

 function getUserName(){
    return  props.userName;
}



useEffect(async () => {
    let currentUser = await getUserName();
    setUser(currentUser);
    setProject({userName: currentUser});

}, []);
    
    
    function handleInputChange(event) {
        let { name, value } = event.target;
        if (name === 'projectFeatures') {
            value=[];
            for (let i=0; i< event.target.selectedOptions.length; i++) {
                value.push(event.target.selectedOptions[i].value);
            };
            
        };
        const newState={...project, [name]:value};
        setProject(newState);
        console.log('newState', newState);
       
        console.log('event.target', event.target);
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (project) {
            API.saveProject(project)
            .catch(err => console.log(err));
         }     
    }; 

    async function addProject() {
        
        if (project) {
            
          await  API.saveProject({...project, userName: props.userName})
            .catch(err => console.log(err));
        }
    }; 
    


    return(
        
        <Sidebar >       
        <Container className="submit-project text-center">
        
                <Form >
                    <Form.Group >
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control 
                            name="projectName" 
                            type="text" 
                            onChange={handleInputChange}
                            placeholder="Enter Project Name"    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Business Type</Form.Label>
                        <Form.Control 
                            name="businessType" 
                            type="text" 
                            onChange={handleInputChange}
                            placeholder="Enter Industry Type"    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control as="textarea" 
                            name="projectDescription" 
                            onChange={handleInputChange}
                            placeholder="Describe the  desired application"    
                            rows="2"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Basic Application Features</Form.Label>
                        <Form.Control 
                            as="select" multiple
                            name="projectFeatures" 
                            onChange={handleInputChange}                        >       
                            <option>Advertising, </option>
                            <option>Product Sales, </option>
                            <option>Scheduling Services, </option>
                            <option>Customer Service, </option>
                            <option>Customer Information Storage, </option>
                            <option>Other</option>    
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Additional Notes</Form.Label>
                        <Form.Control as ="textarea"
                            name="projectNotes"  
                            onChange={handleInputChange}
                            rows="2"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Proposed Fee</Form.Label>
                        <Form.Control 
                            type="number"
                            name="fee" 
                            onChange={handleInputChange}
                            placeholder="Optional"    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email" 
                            onChange={handleInputChange}
                            placeholder="email (required)"    
                        />
                    </Form.Group>
                    <button className="btn btn-success" onClick={addProject}>Submit</button>
                </Form>            
        </Container>
        </Sidebar>
    
    ) 
    

}
export default SubmitProject;