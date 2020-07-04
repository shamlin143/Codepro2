import axios from "axios";


export default{
    getProjects: function(){
        return axios.get("/project");
    },
    saveProject: function(projectData){
        console.log(projectData);
        return axios.post("/project", projectData);
    }


}