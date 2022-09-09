import { useEffect } from 'react';
import './App.css';
import Page from './components/Page/Page';


function App() {
  useEffect(() => {
    fetch('http://localhost:3006/test')
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
