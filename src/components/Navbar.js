import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Registrar</Link>
            </li>
            <li>
                <Link to="/Program">Program</Link>
            </li>
            <li>
                <Link to="/Level">Level</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar