import React from "react";
import "./FormContact.scss";

function FormContact() {
  return (
    <>
      <div className="container_contact">
        <div className="form">
          <div className="text_contact">
            <h1> Hello </h1>
            <h3> Send a message! </h3>
          </div>
          <form className="item_form">
            <div className="form1">
              <label htmlFor=" ">Your name: </label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form2">
              <label htmlFor=" "> Email: </label>
              <input type="Email" placeholder="Email" />
            </div>
            <div className="form3">
              <label htmlFor=" "> Message </label>
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="button_contact"> Sent</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContact;
