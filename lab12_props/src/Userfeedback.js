import React from "react";
import './App.css';

const Userfeedback = function(props) {
  return (
    <div className="feedbackcontainer">
      <section className="feedbackcard">
        {props.children}
        <div className="cardfooter">
          <p className="addicon"><span>&#10011;</span>Add Feedback</p>
        </div>
      </section>
    </div>
  );
}

export default Userfeedback;