import React, {useState} from  "react";
import API from "../../utils/API";
import { Container, Col,  Form } from 'react-bootstrap';
 




function SubmitProject(props){
    const [project, setProject] = useState({});
    



    function handleInputChange(event) {
        const { name, value } = event.target;
        setProject(values =>{
        return {...values, [name]:value}  
        });
        console.log(project);
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (project) {
            API.saveProject(project)
            .catch(err => console.log(err));
         }     
    }; 

    function addProject() {
        
        if (project) {
            API.saveProject(project)
            .catch(err => console.log(err));
        }
    }; 
    


    return(
        <Container className="submit-project text-center">
             <Col className="col-4">
                <Form>
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
                            placeholder="Enter Industry Typee"    
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control as="textarea" 
                            name="projectDescription" 
                            onChange={handleInputChange}
                            placeholder="Describe the  desired application"    
                            rows="5"
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
                            rows="3"
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