
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import slide1 from './../assets/01.jpg';
import slide2 from './../assets/02.jpg';
import slide3 from './../assets/03.jpg';

const Header = () => {
    return (
        <div className='mx-3'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-xl  animate__pulse animate__animated ">
                <SwiperSlide><img className="w-full h-[350px] " src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-[350px]" src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-[350px]" src={slide3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;