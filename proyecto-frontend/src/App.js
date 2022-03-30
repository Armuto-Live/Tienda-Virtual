import React,{useState} from 'react';
import './App.css';

const GIFS=['https://media.giphy.com/media/fAaBpMgGuyf96/giphy.gif','https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif']
function App() {
  const [gifs,setGifs]=useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif=>
            <img src={gifs}/>)
        }
      </section>
    </div>
  );
}

export default App;
