import './App.css';
import React, { useState, useEffect } from 'react';
import { getExcuses } from './services/excuses';
import ExcuseList from './Components/excuseList';

export default function App() {
  const [excuses, setExcuse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getExcuses();
      setExcuse(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Which excuse fits best</h1>
      <ExcuseList {...{ excuses }} />
    </div>
  );
}
