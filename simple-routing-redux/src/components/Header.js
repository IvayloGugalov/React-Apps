import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowsSize'

const Header = ({title}) => {
  const { width } = useWindowSize();

  return (
    <header className='Header'>
      <h1>
        <Link to='/' style={{ textDecoration: 'none', color: 'black'}}>
          {title}
        </Link>
        </h1>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header