import "./App.css";
import Nav from "./Nav";
import MainBody from "./MainBody";
import { useState } from 'react';

function App() {

  const [nav, setNav] = useState('about'); //about is default home

  return (
    <div className="App">
      <Nav setNav={setNav} />
      <MainBody nav={nav} />
    </div>
  );
}

export default App;
