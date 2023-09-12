import React from 'react'

export default function Nav() {
    return (
        <nav className="flex flex-row mb-8 w-screen h-56 bg-lightg">
            <div>
                <ul className="flex flex-row">
                    <li className="">
                        <h3 className="text-xl text-center font-arsenica p-2">Home</h3>
                        <h3 className="text-xl text-center font-arsenica p-2">About</h3>
                        <h3 className="text-xl text-center font-arsenica p-2">Login</h3>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}