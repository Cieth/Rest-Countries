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
      console.log(info.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <input
          style={{ width: '80%' }}
          placeholder='Search for a country...'
          type='text'
        />
        <select style={{ width: '40%' }}>
          <option value='Region' key='0'>
            uwu
          </option>
        </select>
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {loading ? (
          <>Loading</>
        ) : (
          data.map((item) => {
            return (
              <Card
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
