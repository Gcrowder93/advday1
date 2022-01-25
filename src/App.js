import './App.css';
import { useEffect } from 'react';
import { getExcuses } from './services/excuses';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const excuseData = await getExcuses();
      console.log(excuseData);
    };
    fetchData();
  });

  return (
    <div className="App">
      <h1>abc</h1>
    </div>
  );
}

export default App;
