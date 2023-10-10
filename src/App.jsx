import './App.css';
import profile from './images/profile.jpeg';
function App() {
  return (
    <div>
      <div className="navbar">
        <h1 className="brand-name">ANIL YAVAS</h1>
        <div className="container"></div>
        <div className="navigation-links">
          <h3 className="nav-text">Home</h3>
          <h3 className="nav-text">Portfolio</h3>
          <h3 className="nav-text">About Me</h3>
          <h3 className="nav-text-contact">Contact Me</h3>
        </div>
      </div>
      <div className="header">
        <div className="header-left">
          <h3 className="welcome-text">Hello, I am Anıl</h3>
          <p className="paragraph">
            I create <span className="inline-paragraph">Web and Mobile</span>{' '}
            Applications with the best user experience.
          </p>
          <div className="get-in-touch">
            <h3 className="touch-text">Get in Touch</h3>
          </div>
        </div>
        <div>
          <img className="image" src={profile} alt="" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-header-left">
          <h2 className="skills-header">My Skills</h2>
          <h1 className="expertise-header">My Expertise</h1>
        </div>
        <div className="skills-container">
          <div>
            <h1>Web Development</h1>
            <p>
              Using technologies such as HTML,CSS and Javascript, I can design
              and build websites with best user experience.
            </p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
