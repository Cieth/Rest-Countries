import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((info) => {
      setData(info.data);
      setLoading(false);
    });
  }, []);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleInput = (e) => {
    const value = e.target.value;
    if (value !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${value}`)
        .then((info) => {
          setData(info.data);
          setLoading(false);
          setError(false);
        })
        .catch((x) => {
          setError(true);
          setData([]);
        });
    }
  };

  const handleSelect = (e) => {
    setLoading(true);
    const value = e.target.value;
    if (value !== 'all') {
      axios
        .get(`https://restcountries.com/v3.1/region/${value}`)
        .then((info) => {
          setData(info.data);
          setLoading(false);
        });
    } else {
      axios.get('https://restcountries.com/v3.1/all').then((info) => {
        setData(info.data);
        setLoading(false);
      });
    }

    //
  };
  return (
    <div className='App'>
      <Navbar />
      <div className='Main'>
        {error ? (
          <div style={{ textAlign: 'center', color: 'grey' }}>
            No ocurrences
          </div>
        ) : (
          <></>
        )}

        <div className='ManageData'>
          <div className='input-wrapper'>
            <input
              onChange={handleInput}
              className='input'
              placeholder='Search for a country...'
              type='text'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='input-icon'
              viewBox='0 0 512 512'
            >
              <title>Search</title>
              <path
                d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
                fill='none'
                stroke='currentColor'
                stroke-miterlimit='10'
                stroke-width='32'
              />
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-miterlimit='10'
                stroke-width='32'
                d='M338.29 338.29L448 448'
              />
            </svg>
          </div>

          <select onChange={handleSelect} className='select'>
            <option value='' disabled selected>
              Filter by region
            </option>
            <option value='all'>All</option>
            {regions.map((region, i) => {
              return (
                <option value={region} key={i}>
                  {region}
                </option>
              );
            })}
          </select>
        </div>

        <div className='Container'>
          {loading ? (
            <>Loading</>
          ) : (
            data.map((item, i) => {
              return (
                <Card
                  key={i}
                  img={item.flags.png}
                  name={item.name.official}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
