// import { useState } from 'react'
import Converter from './components/Converter'
import Footer from './components/Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='relative flex flex-col w-full h-full text-center'>
      <main className='w-full h-screen mt-20'>
        <h1 className="text-3xl font-bold mx-auto">
          Rich Text To HTML Converter
        </h1>
        <Converter /> 
      </main>
      <div>
        <Footer />
      </div>
  </div>
  )
}
 
export default App
