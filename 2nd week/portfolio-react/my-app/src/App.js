import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="container">
        <div className="page-header">
          <div className="logo">
            <a href="#home">Walid Sabbar</a>
          </div>
          <input 
            type="checkbox" 
            id="click" 
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
          />

          <label htmlFor="click" className="mainicon" aria-label="Toggle navigation menu">
            <div className="menu">
              <i className='bx bx-menu' aria-hidden="true"></i>
            </div>
          </label>
          <nav className={menuOpen ? 'menu-open' : ''}>
            <ul>
              <li><a href="#home" className="active" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container" id="home">
        <div className="main">
          <div className="images">
            <img src="/pfp.png" alt="Walid Sabbar - Web Developer" className="img-w" />
          </div>
          <div className="detail">
            <h3>Hi, I'm</h3>
            <h1><span>Walid</span> Sabbar</h1>
            <p className="tagline">Web Developer & Creative Problem Solver</p>
            <div className="social">
              <a href="https://www.linkedin.com/in/walid-sabbar-5262152a0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <i className='bx bxl-linkedin' aria-hidden="true"></i>
              </a>
              <a href="https://github.com/walidsabbar1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <i className='bx bxl-github' aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCVnf6C2Qn1nrAYKlFgIbhiw" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
                <i className='bx bxl-youtube' aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/walid_sabbar1" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <i className='bx bxl-instagram' aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
