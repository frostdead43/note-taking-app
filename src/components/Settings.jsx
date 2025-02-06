import { div } from "motion/react-client"
import { useState } from "react"

function Settings() {
  const [page , setPage] = useState("font")

  return(
    <div className="setting-area">
      <h2>Settings</h2>
      <div className="buttons">
        <button onClick={() => setPage('Theme')}><img src="./assets/images/light-mode-icon.svg"/></button>
        <button onClick={() => setPage('font')}><img src="./assets/images/font-icon.svg"/></button>
      </div>
      {page === "font" ? <FontArea/> : <ThemeArea /> }
    </div>
    
  )
}

function FontArea() {
  return (
    <div className="theme-area">
      <h2>Font Theme</h2>
      <p>Choose your font theme:</p>
      <div className="theme">
        <div>
          <img src="./assets/images/sans-font-icon.svg"/>
        </div>
        <div>
          <h3>Sans-Serif</h3>
          <p>Clean and modern, easy to read.</p>
        </div>
        <div>
        <input type="radio" id="sans-serif" name="font-theme" value="sans-serif" />
          <label htmlFor="sans-serif">
            <span class="custom-radio"></span>
          </label>
        </div>
      </div>

      <div className="theme">
        <div>
          <img src="./assets/images/serif-font-icon.svg"/>
        </div>
        <div>
          <h3>Serif</h3>
          <p>Classic and elegant for a timeless feel.</p>
        </div>
        <div>
        <input type="radio" id="serif" name="font-theme" value="serif" />
          <label htmlFor="serif">
            <span class="custom-radio"></span>
          </label>
        </div>
      </div>

      <div className="theme">
        <div>
          <img src="./assets/images/sans-font-icon.svg"/>
        </div>
        <div>
          <h3>Monospace</h3>
          <p>Code-like, great for a technical vibe.</p>
        </div>
        <div>
        <input type="radio" id="smonospace" name="font-theme" value="monospace" checked />
          <label htmlFor="monospace">
            <span class="custom-radio"></span>
          </label>
        </div>
      </div>

      
    </div>
  )
}

function ThemeArea() {
  return(
    <div className="them">

    </div>
  )
}


export default Settings