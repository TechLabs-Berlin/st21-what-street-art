import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./AssetSlider.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Artwork } from "../models/artwork";



SwiperCore.use([Pagination]);

interface Props {
  title: string;
  data: Artwork[];
}

export const AssetSlider: React.FC<Props> = (props) => {
  const { title, data } = props;

  return (
    <div>
      <h4>{title}</h4>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={-10}
          loop={false}
          className="mySwiper1"
        >
          {data.map((item) => (
            <SwiperSlide>
              <img src="{{href}}" />
              <div className="info-block">
                <text className="image-title">{item.likes}</text>
                <br></br>
                <text className="image-artist">{item.location.address}</text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AssetSlider;
