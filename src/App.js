import "./App.css";
import MainNav from "./MainNav";
import MainBody from "./MainBody";
import { useState } from 'react';

function App() {

  const [nav, setNav] = useState('about'); //about is default home

  return (
    <div className="App">
      <MainNav setNav={setNav} />
      <MainBody nav={nav} />
    </div>
  );
}

export default App;
