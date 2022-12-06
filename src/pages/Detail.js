import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Detail.module.css';

const Detail = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState();
  const [languages, setLanguages] = useState();
  const params = useParams();
  const cName = params['*'];

  const getCurrency = (payload) => {
    const currency = [];
    for (let key in payload.data[0].currencies) {
      currency.push(payload.data[0].currencies[key]);
    }
    setCurrencies(currency);
  };
  const getLanguages = (payload) => {
    let lang = [];
    for (let key in payload.data[0].languages) {
      lang.push(payload.data[0].languages[key]);
    }
    setLanguages(lang);
  };

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${cName}`).then((info) => {
      setData(info.data[0]);
      getCurrency(info);
      getLanguages(info);
      console.log(data);
      setLoading(false);
    });
  }, []);

  //loading ? <></> : console.log(languages.length);

  return (
    <div className={styles.body}>
      {loading ? (
        <>loading</>
      ) : (
        <>
          <div>
            <Link to={'/'}>
              <button className={styles.button}>Back</button>
            </Link>
          </div>
          <div className={styles.body_content}>
            <div className={styles.body_content_img}>
              <img src={data.flags.png} alt='country' />
            </div>
            <div className={styles.divider}>
              <div className={styles.details_container}>
                <div className={styles.body_content_details}>
                  <div className={styles.body_content_title}>
                    <span>
                      <b>{data.name.official}</b>
                    </span>
                  </div>
                  <span>
                    <b>Native Name: </b>
                    {data.name.common}
                  </span>
                  <span>
                    <b>Population: </b>
                    {data.population.toLocaleString('en-US')}
                  </span>
                  <span>
                    <b>Region: </b>
                    {data.region}
                  </span>
                  <span>
                    <b>Subregion: </b>
                    {data.subregion}
                  </span>
                  <span>
                    <b>Capital: </b>
                    {data.capital}
                  </span>
                </div>
                <div className={styles.body_content_subdetails}>
                  <span>
                    <b>Top Level Domain: </b>
                    {data.tld}
                  </span>
                  <span>
                    <b>Currencies: </b>
                    {currencies[0].name}
                  </span>
                  <span>
                    <b>Languages: </b>
                    {languages.map((x, i) => {
                      if (i === languages.length - 1) {
                        return x;
                      } else {
                        return x + ', ';
                      }
                    })}
                  </span>
                </div>
              </div>
              {data.borders !== undefined ? (
                <div className={styles.body_content_border_container}>
                  <span>
                    <b>Border Countries</b>
                  </span>
                  <div className={styles.body_content_borders}>
                    {data.borders.map((x, i) => {
                      return (
                        <div key={i} className={styles.borders}>
                          {x}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
