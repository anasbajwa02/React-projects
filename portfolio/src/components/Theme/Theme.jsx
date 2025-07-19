import React, { useContext, useRef } from 'react';
import "./theme.css";
// import  ThemeContext  from '../../context/ThemeContext';
import ThemeContext from '../../context/themeContext';

const Theme = () => {
  const { setTheme } = useContext(ThemeContext);
  const VsRef = useRef(null);
  const OwlRef = useRef(null);

  const handleVsCode = () => {
    setTheme(true);
    VsRef.current.innerText = "Selected";
    OwlRef.current.innerText = "Use Theme";  // Reset other button
    console.log("vscode is clicked");
  };

  const handleNightOwl = () => {
    setTheme(false);
    OwlRef.current.innerText = "Selected";
    VsRef.current.innerText = "Use Theme";   // Reset other button
    console.log("night owl clicked");
  };

  return (
    <div className="theme-container">
      <div className="theme-title">
        <h2>Pick Your VSCode Theme</h2>
      </div>
      <div className="themes">
        <div className="vs-code">
          <img src="/vscode.webp" alt="vs code " />
          <h2>VS Code</h2>
          <h4>Classic VSCode theme.</h4>
          <button onClick={handleVsCode} ref={VsRef}>Selected</button>
        </div>
        <div className="night-owl">
          <img src="/nightowl.webp" alt="night owl " />
          <h2>Night Owl</h2>  
          <h4>Vibrant and readable theme.</h4>
          <button onClick={handleNightOwl} ref={OwlRef} >Use Theme</button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
