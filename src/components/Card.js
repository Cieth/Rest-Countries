import React from 'react';

const Card = ({ img, name, population, region, capital }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: '1rem',
        borderRadius: '10px',
      }}
    >
      <div>
        <img
          style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
          src={img}
          alt=''
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'right',
          margin: '1rem',
        }}
      >
        <span style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
          <b>{name}</b>
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
            marginBottom: '1.3rem',
            fontSize: '0.9rem',
          }}
        >
          <span>
            <b>Population:</b> {population}
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
  );
};

export default Card;
