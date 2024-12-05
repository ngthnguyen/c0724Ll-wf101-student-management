import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#333', padding: '10px', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/list" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Student List</Link>
        <Link to="/add" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Add Student</Link>
        <Link to="/search" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Search Student</Link>
      </nav>
    </header>
  );
};

export default Header;
