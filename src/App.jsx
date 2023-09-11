// export default function App() {
//   <h1 className="text-3xl font-bold underline hover:text-cyan-800">Movie Review</h1>
// }

// The above did not work because I need a return statement!!

export default function App() {
  return (
    <div>
      <h1 className="text-3xl underline hover:text-cyan-800">Movie</h1>
      <h1 className="text-3xl underline hover:text-cyan-400">Review</h1>
    </div>
  )
}