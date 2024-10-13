import './home.scss'

import Pic1 from "@/assets/images/1.jpg";

import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  const NavigationLinks = [
    {
      title: "Products",
      path: "/products",
      isVisible: true,
    }
  ]
  const [direction, setDirection] = useState(-100)

    function handleDirection() {
        setDirection(direction*(-1));
    }

  return (
    <div className="homepage">

      <motion.div 
      className="homeintro"
      initial={{  scale: 0.9, opacity: 0 }}
      animate = {{scale: 1, opacity: 1}}
      transition={{ duration: 1 }}
      >
        <h1>Exporting high quality, sustainable and eco friendly products since 1996.</h1>
        <img src="https://i.postimg.cc/W1mVHVVJ/DSC00804.jpg" alt="Picture" />
      </motion.div>

      <motion.div 
      className="homeourstory"
      initial={{  translateX: direction, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      exit={{  translateX: direction, opacity: 0 }}
      transition={{ duration: 1 }}
      onViewportLeave={handleDirection}
      >
        <h1>Our Story</h1>
        <p>
        In 1990, we established our company, Shaktirugs, specializing in the domestic supply of rugs. Over the years, we expanded our operations to include exports to various countries, primarily the USA.
        </p>
        <p>Since 2005, our company has diversified to manufacture and export a wide range of storage items, including Crunch cans, bags, and wall and pocket hangings. We proudly serve clients in the USA, Norway, Canada, Sweden, and other Western and European markets.</p>
        <p>In 2019, we launched a new venture, Crescent Export, dedicated to the export of our storage solutions.</p>
        <p>We are committed to delivering high-quality, eco-friendly, sustainable, and affordable products, ensuring timely delivery and customer satisfaction as our top priority.</p>
        {/* <p>Our main motive is to keep our customers happy.</p> */}
        {/* <div className="enquirebutton"><motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="" target='_top'>ENQUIRE</motion.a></div> */}
      </motion.div>

      <Link to="/Products">
      <div className="homeproducts">
        <h1>Products</h1>
      </div>
      </Link>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // Default value for larger screens
        breakpoints={{
          // When the screen width is >= 760px, use this setting
          760: {
            slidesPerView: 3, // Or any number you want for larger screens
          },
          // When the screen width is <= 759px, use this setting
          0: {
            slidesPerView: 1, // Number of slides per view for smaller screens
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src={Pic1} alt="Got to Product page" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/VsTzS445/DSC00639.jpg" alt="Picture 1" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/9QHVbM6h/DSC00653.jpg" alt="Picture 1" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/TPC6Tcpd/DSC00655.jpg" alt="Picture 1" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/cHCNC8nQ/DSC00681.jpg" alt="Picture 1" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/zXg8TWP7/DSC00700.jpg" alt="Picture 1" /></Link></SwiperSlide>       
        <SwiperSlide><Link to="/Products"><img className='homeproductspics' src="https://i.postimg.cc/W1mVHVVJ/DSC00804.jpg" alt="Picture 1" /></Link></SwiperSlide>
      </Swiper>


    </div>
  )
}
export default Home