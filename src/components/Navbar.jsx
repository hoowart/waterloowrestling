import React from 'react'
import waterloowrestlinglogo from './images/waterloowrestling.webp'
const Navbar = () => {
  return (
    <>
        <div className="fixed flex bg-black right-0 left-0 p-10 justify-between">
          <div>
            <img className="h-36 m-4" alt="logo" src={waterloowrestlinglogo}></img>
          </div>
          <ul className="inline-block color-white">
            <li>
              <a className="" alt="navbar-elements" href="/home">Home</a>
            </li>
            <li>
              <a alt="navbar-elements" href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Navbar