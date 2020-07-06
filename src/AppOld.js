import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API from "./utils/API";
import Pages from './pages'


function App() {
    const [user, setUser] = useState({
        userName: "",
        loggedIn: false

    });

    useEffect(() => {
        axios.get('/user/')
            .then(response => {
                console.log("Get user response");
                console.log(response.data);
                if(response.data.user){
                    console.log("Get User: There is a user saved in the server session")
                    setUser({
                        loggedIn: true,
                        username: response.data.user.username
                    });
                }
                else{
                    console.log('Get user: no user');
                    setUser({
                        loggedIn: false,
                        username: null
                    });
                }
            })
        
    });


  
    return <Pages user={user} />
  
}

export default App;
