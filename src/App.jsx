import { useState } from 'react'
import './App.css'
import API from './API'
import DogAPI from './DogAPI'
import CoronaAPI from './CoronaAPI'
import WeatherAPI from './WeatherAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <API/> */}
      {/* <DogAPI/> */}
      <CoronaAPI/>
      {/* <WeatherAPI/> */}
    </>
  )
}

export default App
