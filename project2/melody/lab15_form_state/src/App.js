import './App.css';
import React, {useState} from 'react';

function App() {
  // set the initial state for username, age and multiple state
  const [inputs, setInputs] = useState({});
  // state for select dropdown Gender
  const [myGender, setMyGender] = useState("male");
  // function to handle select dropdown change
  const selectGender = function(event) {
    setMyGender(event.target.value);
  }
  // state for textarea comments
  const [texttcomment, setComment] = useState("");
  // function to handle textarea change
  const submitted_comments = function(event) {
    setComment(event.target.value);
  }
  // function to collect all input values and set to the state
  const handle_Change = function(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  // form submit handler function
  const submitform = function(event) {
    event.preventDefault();
  }
  
  return (
    <div className='App'>
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React</legend>
          <div className='formgroup'>
            <label htmlFor="name"> Enter username: </label>
            <input 
              type="text" 
              id="name" 
              name="username"
              className='inputstyle'
              placeholder="Type your username..."
              value={inputs.username || ''}
              onChange={handle_Change}
            />  
          </div>
          <div className='formgroup'>
            <label htmlFor="age"> Enter your age: </label>
            <input 
              type="number" 
              id="age" 
              name="age"
              placeholder="Type your age..."
              value={inputs.age || ''}
              onChange={handle_Change}  
            />
          </div>
          <div className='formgroup'>
            <label htmlFor="password"> Enter password: </label>
            <input 
              type="password" 
              id="password" 
              name="password"
              placeholder="Type your password..."
              value={inputs.password || ''}
              onChange={handle_Change}  
            />
          </div>
          <div className='formgroup'>
            <label htmlFor="gender"> Gender: </label>
            <select id="gender" value={myGender} onChange={selectGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="comments"> Any Suggestions: </label>
            <textarea 
              id="comments" 
              value={texttcomment} 
              placeholder="Type your suggestions here..."
              onChange={submitted_comments}
            />
          </div>
          <input type='submit' className='btnsubmit'/>
        </fieldset>
      </form>
      <p className='printusername'> Username: {inputs.username}</p>
      <p className='printage'> Age: {inputs.age}</p>
      <p className='printpassword'> Password: {inputs.password}</p>
      <p className='printgender'> Gender: {myGender}</p>
      <p className='printcomment'> Comments: {texttcomment}</p>
    </div>
  );
}

export default App;