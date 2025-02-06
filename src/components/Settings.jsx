import { div } from "motion/react-client"
import { useEffect, useState } from "react"

function Settings() {
  const [page , setPage] = useState("font")

  return(
    <div className="setting-area">
      <h2>Settings</h2>
      <div className="buttons">
        <button onClick={() => setPage('Theme')}><img src="./assets/images/light-mode-icon.svg" alt="Light Mode Icon"/></button>
        <button onClick={() => setPage('font')}><img src="./assets/images/font-icon.svg" alt="Font Icon"/></button>
      </div>
      {page === "font" ? <FontArea/> : <ThemeArea /> }
    </div>
  )
}

function FontArea() {
  
  const [font,setFont] = useState("inter")

  useEffect(() => {
    document.body.style.fontFamily = font;
  }, [font])

  return (
    <div className="font-area" >
      <h2>Font Theme</h2>
      <p>Choose your font theme:</p>

      <label htmlFor="inter">
        <div className="font">
          <div className="font-flex">
            <div>
              <img src="./assets/images/sans-font-icon.svg"/>
            </div>
            <div>
              <h3>Inter</h3>
              <p>Default font for this Application</p>
            </div>
          </div>
          <div>
            <input type="radio" id="inter" name="font-theme" value="inter" checked = {font === "inter"} onChange={(e) => setFont(e.target.value)} />
            <span className="custom-radio"></span>
          </div>
        </div>
      </label>

      <label htmlFor="sans-serif">
        <div className="font">
          <div className="font-flex">
            <div>
              <img src="./assets/images/sans-font-icon.svg" alt="Sans Font Icon"/>
            </div>
            <div>
              <h3>Sans-Serif</h3>
              <p>Clean and modern, easy to read.</p>
            </div>
          </div>
          <div>
            <input type="radio" id="sans-serif" name="font-theme" value="sans-serif" checked = {font === "sans-serif"} onChange={(e) => setFont(e.target.value)} />
            <span className="custom-radio"></span>
          </div>
        </div>
      </label>

      <label htmlFor="serif">
        <div className="font">
          <div className="font-flex">
            <div>
              <img src="./assets/images/serif-font-icon.svg" alt="Serif Font Icon"/>
            </div>
            <div>
              <h3>Serif</h3>
              <p>Classic and elegant for a timeless feel.</p>
            </div>
          </div>
            <div>
            <input type="radio" id="serif" name="font-theme" value="serif" checked = {font === "serif"} onChange={(e) => setFont(e.target.value)} />
            <span className="custom-radio"></span>
          </div>
        </div>
      </label>

      <label htmlFor="monospace">
        <div className="font">
          <div className="font-flex">
            <div>
              <img src="./assets/images/sans-font-icon.svg" alt="Monospace Font Icon"/>
            </div>
            <div>
              <h3>Monospace</h3>
              <p>Code-like, great for a technical vibe.</p>
            </div>
          </div>
          <div>
            <input type="radio" id="monospace" name="font-theme" value="monospace" checked = {font === "monospace"} onChange={(e) => setFont(e.target.value)} />
            <span className="custom-radio"></span>
          </div>
        </div>
      </label>
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