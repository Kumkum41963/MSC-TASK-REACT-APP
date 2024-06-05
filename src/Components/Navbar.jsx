import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-items">
          <Link className="navlist-items" to="/"><button>Home</button></Link>
          <Link className="navlist-items" to="/about"><button>About</button></Link>
          <Link className="navlist-items" to="/signIn"><button>Sign In</button></Link>
          <Link className="navlist-items" to="/contact"><button>Contact</button></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar