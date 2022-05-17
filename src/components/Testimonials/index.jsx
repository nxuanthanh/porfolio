import React from 'react';
import './testimonials.scss';
import { data } from 'constants';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';
function Testimonials(props) {
  return (
    <section id="testimonials">
      <h5>Personal Details and Soft Skills</h5>
      <h2>Some interesting things</h2>
      <div className="cv-bubble"></div>
      <Swiper
        className="container testimonials__container"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt="avatar" />
            </div>
            <h5>{item.title}</h5>
            <div className="cv__content">{item.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

Testimonials.propTypes = {};

export default Testimonials;
