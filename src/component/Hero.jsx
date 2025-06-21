import React from 'react'

const Hero = () => {
  return (
    <div className="bg-pink-300 flex items-center justify-between flex-col px-1 md:flex-row py-25">
    <div className="md: w-1/2">
    <h1 className=" text-pink-500 text-shadow-md text-8xl text-justify  font-bold mb-4">DIPPIN' DONOUT</h1>
    <p1 className="text-black mx-5 text-shadow-md">Dive into our world of deliciously dipped creations.</p1>
    </div>

    
   
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400/50 rounded-full blur-xl transform rotate-12 z-0"></div>
      {/*<div className="absolute -bottom-20 -right-20 w-96 h-100 bg-pink-400/50 rounded-full blur-xl transform -rotate-12 z-0"></div>*/  }
    
    {/* Donut Image with Background Overlay */}
      <div className="relative z-10">
        <div className="absolute top-18 -left-68 w-70 h-80 bg-pink-400 rounded-b-full blur-lg z-0"></div>
        <img
          src="donuts.png"
          alt="Donut"
          className="w-77 h-auto -left-60 relative z-5 "
        />
        <div className="absolute -top-40 ">
        <img
          src="donuts2.png"
          alt="Donut"
          className="w-65 h-90 -left-50 relative z-5 rounded-full blur-lg  p-10 m-5"
        />
        </div>
      </div>

    </div>

    

  )
}

export default Hero
