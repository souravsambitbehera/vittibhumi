import React from 'react'
import MainProjectShow from './MainProjectShow'
import { Link } from 'react-router-dom'





const ProjectBapuji = () => {
    const images = [
        {
            id:1,
            img:"project2/Bapuji-Height-1.jpeg.jpg",
            desc:""
        },
        {
            id:2,
            img:"project2/Bapuji-Height-2.jpeg.jpg",
            desc:""
        },{    
            id:3,
            img:"project2/Bapuji-Height-3.jpeg.jpg",
            desc:""
        },{
            id:4,
            img:"project2/Bapuji-Height-4.jpeg.jpg",
            desc:""
        },{  
            id:5,
            img:"project2/Bapuji-Height-5.jpeg.jpg",
            desc:""
        },{
            id:6,
            img:"project2/Bapuji-Height-6.jpeg.jpg",
            desc:""
        },{     
            id:7,  
            img:"project2/Bapuji-Height-8.jpeg.jpg",
            desc:""
        },{
            id:8,
            img:"project2/Bapuji-Height-9.jpeg.jpg",
            desc:""
        },
    ]
  return (
    <div className='pt-6 text-center text-lg text-red-700 px-2 md:pb-9 font-bold'>
      <p className='pb-5'>Project Bapuji Height</p>
      <MainProjectShow images={images} />
      <p className='pt-8 md:hidden'></p>

      <button className='bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded'><Link to="/">Go Back</Link></button>
      {/* Add more Project components here */}
    </div>
  )
}

export default ProjectBapuji