import React from "react";
import './App.css';


const Modalwindow = function(){
    // Function to close the modal window
    const closemodalwindow = () => {
        const modalwindow = document.querySelector('.modalwindow');
        modalwindow.style.display = 'none';
    }
    return (
        <>
            {/* Modal Window Component */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add Feedback</p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className="modalbody">
                        <input type="text" placeholder="Type your comments..." className="commentarea"/>
                        <button className="btnpostfeedback">Post Feedback</button>
                    </main> 
                </div>
            </section>
        </>
    );
}
export default Modalwindow;