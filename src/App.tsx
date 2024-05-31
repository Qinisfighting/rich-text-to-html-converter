// import { useState } from 'react'
import Converter from './components/Converter'
import Footer from './components/Footer'
import './App.css'
import { Toaster } from "@/components/ui/toaster"
// import background from './assets/background.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full text-center mx-auto pb-6 px-4 bg-no-repeat bg-fixed bg-center bg-[url('./assets/background.jpg')]">   
        <h1 className="text-3xl font-bold mx-auto pt-20">
          <span className="text-4xl text-green-700  px-4">R̶i̶c̶h̶ ̶T̶e̶x̶t̶</span> to <span className='text-4xl text-red-600 '>HTML</span> Converter 
        </h1>
        <Converter /> 
        <Toaster />
        <Footer />
   </div>
  )
}
 
export default App
