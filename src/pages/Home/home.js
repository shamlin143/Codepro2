import React, { Component } from 'react'


class Home extends Component {
    


    render() {
        return (
            <div>
             <p>Today Is A New Begining</p>                      
             <Parent />
            </div>

           
        )

    }
}

function Parent() {
    const [value, setValue] = React.useState("");

    function handleChange(newValue) {
      setValue(newValue);
      console.log(value);
    }

    // We pass a callback to Child
    return <Child value={value} onChange={handleChange} />;
}

function Child(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
  
    return <input value={props.value} onChange={handleChange} />
}

export default Home
