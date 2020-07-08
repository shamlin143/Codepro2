import axios from "axios";


export default{
    getProjects: function(){
        return axios.get("/project");
    },
    saveProject: function(projectData){
        console.log(projectData);
        return axios.post("/project", projectData);
    },
    // Get user by id
    getUserId: async function(userName){
        return await axios.get("/user/users/id", userName)

    }


}