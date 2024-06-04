import React from 'react'
import Navbar from './Navbar'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import bannerLeft from "../images/bannerLeft.png"
import { cards } from './index.jsx';
import { List } from './index.jsx';
import './App.css'



const Home = () => {
   
    console.log(cards)
    return (
        <div>
            < Navbar />
            <section className="flex flex-col w-5/6 mx-auto gap-5 mt-24 md:flex-row items-center justify-between p-8">
                {/* Left Side Image */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img src={bannerLeft} alt="Placeholder" className="w-full h-auto" />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                    <h2 className="text-xl font-semibold">We Provide Best Services</h2>
                    <h1 className="text-4xl font-bold">Privately Owned <span className='text-[#da0134] text-5xl'>Moving Company</span></h1>
                    <p className="text-lg">Separated they live an Bookmarks grove right at the coast of the most Semantics, a large language. sleep a little bit longer and forget all this nonsense", he thought, but that was something.</p>

                    <div className="flex space-x-4">
                        <button className="flex justify-start items-center gap-1 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-[#da0134] transition duration-200">
                            <IoCallOutline />
                            +1-404-555-0154
                        </button>
                        <button className="flex justify-start items-center gap-1 px-6 py-2 bg-[#da0134] text-white font-semibold rounded hover:bg-black transition duration-200">
                            <MdOutlineEmail />
                            info@Mover.Com
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex  gap-3 bg-[#da0134] mt-10 p-4">
                {cards.map((data, index) => (
                    <div
                        key={index}
                        className="w-5/6 sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)] h-[250px] flex flex-col justify-center items-center transition-transform duration-200 hover:translate-y-2"
                    >
                        <div className=" bg-white flex flex-col justify-center items-center text-center p-4 w-10/12 h-[200px] relative group rounded-[10px]">
                            <img src={data.image} alt={data.p} className="max-w-full max-h-[150px] mb-4" />
                            <h1 className="text-xl font-semibold mb-2 group-hover:text-[#da0134]">{data.p}</h1>
                            <p className="text-base">{data.Description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-3 bg-white mt-10 p-4">
                {List.map((item, index) => (
                    <div
                        key={index}
                        className="w-5/6 sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)] h-[250px] flex flex-col justify-center items-center transition-transform duration-200 hover:translate-y-2"
                    >
                        <div className="border-4 bg-white flex flex-col justify-center items-center text-center p-4 w-10/12 h-[200px] relative group rounded-[10px] hover:border-[#da0134] transition-all duration-300">
                            <div className="relative w-full h-[150px] mb-4">
                                <img src={item.image} alt={item.p} className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:rotate-y-180" />
                            </div>
                            <h1 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#da0134]">{item.p}</h1>
                            <p className="text-base">{item.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Home
