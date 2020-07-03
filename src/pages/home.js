import React, { Component } from 'react'


class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
             <p>Today Is A New Begining</p>                      
             <img src="./favicon.ico" height="300" width="1600" alt=""></img>
            </div>
        )

    }
}

export default Home
