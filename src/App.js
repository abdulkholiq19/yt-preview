import logo from "./logo.svg";
import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
  },[])

  window.addEventListener('click', function(e){   
    if(document.getElementById('parent-0').contains(e.target)){
      setShow(false)
    }
  });
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className="button-yt" onClick={() =>setShow(true)}> Click Me</button>
          <div className="parent-0" style={{display: show === false  ? 'none' : ''}} id='parent-0'>
            <div className="parent-1">
              <iframe
                className="image1"
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                title="video"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
