import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1rem',
        backgroundColor: 'white',
      }}
    >
      <h1
        style={{
          fontSize: '1.2rem',
        }}
      >
        Where in the world?
      </h1>
      <span>Dark mode</span>
    </nav>
  );
};

export default Navbar;
