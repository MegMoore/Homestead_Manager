import React from 'react'
import { Home } from './Home'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
    <div>
        <Link to="/" className="btn btn-primary ms-3">
          Home
        </Link>
    </div>
    <div>
        <Link to="/userList" className='btn btn-primary ms-3'>UserList</Link>
    </div>
    </>
  )
}
