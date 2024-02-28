import React from 'react'
import video from '../../public/Images/video.mp4'

const ImgPart = () => {
  return (
    <div>

    <div className="inset-0 overflow-hidden z-0 ">
    <video className="min-w-full min-h-full object-cover" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    
    </video>
  </div>



{/* Third part */}

<div className='text-center mt-6 font-semibold cursor-pointer hover:text-red-500  '>
    <h1>WHAT'S YOUR NEXT MOVE?</h1>
</div>


<div className='flex justify-around items-center mt-8  lg:flex-row md:flex-row sm:flex-col flex-col font-semibold gap-6'>
    <h1 className='hover:border-2  hover:border-black hover:p-3 hover:rounded-sm duration-200 :ease-in-out scale-100  cursor-pointer hover:text-red-500'>CONSTRUCTION</h1>
    <h1 className='hover:border-2  hover:border-black hover:p-3 hover:rounded-sm duration-200 :ease-in-out scale-100  cursor-pointer hover:text-red-500'>REAL ESTATE</h1>
    <h1 className='hover:border-2  hover:border-black hover:p-3 hover:rounded-sm duration-200 :ease-in-out scale-100  cursor-pointer hover:text-red-500'>VACATION RENTALS</h1>
    <h1 className='hover:border-2  hover:border-black hover:p-3 hover:rounded-sm duration-200 :ease-in-out scale-100 cursor-pointer hover:text-red-500'>HOME SERVICES</h1>
</div>



    </div>
  )
}

export default ImgPart
