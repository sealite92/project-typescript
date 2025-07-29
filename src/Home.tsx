

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center flex-col justify-center">
    <h1 className="text-center text-4xl">Explore My typescript projects</h1> 
    <div className="flex flex-col items-center mt-8 space-y-4 text-lg">
        <a href="/pokemon" className="text-blue-500 hover:underline">Go to Pokemon App</a>
        <a href="/todo" className="text-blue-500 hover:underline">Go to Drang and drop to-do App</a>
    </div>
    </div>
  )
}
