import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from '@mui/material'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="testimonial-card">
                        <img className="profile-img-testimonial" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="user-testimonial-image" />
                        <Typography variant="h6" className="testimonial-description">
                            Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                        </Typography>
                        <Typography variant="subtitle2" className="testimonial-name">Alicia Tyler</Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <img className="profile-img-testimonial" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="user-testimonial-image" />
                        <Typography variant="h6" className="testimonial-description">
                            Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                        </Typography>
                        <Typography variant="subtitle2" className="testimonial-name">Alicia Tyler</Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <img className="profile-img-testimonial" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="user-testimonial-image" />
                        <Typography variant="h6" className="testimonial-description">
                            Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                        </Typography>
                        <Typography variant="subtitle2" className="testimonial-name">Alicia Tyler</Typography>
                    </div>
                </SwiperSlide>

            </Swiper >
        </>
    );
}
