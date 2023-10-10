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

        <div className="skill-container">
          <div className="container-part">
            <h1 className="skillname">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel sapien leo. Ut interdum risus mi, vitae pulvinar felis
              porttitor vel. Duis condimentum tellus vel pellentesque viverra.
              Phasellus pellentesque auctor.
            </p>
          </div>
          <div className="container-part">
            <h1 className="skillname">App Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel sapien leo. Ut interdum risus mi, vitae pulvinar felis
              porttitor vel. Duis condimentum tellus vel pellentesque viverra.
              Phasellus pellentesque auctor.
            </p>
          </div>
          <div className="container-part">
            <h1 className="skillname">UI/UX Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel sapien leo. Ut interdum risus mi, vitae pulvinar felis
              porttitor vel. Duis condimentum tellus vel pellentesque viverra.
              Phasellus pellentesque auctor.
            </p>
          </div>
          <div className="container-part">
            <h1 className="skillname">Branding/Logo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel sapien leo. Ut interdum risus mi, vitae pulvinar felis
              porttitor vel. Duis condimentum tellus vel pellentesque viverra.
              Phasellus pellentesque auctor.
            </p>
          </div>
        </div>
      </div>
      <div className="about-me">
        <img className="about-me-img" src={profile} alt="" />
        <div className="about-me-txt">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            commodo vehicula orci vel vehicula. Nunc ipsum metus, sollicitudin
            quis tincidunt sit amet, scelerisque vel est. Nunc congue venenatis
            lorem ac auctor. Fusce vehicula volutpat maximus. Nam ut diam
            ornare, eleifend lorem id, tempor neque. Donec placerat nisl nec
            tincidunt porta. Nullam ornare arcu non neque scelerisque, id
            interdum felis pretium. Suspendisse ut erat felis. Suspendisse
            potenti. In faucibus metus et sollicitudin vehicula. Vestibulum
            justo nunc, mollis a ex non, convallis facilisis lorem. Curabitur eu
            lectus leo. Maecenas efficitur efficitur urna et elementum. Cras
            volutpat consequat lorem, vitae sollicitudin elit bibendum et. Nulla
            ut dui diam. Nulla eu augue sit amet elit consequat euismod non
            feugiat neque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
