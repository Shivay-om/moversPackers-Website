import React, { useState } from 'react'
import { ProcessList } from './index.jsx'

const Process = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-10 gap-4'>
        <h1 className='text-3xl font-bold text-black'>Our Process</h1>
        <p className='w-[550px] text-center text-[#707070] text-[18px]'>Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.</p>
      </div>

      <div className='flex justify-between w-[90%] gap-8 mx-auto mt-4 mb-4 items-center'>
        {ProcessList.map((card, index) => {
          const IconComponent = card.image;
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };

          return (
            <div
              key={index}
              className='flex flex-col p-4 px-8 text-center justify-center items-center gap-4 border rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_5px_0px,rgba(0,0,0,0.1)_0px_0px_1px_0px]'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div
                className={`h-[80px] w-[80px] flex justify-center items-center m-3 rounded-full border transition-colors duration-300 shadow-[rgba(17,17,26,0.1)_0px_4px_16px_0px_inset,rgba(17,17,26,0.05)_0px_8px_32px_0px] ${isHovered ? 'bg-[#da0134]' : 'bg-transparent'}`}
              >
                <IconComponent
                  fillColor={isHovered ? "#fff" : "#da0134"}
                  className={`icon transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#707070]'}`}
                />
              </div>
              <h1 className='text-xl font-bold'>{card.title}</h1>
              <p className='text-[#707070]'>{card.Description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Process
