import React, {useState} from  "react";
import API from "../../utils/API";
import { Container, Col,  Form } from 'react-bootstrap';
import "./styles.css"





function SubmitProject(props){
    const [project, setProject] = useState({});
    



    function handleInputChange(event) {
        const { name, value } = event.target;
        setProject(values =>{
        return {...values, [name]:value}  
        });
        console.log(project);
      };

    
    function addProject() {
        
        if (project) {
            API.saveProject(project)
            .catch(err => console.log(err));
        }
    }; 
    


    return(
        <Container className="col-4 submit-project">
             
             <Col className="p-1">
                <Form className='text-center  p-2' id="submit-project-form"> 
                <h3>Submit Your Project</h3>
                    <Form.Group>
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
                            onChange={handleInputChange}
                        >       
                            <option>Advertising</option>
                            <option>Product Sales</option>
                            <option>Scheduling Services</option>
                            <option>Customer Service</option>
                            <option>Customer Information Storage</option>
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
                            name="projectFee" 
                            onChange={handleInputChange}
                            placeholder="Optional"    
                        />
                    </Form.Group>

                    <button className="btn btn-success" onClick={addProject}>Submit</button>
                </Form>
            </Col>
        </Container>
    );
    
    

}
export default SubmitProject;