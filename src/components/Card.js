import React from 'react';
import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';
const Card = ({ img, name, population, region, capital }) => {
  return (
    <Link to={`/${name}`}>
      <div className={styles.Card}>
        <div>
          <img
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
            src={img}
            alt={'countries'}
          />
        </div>

        <div className={styles.CardInfo}>
          <span className={styles.CardInfo1}>
            <b>{name}</b>
          </span>
          <div className={styles.CardInfo2}>
            <span>
              <b>Population:</b> {population.toLocaleString('en-US')}
            </span>
            <span>
              <b>Region:</b> {region}
            </span>
            <span>
              <b>Capital:</b> {capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
