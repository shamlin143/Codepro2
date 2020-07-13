// import { Container, Col,  Form } from 'react-bootstrap';
import "../sidebar/sidebarStyle.css";
import React from "react";

export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

   const toggleMenu = () => {
   if (xPosition < 0) {
      setX(0);
      console.log('xPosition', xPosition);
     } else {
      setX(-width);
       console.log('xPosition', xPosition);
    }
 };


  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
    
      <div
        className="side-bar"
        style={{
          transform: `translateX(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >

         {/* <button

          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`

          }} 

        ></button> */}
        <div className="content">{children}</div>
      </div> 
      
     </React.Fragment>
  );
    }

