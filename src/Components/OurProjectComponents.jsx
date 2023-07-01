import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const ImageCard = ({ imageSrc, title, location }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-4 flex flex-col justify-center items-center">
      <div className="flex justify-center px-9">
        <img src={imageSrc} alt="Card" className="w-80 h-80 object-cover hover:scale-105 transition-all duration-300 cursor-pointer" />
      </div>
      <div className="text-center mt-4 pt-6 text-lg text-red-700 px-2 md:pb-9 font-bold">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        {/* <p className="text-gray-700 text-base">{location}</p>?? */}
        <button className='bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded'><Link to={location}>See More Photos</Link></button>
      </div>
    </div>
  );
};

const CardFunctionality = () => {
  const imageCards = [
    {
      id: 1,
      imageSrc: 'project1/Aurobindo-Residency-Front.png',
      title: 'AUROBINDO-RESIDENCY',
      location: 'project1',
    },
    {
      id: 2,
      imageSrc: 'project2/Bapuji-Heoght-CoverImage.jpeg.jpg',
      title: 'BAPUJI-HEIGHT',
      location: 'project2',
    },
    {
      id: 3,
      imageSrc: 'project2/Bapuji-Heoght-CoverImage.jpeg.jpg',
      title: 'BAPUJI-HEIGHT',
      location: 'project1',
    },
    
   
    // Add more imageCards as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 p-4">
      <h3 className="text-center text-2xl font-bold mb-4 text-rose-700">OUR PROJECTS</h3>
      <Slider {...sliderSettings}>
        {imageCards.map((card) => (
          <div key={card.id}>
            <ImageCard
              imageSrc={card.imageSrc}
              title={card.title}
              location={card.location}
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CardFunctionality;
