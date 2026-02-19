import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, } from "swiper/modules";
import customerData from "../../data/customerData.ts";
import CommentItem from "./CommentItem.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CommentSlider() {
    return (
        <div className={"w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1000px]"}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                className="swiper-container"
            >
                {
                    customerData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CommentItem {...item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default CommentSlider;