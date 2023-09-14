

export default function Footer() {
    return (
        <div className="w-full h-24 bg-lightg">
            <footer className="">
                <div>
                    <ul className="flex flex-row items-center justify-center">
                        <li className="">
                            <h3 className="hover:text-secondary hover:ease-in-out mt-8 duration-500 text-3xl text-center font-arsenica ml-3 p-2">Home</h3>
                        </li> 
                        <li>
                            <h3 className="hover:text-secondary hover:ease-in-out mt-8 duration-500 text-3xl text-center font-arsenica ml-3 p-2">About</h3>
                        </li>
                        <li>
                            <h3 className="hover:text-secondary hover:ease-in-out mt-8 duration-500 text-3xl text-center font-arsenica ml-3 p-2">Login</h3>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}