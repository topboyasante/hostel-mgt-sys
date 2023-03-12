import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main>
        <Link to={`register`}>
        <button className='border border-red-500'>Sign Up</button>
        </Link>
        <br />
        <Link to={`login`}>
        <button className='border border-red-500'>Sign In</button>
        </Link>
    </main>
  )
}

export default LandingPage