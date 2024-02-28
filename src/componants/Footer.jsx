import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row mb-10  mt-32 lg:mx-28 mx-5'>

      {/* Left Section */}
      <div className='flex flex-col gap-1 lg:items-start items-center'>
        <img src='/Images/logo.png' alt='Logo' className=' h-24 mb-4 w-40 mx-20 lg:mx-0 md:mx-20 sm:mx-32 ' />
        <h1 className='text-center lg:text-left text-sm lg:text-base w-80 font-medium mb-4'>
          Postmaster, Post Office ASANSOL (HEAD OFFICE), BARDHAMAN, WEST BENGAL (WB), India (IN), Pin Code:- 713301
          <br/>
          0987654321
          <br/>
          abc@gmail.com
        </h1>
      </div>

      {/* Center Section */}
      <div className='lg:w-1/3 flex flex-col gap-1 items-center lg:mx-24 mx-2 cursor-pointer'>
        <h1 className='hover:text-blue-600 hover:font-semibold duration-150'>ABOUT</h1>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>BLOG</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>CONSTRUCTION</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>REAL ESTATE</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>VACATION RENTALS</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>HOME SERVICES</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150'>CONTACT</p>
        <p className='hover:text-blue-600 hover:font-semibold duration-150 mb-5'>SITEMAP</p>
      </div>

      {/* Right Section */}
      <div className=''>
        <h1 className='mb-4 font-medium text-sm text-center lg:text-start'>Have Questions? We'd love to help!</h1>
       

        <div className=''>
          <input className='rounded border-2 w-full  border-black text-center mb-2 lg:mb-0' type='text' placeholder='First Name *'/><br />
          <input className='rounded border-2 mt-4 w-full  border-black text-center mb-2 lg:mb-0' type='text' placeholder='Last Name *'/>
        </div>

        <input className='rounded border-2 w-full border-black mt-4 text-center mb-2' type='text' placeholder='Email Address *'/>
        <input className='rounded border-2 w-full border-black text-center mb-2' type='text' placeholder='Message *'/>

        <button className='rounded-lg border-2 w-full lg:w-32 pt-2 pb-2 flex justify-center  lg:mx-20 bg-green-500 font-semibold hover:bg-red-500 hover:text-white duration-150'>
          LET'S TALK
        </button>
      </div>

    </div>
  );
};

export default Footer;



























