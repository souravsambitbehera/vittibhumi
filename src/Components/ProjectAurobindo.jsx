import React from 'react'
import MainProjectShow from './MainProjectShow'
import { Link } from 'react-router-dom'





const ProjectAurobindo = () => {
    const images = [
        {
            id:1,
            img:"project1/Aurobindo-Residency1.png",
            desc:""
        },
        {
            id:2,
            img:"project1/Aurobindo-Residency2.png",
            desc:""
        },{
            id:3,
            img:"project1/Aurobindo-Residency3.png",
            desc:""
        },{
            id:4,
            img:"project1/Aurobindo-Residency4.png",
            desc:""
        },{
            id:5,
            img:"project1/Aurobindo-Residency5.png",
            desc:""
        },{
            id:6,
            img:"project1/Aurobindo-Residency6.png",
            desc:""
        },{
            id:7,
            img:"project1/Aurobindo-Residency-GPS.png",
            desc:""
        },{
            id:8,
            img:"project1/Aurobindo-Residency-airial-view.png",
            desc:""
        },
    ]
  return (
    <div className='pt-6 text-center text-lg text-red-700 px-2 md:pb-9 font-bold'>
      <p className='pb-5'>Project Aurobindo Residency</p>
      <MainProjectShow images={images} />
      <p className='pt-8 md:hidden'></p>

      <button className='bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded'><Link to="/">Go Back</Link></button>
      {/* Add more Project components here */}
    </div>
  )
}

export default ProjectAurobindo