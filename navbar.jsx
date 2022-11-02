import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (<nav className='navbar bg-light'>
            <a className='navbar-brand' href="#">
                Navbar <span className="badge rounded-pill text-bg-secondary">
                    {totalCounters}
                </span>            
            </a>
  </nav>);
}

export default NavBar;