import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            
            <div>
             <p>Today Is A New Begining {this.props.userName}</p>                      
             {console.log(this.props)}
            </div>

           
        )

    }
}


export default Home;
