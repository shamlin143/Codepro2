import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Element } from "react-scroll";






export default function contactForm() {
  function send(lookUpUserbyID){
    // lookup user who posted job by id and retrieve email address
    return (
      <div>
          {/* Get email address retrieved and sent to that addres using CC to copy person applying for project */}
        {window.open("mailto:shalin@gvtc.com?subject=CodePro Inquiry")}
        {console.log("go to mail url.")}
      </div>
    )
    
  }
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="contact-me">Apply</Element>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={e => send(e)}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
             Apply
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}