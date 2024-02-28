import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import img1 from '../../public/Images/img1.jpg'
import img2 from '../../public/Images/img2.jpg'
import img3 from '../../public/Images/img3.jpeg'
import img4 from '../../public/Images/img4.jpg'
import img5 from '../../public/Images/img5.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Swiperimg = () => {
  return (
    <>
 

   
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} // Setting navigation to false removes the navigation arrows
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    
        
      <SwiperSlide><div className="swiper-slide  lg:flex-row md:flex-row flex-col flex justify-evenly mt-24 items-center">
          <div>
        <img src={img2} alt="" className='w-96 ' /> 
          </div>
        <div>
          <h1 className=' font-semibold lg:text-3xl text-2xl text-center lg:text-start font-serif'>REAL ESTATE</h1>
      <p className='lg:w-96 w-60 md:w-72 mt-10 font-medium text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum sunt suscipit libero, quam sint est commodi ut eveniet officia vitae hic, velit odio, maxime aut porro sit nemo facere.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button className='border-2  border-black  hover:text-red-500 font-mono  lg:px-4 px-2  lg:py-3 py-1 text-lg mt-5 hover:rounded-sm '>VIEW YOUR PORTFOLIO</button>
      </div>
      </div>
    
      </SwiperSlide>
        



        
      <SwiperSlide><div className="swiper-slide  lg:flex-row md:flex-row flex-col flex justify-evenly mt-24 items-center">
          <div>
        <img src={img3} alt="" className='w-96 ' /> 
          </div>
        <div>
          <h1 className=' font-semibold lg:text-3xl text-2xl text-center lg:text-start font-serif'>VACATION RENTALS</h1>
      <p className='lg:w-96 w-60 md:w-72 mt-10 font-medium text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum sunt suscipit libero, quam sint est commodi ut eveniet officia vitae hic, velit odio, maxime aut porro sit nemo facere.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button className='border-2  border-black  hover:text-red-500 font-mono  lg:px-4 px-2  lg:py-3 py-1 text-lg mt-5 hover:rounded-sm '>VIEW YOUR PORTFOLIO</button>
      </div>
      </div>
    
      </SwiperSlide>
        




        
      <SwiperSlide><div className="swiper-slide  lg:flex-row md:flex-row flex-col flex justify-evenly mt-24 items-center">
          <div>
        <img src={img4} alt="" className='w-96 ' /> 
          </div>
        <div>
          <h1 className=' font-semibold lg:text-3xl text-2xl text-center lg:text-start font-serif'>HOME SERVICES</h1>
      <p className='lg:w-96 w-60 md:w-72 mt-10 font-medium text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum sunt suscipit libero, quam sint est commodi ut eveniet officia vitae hic, velit odio, maxime aut porro sit nemo facere.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button className='border-2  border-black  hover:text-red-500 font-mono  lg:px-4 px-2  lg:py-3 py-1 text-lg mt-5 hover:rounded-sm '>VIEW YOUR PORTFOLIO</button>
      </div>
      </div>
    
      </SwiperSlide>
        



        
      <SwiperSlide><div className="swiper-slide  lg:flex-row md:flex-row flex-col flex justify-evenly mt-24 items-center">
          <div>
        <img src={img5} alt="" className='w-96 ' /> 
          </div>
        <div>
          <h1 className=' font-semibold lg:text-3xl text-2xl text-center lg:text-start font-serif'>CONSTRUCTION</h1>
      <p className='lg:w-96 w-60 md:w-72 mt-10 font-medium text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum sunt suscipit libero, quam sint est commodi ut eveniet officia vitae hic, velit odio, maxime aut porro sit nemo facere.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button className='border-2  border-black  hover:text-red-500 font-mono  lg:px-4 px-2  lg:py-3 py-1 text-lg mt-5 hover:rounded-sm '>VIEW YOUR PORTFOLIO</button>
      </div>
      </div>
    
      </SwiperSlide>




      
        
   



      
        


      </Swiper>
   
    </>
  )
}

export default Swiperimg;