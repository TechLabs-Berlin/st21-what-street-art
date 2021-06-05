import React, { useRef, useState } from "react";
import { IonContent, IonPage, IonSlides, IonSlide, IonText } from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react";
import ExploreContainer from '../components/ExploreContainer';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Header from '../components/Header';
import './Galleries.css';
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export const Galleries: React.FC = () => {
  const mySlides = useRef(null);

  return (
  <IonPage>
    <Header />
      <IonContent>
        <div>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper1">
          <SwiperSlide> <img src="https://velvetescape.com/wp-content/uploads/2018/02/IMG_4081-1280x920.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://hierdadort.de/wp-content/uploads/2020/05/P1000650-Cover_1800_Vogel.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0092310228h-800x517.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://awesomeberlin.net/wp-content/uploads/2015/01/IMG_1704.jpg" /></SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
        <div>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper2">
          <SwiperSlide> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wandbild_Portrait_George_Floyd_von_Eme_Street_Art_im_Mauerpark_%28Berlin%29.jpg/2560px-Wandbild_Portrait_George_Floyd_von_Eme_Street_Art_im_Mauerpark_%28Berlin%29.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2U4NjdhZjhpZm5icDd5YTUwN2NhM2JlNWUwYzQyZTBiOTVfMTEyMzExNjNfMTAxNTYwNDczNDkwOTA0MzRfNzgxMjkzNzE3NjA4ODIyMDAxMF9vLmpwZyJdLFsicCIsInRodW1iIiwiNTgweDU4MCMiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/11231163_10156047349090434_7812937176088220010_o.jpg" /></SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
        <div>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper3">
          <SwiperSlide>Near You</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
    </IonContent>
  </IonPage>
  );
};

export default Galleries;
