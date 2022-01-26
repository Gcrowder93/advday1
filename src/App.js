import './App.css';
import React, { useState, useEffect } from 'react';
import { getExcuses } from './services/excuses';
import ExcuseList from './Components/excuseList';
import Controls from './Components/controls';

export default function App() {
  const [excuses, setExcuse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExcuses();
      setExcuse(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);
  const filterExcuses = excuses.filter(
    (excuses) => excuses.category.toLowerCase().includes(query) || excuses.category.includes(query)
  );

  return (
    <header>
      <div className="App">
        <h1>Search by Category</h1>
        <Controls query={query} setQuery={setQuery} category={category} setCategory={setCategory} />
        <br></br>
        <a className="family" onClick={excuses.category}>
          - Family -
        </a>{' '}
        <a className="children">Children -</a>
        <br></br>
        <a className="office">- Office -</a> <a className="college">College -</a>{' '}
        <a className="party">Party -</a>
        <br></br>
        <br></br>
        {loading && <span className="loader">LOADING</span>}
        {!loading && <ExcuseList {...{ excuses }} filterExcuses={filterExcuses} />}
      </div>
    </header>
  );
}
