import React, { useState } from 'react'
import Project1 from '../Components/project1'
import Project2 from '../Components/project2'

const Project = () => {
  const [active,setActive] = useState(true)
  return (
    <div className='pt-6 text-center text-lg text-red-700 px-2 md:pb-9 font-bold'>
      <p className='pb-5'>OUR COMPLETED PROJECT {active?"BAPUJI HEIGHT" : "AUROBINDO-RESIDENCY"}</p>
      {
        active? <Project1/> : <Project2 />
      }
      <p className='pt-8 md:hidden'></p>
      <button className='bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded' onClick={()=>{setActive(!active)}}>SHOW {active?"AUROBINDO-RESIDENCY":"BAPUJI HEIGHT"} PROJECT</button>
     
    </div>
  )
}

export default Project