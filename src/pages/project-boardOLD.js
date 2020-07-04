import React, { Component } from "react";
import API from '../utils/API';

class ProjectBoard extends Component{
    constructor(){
        super()
        this.state = {
            projects: '',
            
            
        }
    }


componentDidMount(){
    API.getProjects()
        .then(res =>{
            this.setState(res.data)

        })
}

render(){
    return(
        <div className="project-board">
            <h2>Project Board</h2>

        </div>
    )
}

}


export default ProjectBoard;