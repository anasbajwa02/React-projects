import React from 'react'
import "./theme.css";
const Theme = () => {
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
          <button>Use Theme</button>
        </div>
        <div className="night-owl">
          <img src="/nightowl.webp" alt="night owl " />
          <h2>Night Owl</h2>
          <h4>Vibrant and readable theme.</h4>
          <button>Use Theme</button>
        </div>
      </div>
    </div>
  )
}

export default Theme