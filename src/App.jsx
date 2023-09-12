import Nav from './components/nav'
// export default function App() {
//   <h1 className="text-3xl font-bold underline hover:text-cyan-800">Movie Review</h1>
// }

// The above did not work because I need a return statement!!

export default function App() {
  return (
    <>
      <Nav></Nav>
      <div className="m-28 p-8 flex flex-col items-center justify-center w-screen h-screen bg-primary">
        <div className="bg-secondary mt-8">
        <div className="flex flex-row m-10 p-10">
          <h1 className="text-3xl font-eldwin font-extrabold p-8 underline text-primary hover:text-limez">Movie</h1>
          <h1 className="text-3xl font-eldwin font-extrabold p-8 underline text-tertiary hover:text-cyan-400">Review</h1>
        </div>
        <div className="text-left p-8">
          <h3 className="text-2xl font-arsenica font-extrabold text-center p-2">Header</h3>
          <p className="font-moret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="text-left p-8">
          <h3 className="text-2xl font-moret font-extrabold text-center p-2">Header</h3>
          <p className="font-moret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="text-left p-8">
          <h3 className="text-2xl font-moret font-extrabold text-center p-2">Header</h3>
          <p className="font-moret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="text-left p-8">
          <h3 className="text-2xl font-moret font-extrabold text-center p-2">Header</h3>
          <p className="font-moret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
      </div>  
    </>
  )
}