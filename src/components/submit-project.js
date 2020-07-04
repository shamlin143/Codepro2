import React, {useState} from  "react";
import API from "../utils/API";



function SubmitProject(){
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
            // .then(res => loadUser())
            .catch(err => console.log(err));
        }
    }; 



    return(
        <div className="submit-project">
            <form className="form-group">
                <label className="form-label" htmlFor="projectName">Project Name</label>
                <input 
                    className="form-input" 
                    type="text" 
                    id="projectName" 
                    name="projectName" 
                    placeholder="Enter Project Name"
                    onChange={handleInputChange}    
                />
                <button className="btn btn-success" onClick={handleFormSubmit}>Submit</button>
            </form>

        </div>
    );

}
export default SubmitProject;