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
    <header>
      <div className="App">
        <h1>Choose Excuse Category</h1>
        <button className="family">Family</button> <button className="children">Children</button>
        <br></br>
        <button className="office">Office</button> <button className="college">College</button>{' '}
        <button className="party">Party</button>
        <ExcuseList {...{ excuses }} />
      </div>
    </header>
  );
}
