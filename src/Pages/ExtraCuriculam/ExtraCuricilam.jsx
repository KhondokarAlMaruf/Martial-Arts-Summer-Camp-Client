import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import yoga1 from "../../Images/Yoga.jpg";
import yoga2 from "../../Images/Yoga1.jpeg";
import yoga5 from "../../Images/yoga2.jpg";
import yoga4 from "../../Images/yoga3.jpg";
import yoga3 from "../../Images/yoga4.jpg";
import yoga6 from "../../Images/yoga5.jpg";

const ExtraCuricilam = () => {
  return (
    <div className="my-14">
      <h3 className="text-5xl text-center mb-10 text-[#5c6465]">
        Our Extra Curriculum (Yoga)
      </h3>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={yoga1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yoga2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yoga3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yoga4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yoga5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yoga6} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default ExtraCuricilam;
