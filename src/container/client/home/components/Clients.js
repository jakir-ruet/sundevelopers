import { Component } from "react";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import bdgov from '../../../../assets/img/Clients/bdgov.png';
import cdi from '../../../../assets/img/Clients/cdi.png';
import crowdv from '../../../../assets/img/Clients/crowdv.png';
import dwc from '../../../../assets/img/Clients/dwc.png';
import rcc from '../../../../assets/img/Clients/rcc.png';
import rda from '../../../../assets/img/Clients/rda.png';
SwiperCore.use([Pagination]);

// let mySwiper = new Swiper('.swiper-container', {
//     autoplay: {
//         delay: 5000,
//     },
// });

class Clients extends Component{
    render() {
        return(
            <div className="container mb-4">
                <div className="section-header">
                    <h2 className="mt-3">Our Happy Clients:</h2>
                    <p style={{ textAlign: "justify" }}>
                        We boast of our humungous list of clients, based on the markets of Bangladesh, USA, UK, Saudi Arabia, United Arab Emirates and many others. They are some of the established names in their specific sphere of work. Some of our valuable clients are tabulated below:
                    </p>
                </div>
                <Swiper slidesPerView={4} spaceBetween={15} freeMode={true} pagination={{ "clickable": true }} className="mySwiper">
                    <SwiperSlide>
                        <img className="img-fluid" src={bdgov} alt="bdgov"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid" src={rda} alt="rda"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid" src={dwc} alt="dwc"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid" src={cdi} alt="cdi"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid" src={crowdv} alt="crowdv"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid" src={rcc} alt="rcc"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}

export default Clients;