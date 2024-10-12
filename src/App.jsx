import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import CoffeeCard from './CoffeeCard'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees ]= useState(loadedCoffees.slice(0, 6))
  return (
    <>
    
        <h1 className='font-bold m-5 text-3xl md:text-4xl lg:text-6xl'>Tourists Spots</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee=> <CoffeeCard
          key={coffee._id}
           coffee={coffee}
          setCoffees={setCoffees}
           coffees={coffees}
          >          
          </CoffeeCard>)
        }
      </div>
      
    </>
  )
}

export default App
