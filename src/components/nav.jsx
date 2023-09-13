import React from 'react'
import Logo from '../assets/logo/logo.gif'

export default function Nav() {
    return (
        <nav className="flex flex-row items-center justify-start w-screen h-24 px-4 bg-lightg">
            <div className="justify-start">
                <img src={Logo} className='mt-16 w-2/3' alt="" />
            </div>
            <div>
                <ul className="flex flex-row items-center justify-center">
                    <li className="">
                        <h3 className="text-3xl text-center font-arsenica ml-3 p-2">Home</h3>
                    </li> 
                    <li>
                        <h3 className="text-3xl text-center font-arsenica ml-3 p-2">About</h3>
                    </li>
                    <li>
                        <h3 className="text-3xl text-center font-arsenica ml-3 p-2">Login</h3>
                    </li>
                </ul>
            </div>
        </nav>
    )
}