import React from 'react'
import { teamData } from '.'
import TeamCards from './TeamCards'
import { cardsData } from '.'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card = ({ image, title, about, review,svg }) => {
    return (
      <div className="flex flex-col justify-center items-center mx-4 rounded-xl shadow-[rgba(17,17,26,0.1)_0px_4px_16px_0px_inset,rgba(17,17,26,0.05)_0px_8px_32px_0px]">
        <div className='container flex flex-col relative justify-center items-center p-8 px-16 text-center'>
          <div className='absolute top-0 right-3'>
              {svg}
          </div>
          <img className='w-[100px] h-[100px] object-cover rounded-full' src={image} alt="" />
          <div className='my-2'>
            <h3 className="text-xl font-bold text-[#da0134]">{title}</h3>
            <h2 className='font-bold'>{about}</h2>
          </div>
          <p>{review}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='bg-gray-100 my-10'>
        <div className='flex flex-col justify-center items-center pt-10 gap-4'>
          <h1 className='text-3xl font-bold text-black'>Our Dedicated Team</h1>
          <p className='w-[550px] text-center text-[#707070] text-[18px]'>
            Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center h-[450px]">
          {teamData.map((card, index) => (
            <TeamCards
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pt-10 gap-4'>
        <h1 className='text-3xl font-bold text-black'>What Client Says</h1>
        <p className='w-[550px] text-center text-[#707070] text-[18px]'>
          Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.
        </p>
      </div>

      <div className=" p-16 mx-auto">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-2">
              <Card
                svg={card.svgIcon}
                image={card.imageUrl}
                title={card.name}
                about={card.role}
                review={card.about}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Team
