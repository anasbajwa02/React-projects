import React, { useContext, useRef } from 'react';
import "./theme.css";
// import  ThemeContext  from '../../context/ThemeContext';
import ThemeContext from '../../context/themeContext';


const Theme = () => {

  const { theme, setTheme } = useContext(ThemeContext);
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
      <div className={`theme-container ${theme ? "vscode-theme" : "night-owl-theme"}`}>
      <div className="theme-title">
        <h2>Pick Your VSCode Theme</h2>
      </div>
      <div className="themes">
        <div className={`vs-code ${theme ? "vs-container-on" :" vs-container-off"}`}>
          <img src="/vscode.webp" alt="vs code " />
          <h2>VS Code</h2>
          <h4>Classic VSCode theme.</h4>
          <button onClick={handleVsCode} ref={VsRef} className={theme ? "vs-on" : "vs-off"}>Selected</button>
        </div>

          <div className={`night-owl ${theme ? "nightowl-container-off" :" nightowl-container-on"}`}>
          <img src="/nightowl.webp" alt="night owl " />
          <h2>Night Owl</h2>  
          <h4>Vibrant and readable theme.</h4>
          <button onClick={handleNightOwl} ref={OwlRef} className={theme ? "nightowl-off" : "nightowl-on"} >Use Theme</button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
