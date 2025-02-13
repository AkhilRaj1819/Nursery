import { useState } from 'react'
import './App.css'
import Card from './Card'
import data from './data.json'

function App() {
  const [plants, setPlants] = useState(data)

  return (
    <>
      <div>
        {plants.map((ele) => (
          <Card plant = {ele}/>
        ))}
      </div>
    </>
  )
}

export default App
