import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((info) => {
      setData(info.data);
      setLoading(false);
    });
  }, []);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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
      <div className='ManageData'>
        <input
          className='input'
          placeholder='Search for a country...'
          type='text'
        />
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

      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
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
  );
}

export default App;
