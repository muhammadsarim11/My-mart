import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {


    return (
    <div>
        <nav className='h-16 px-5 bg-gray-200 flex justify-between items-center'>
            <h3 className='text-lg font-medium'>sarim's mart</h3>
            <div className="flex gap-5 ">
                <Link to={'/'}>home</Link>
                <Link to={'/reviews'}>reviews</Link>
                <Link to={'/about'}>about us</Link>
                <Link to={'/product'}>product section</Link>
            </div>
        </nav>
    </div>
  )
}

export default Header