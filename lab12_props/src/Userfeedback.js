import React from "react";
import './App.css';
import Modalwindow from './Modalwindow';

const Userfeedback = function(props) {
  const openmodalwindow = () => {
    const modal = document.querySelector('.modalwindow');
    modal.style.display = 'block';
  }
  return (
    <>
    <div className="feedbackcontainer">
      <section className="feedbackcard">
        {props.children}
        <div className="cardfooter">
          <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add Feedback</p>
        </div>
      </section>
    </div>
      <Modalwindow />
    </>
  );
}

export default Userfeedback;