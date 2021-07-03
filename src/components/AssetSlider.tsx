import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./AssetSlider.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Artwork } from "../models/artwork";
import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";

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
          slidesPerView={2.5}
          spaceBetween={0}
          loop={false}
          className="mySwiper1"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <IonCard className="card">
                  <div className="img-wrapper">
                  <img className="images" src={item.image} alt="" />
                  </div>
                  <IonCardTitle className="name-artwork">
                    {item.title}
                    </IonCardTitle>
                  <IonCardSubtitle className="name-artist">
                    {item.artist}
                    </IonCardSubtitle>
                </IonCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AssetSlider;
