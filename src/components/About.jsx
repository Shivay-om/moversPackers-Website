import React from 'react'
import aboutimg from "../images/about-img.png"

const About = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-10 gap-4   '>
        <h1 className='text-3xl font-bold text-black'>Welcome To Mover & Co</h1>
        <p className=' w-[550px] text-center text-[#707070] text-[18px]'>Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.</p>
      </div>

      <div className="flex flex-col relative gap-4 w-5/6 mx-auto md:flex-row items-center bg-white p-8">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl w-[400px] font-bold mb-4">We Are <span className='text-[#da0134]'>Residential Mover</span> Company</h1>
          <p className="text-lg mb-4">Separated they live an Bookmarks grove right at the coast of the most Semantics, a large language. sleep a little bit longer and forget all this nonsense", he thought, but that was something. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            <br />
            Separated they live an Bookmarks grove right at the coast of the most Semantics, a large language. sleep a little bit longer and forget all this nonsense", he thought, but that was something.</p>
          <button className="px-6 py-2 bg-[#da0134]  text-white rounded hover:bg-black  transition-colors duration-300">Read More</button>
        </div>

        {/* Right Side */}
        <div className="relative md:w-1/2 w-full h-64 md:h-auto">
          <img src={aboutimg} alt="Example" className="w-full h-full object-cover" />

        </div>
        <div className="absolute w-[350px] bottom-[45px]  right-[25px] bg-[#da0134] rounded-lg p-3 text-white font-bold text-2xl text-center">
          More Than 350+ Projects Were Completed.
        </div>
      </div>
    </div>
  )
}

export default About
