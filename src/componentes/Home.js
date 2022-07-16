import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
       
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </>
  )
}

export default Home