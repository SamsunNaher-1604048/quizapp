import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='container'>
        <Link className='title' to='/'>Quiz App</Link>
    </div>
  )
}

export default Header
