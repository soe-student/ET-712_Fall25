import React from "react";
import './App.css';

const User = function(props) {
  return (
    <section className="card">
      <div><img src={props.image} alt="User avatar"/></div>
      <div className="content">
        <span className="author">{props.username}</span>
      </div>
      <div className="metadata">
        <p>Posted on <span className='date'>{props.date}</span></p>
      </div>
      <div className="comment">
        <p>{props.msg}</p>
      </div>
    </section>
  );
}

export default User;