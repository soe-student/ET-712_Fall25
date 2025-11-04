import './App.css';
import eagle from './images/eagle.jpg'

function App() {
  return (
    <>
      <h1 className='title'>Welcome to React JS</h1>
      <h2 className='author'>Soe Kaythi</h2>
      <h2 style={{color:"green",textAlign:"center"}}>Inline Styling</h2>
      <section>
        <label for="userEmail">Email: </label>
        <input type="email" id="userEmail" placeholder="Enter your email" />
      </section>
      <figure className='img-container'>
        <img src={eagle}/>
      </figure>    
    </>

  );
}

export default App;
