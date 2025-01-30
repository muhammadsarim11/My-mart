import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {


    return (
    <div>
        <nav className='h-16 px-5 bg-gray-200 flex justify-between items-center'>
            <h3 className='text-lg font-medium'>mart</h3>
            <div id='l' className="flex gap-5 ">
                <Link className='text-sm' to={'/'}>home</Link>
                <Link className='text-sm' to={'/reviews'}>reviews</Link>
                <Link className='text-sm' to={'/about'}>about us</Link>
                <Link className='text-sm' to={'/product'}>product section</Link>
            </div>
        </nav>
    </div>
  )
}

export default Header