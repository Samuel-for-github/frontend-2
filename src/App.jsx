import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [intro, setIntro] = useState({});

  useEffect(() => {
    fetch('/api')
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`Network response was not ok: ${response.statusText}`);
        // }
        return response.json();
      })
      .then((data)=>{
        setIntro(data)
          console.log(data);
      })
      .catch((err) => {
        console.error('Error during fetch operation:', err);
      });
  }, []); // Added an empty dependency array to ensure useEffect runs only once

  return (
    <>
      <h1>I am</h1>
      <span>{intro.name}</span>
    </>
  );
}

export default App;
