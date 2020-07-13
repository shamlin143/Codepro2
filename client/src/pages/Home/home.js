import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            
            <div >
             <h3 className='greeting'>Today Is A New Begining!</h3>                      
             {console.log(this.props)}
            </div>

           
        )

    }
}


export default Home;



