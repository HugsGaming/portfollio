import React, { useState } from 'react'
function Navbar() {
    const [menuClick, setMenuClick] =  useState(false);

    const handleMenuClick = () => setMenuClick(!menuClick);
  return (
    <>
        <header className='w-screen bg-white px-8 py-8'>
            <nav className='flex justify-between items-center mx-auto'>
                <div>
                    <h1 className='font-sans'>Portfolio</h1>
                </div>
                <div className={`md:static md:min-h-fit absolute bg-white min-h-[60vh] left-0 ${menuClick ? 'top-[9%]' : 'top-[-100%]' }  md:w-auto w-full flex items-center px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-8'>
                        <li>
                            <a className='hover:text-gray-500' href="/">Home</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="/about">About</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="/projects">Projects</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-6' onClick={handleMenuClick}>
                    <div className='text-4xl cursor-pointer md:hidden'>
                        <ion-icon name={menuClick ? 'close-sharp' : 'menu-sharp'}></ion-icon>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar