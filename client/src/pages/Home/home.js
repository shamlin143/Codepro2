import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            
            <div >
             <h5 className='greeting'>Today Is A New Begining {this.props.userName}</h5>                      
             {console.log(this.props)}
            </div>

           
        )

    }
}


export default Home;



