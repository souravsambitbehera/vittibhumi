import React from 'react'
import Project1 from '../Components/project1'
import Project2 from '../Components/project2'
import ContactComponent from '../Components/ContactComponent'

const Gallery = () => {
  return (
    <div>
      <div className='pt-6 text-center text-lg text-red-700 px-2 md:pb-9 font-bold'>
      <p className='pb-5'>BAPUJI HEIGHT</p>
      
      <p className='pt-2 md:hidden'></p>
      <Project1 />
     
    </div>
    <div className='pt-5 md:pt-0 text-center text-lg text-red-700 px-2 md:pb-9 font-bold'>
      <p className=''>AUROBINDO-RESIDENCY</p>
      
      <p className='pt-2 md:hidden'></p>
      <Project2 />
     
    </div>
      <ContactComponent />
    </div>
  )
}

export default Gallery