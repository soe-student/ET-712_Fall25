import './App.css';
import User from './comments';
import Userfeedback from './Userfeedback';


// import images
import user1 from './images/male.png';
import user2 from './images/girl.png';
import user3 from './images/boy.png';

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Lab 12, React Props by Soe Kaythi</h1>
      <section className="container">
        {/* user1 */}
        <Userfeedback>
          <User image={user1} username="Male" date="11/6/2025" msg="I am a support" />
        </Userfeedback>
        {/* user2 */}
        <Userfeedback>
          <User image={user2} username="Girl" date="11/6/2025" msg="I am a girl" />
        </Userfeedback>
        {/* user3 */}
        <Userfeedback>
          <User image={user3} username="Boy" date="11/6/2025" msg="I am a boy" />
        </Userfeedback>
      </section>
      
    </>
  );
}

export default App;