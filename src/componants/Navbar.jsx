import React from 'react'

const Navbar = () => {
  return (
    <div>

    <div className='flex justify-between mt-6  text-sm font-medium text-gray-600 lg:text-xl  items-center mx-10 cursor-pointer bg-white   lg:flex-row md:flex-row sm:flex-row flex-col gap-3 '>
        <div>
            <h1>Sign IN / Sign Up</h1>
            <h1 className='text-center lg:text-start'>0987654321</h1>
        </div>
        <div className='text-center'>
         <h1>LUXURY </h1>   
         <h1>SIMPLIFIED</h1>
        </div>
        <div className='flex gap-5'>
            <h1>ABOUT</h1>
            <h1>BLOG</h1>

        </div>
    </div>

{/* second part */}
<div className='bg-pink-100 mt-2 p-4 gap-8  cursor-pointer font-semibold w-full flex justify-center items-center lg:flex-row md:flex-row sm:flex-col flex-col hover:bg-green-200 '>
    <h1 className='hover:text-red-500'>CONSTRUCTION</h1>
    <h1 className='hover:text-red-500'>REAL ESTATE</h1>
    <h1 className='hover:text-red-500'>VACATION RENTALS</h1>
    <h1 className='hover:text-red-500'>HOME SERVICES</h1>
</div>



    </div>
  )
}

export default Navbar
