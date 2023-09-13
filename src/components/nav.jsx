import React from 'react'

export default function Nav() {
    return (
        <nav className="flex flex-row items-center justify-center mb-8 w-screen h-24 bg-lightg">
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