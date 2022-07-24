import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div className="header-list" >
    <div className='heade'>    <h3>ReactSuccessApp</h3>
</div>
    <div className='itemss'>
    <ul className="list">
      <li className="items">
      <Link to="/home">Home</Link>

        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
      </li>
      <li className="items">
      <Link to="/contactus">Contact Us</Link>
      </li>
      <li className="items">
      <Link to="/gallery">Gallery</Link>
      </li>
      <li className="items">
      <Link to="/about">About</Link>

      </li>
    </ul>
    </div>
  </div>
{/* </nav> */}
    </>
  )
}
