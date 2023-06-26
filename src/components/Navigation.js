import React from 'react';
import '../styles/NavigationStyle.css'



function Navigation({currentPage, handlePageChange}) {
  const linkStyle = { 
    border: '1px black', 
    padding: '10px',   
  };
// main-header-menu
  return (
    <nav className="navSection">
      <section className='headerName'><h1>Tolefree</h1></section>
      <section className=''
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          
        }}
      >
        {/* <h1>Tolefree</h1> */}
      <section className='header'>
        <div>
          <a href="#about"
          onClick={() => handlePageChange('About')}
          
          >About me</a>
        </div>

        <div>
          <a href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          >Portfolio</a>
        </div>

        <div>
          <a href="#contact"
          onClick={() => handlePageChange('Contact')}
          >Contact</a>
        </div>

        <div>
          <a href="#resume"
          onClick={() => handlePageChange('Resume')}
          >Resume</a>
        </div>
      </section>
      </section>
    </nav>
  );
}

export default Navigation;