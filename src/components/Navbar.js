import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './assets/svg/Logo-long.svg';
import messWind from './assets/svg/icons/message-window.svg';
import profAdd from './assets/svg/icons/profAdd.svg';
import bellNot from './assets/svg/icons/bell-simple.svg';

export default function Navbar(props) {

  return (
    <>
      <nav id="mainNavbar" className={`py-3 navbar navbar-expand-lg fixed-top`}>
        <div id="innerNav" className="container">
          <Link className='navbar-brand mx-3' to="/">
            <img src={logo} alt="..." height={'35x'} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className='nav-link' to="/projects">projects.</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/inspiration">inspirations.</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/login">login.</Link>
              </li>
              <li className="nav-item dropdown">
                <img className='nav-link-icon' src={messWind} alt="" role='button' data-bs-toggle='dropdown' aria-expanded='false'/>
                <span className='dropdown-menu text-center'>
                  <h3 style={{fontSize: '15px', opacity: '80%', padding: '20px'}}>no new messages</h3>
                </span>
              </li>
              <li className="nav-item dropdown">
                <img className='nav-link-icon' src={bellNot} alt="" role='button' data-bs-toggle='dropdown' aria-expanded='false'/>
                <span className='dropdown-menu text-center'>
                  <h3 style={{fontSize: '15px', opacity: '80%', padding: '20px'}}>no new notifications</h3>
                </span>
              </li>
              <li className="nav-item dropdown">
                  <img src={profAdd} alt="" className='nav-link-icon' role='button' data-bs-toggle="dropdown" aria-expanded="false" to="dropdown-menu" />
                <ul className="dropdown-menu text-center">
                  <li><Link className='dropdown-item' to='/dashboard'>Profile</Link></li>
                  <li><Link className='dropdown-item' to='/profSett'>Accounts</Link></li>
                  <li><Link className='dropdown-item' to='/settings'>Settings</Link></li>
                  <li><Link className='dropdown-item' to='/helpmenu'>Help</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



<nav className='mainNavbar'>
  <div className="container">
    <div className="nav-brand">
      <Link className='navbar-brand mx-3' to="/">
        <img src={logo} alt="..." height={'35x'} />
      </Link>
    </div>
    <div className="nav-side">
      <ul className="navbar-nav">
        <li className='nav-items'>
          <Link className='nav-links' to='/projects'>Projects</Link>
        </li>
        <li className='nav-items'>
          <Link className='nav-links' to='/projects'>inspiration</Link>
        </li>
        <li className='nav-items'>
          <Link className='nav-links' to='/projects'>Profile</Link>
        </li>
        <li className='nav-items'>
          <Link className='nav-links' to='/projects'>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>