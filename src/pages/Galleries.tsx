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


{/*Popular*/}
      <h4>Popular</h4>
      <div>
        <Swiper slidesPerView={2} spaceBetween={-10} loop={true} className="mySwiper1">
          <SwiperSlide> 
            <img src="https://velvetescape.com/wp-content/uploads/2018/02/IMG_4081-1280x920.jpg" />
            <div className="info-block">
            <text className="image-title">Crazy Graffiti</text><br></br><text className="image-artist">Doofus</text>
            </div>
            </SwiperSlide>

          <SwiperSlide> 
            <img src="https://hierdadort.de/wp-content/uploads/2020/05/P1000650-Cover_1800_Vogel.jpg" />
            <div className="info-block">
              <text className="image-title">Robot Dodo Bird or Something</text><br></br><text className="image-artist">Somedude</text>
            </div>
          </SwiperSlide>
          
          <SwiperSlide> 
            <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0092310228h-800x517.jpg" />
            <div className="info-block">
            <text className="image-title">Look a Building</text><br></br><text className="image-artist">Alright</text>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <img src="https://awesomeberlin.net/wp-content/uploads/2015/01/IMG_1704.jpg" />
            <div className="info-block">
            <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>       
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 5
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 6
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 7
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 8
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 9
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>



{/*Recently Added*/}
        <h4>Recently Added</h4>
        <div>
        <Swiper slidesPerView={2} spaceBetween={-10} loop={true} className="mySwiper1">
          <SwiperSlide> 
            <img src="https://velvetescape.com/wp-content/uploads/2018/02/IMG_4081-1280x920.jpg" />
            <div className="info-block">
            <text className="image-title">Crazy Graffiti</text><br></br><text className="image-artist">Doofus</text>
            </div>
            </SwiperSlide>

          <SwiperSlide> 
            <img src="https://hierdadort.de/wp-content/uploads/2020/05/P1000650-Cover_1800_Vogel.jpg" />
            <div className="info-block">
              <text className="image-title">Robot Dodo Bird or Something</text><br></br><text className="image-artist">Somedude</text>
            </div>
          </SwiperSlide>
          
          <SwiperSlide> 
            <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0092310228h-800x517.jpg" />
            <div className="info-block">
            <text className="image-title">Look a Building</text><br></br><text className="image-artist">Alright</text>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <img src="https://awesomeberlin.net/wp-content/uploads/2015/01/IMG_1704.jpg" />
            <div className="info-block">
            <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>       
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 5
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 6
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 7
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 8
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 9
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>



{/*Near You*/}
      <h4>Near You</h4>
      <div>
        <Swiper slidesPerView={2} spaceBetween={-10} loop={true} className="mySwiper1">
          <SwiperSlide> 
            <img src="https://velvetescape.com/wp-content/uploads/2018/02/IMG_4081-1280x920.jpg" />
            <div className="info-block">
            <text className="image-title">Crazy Graffiti</text><br></br><text className="image-artist">Doofus</text>
            </div>
            </SwiperSlide>

          <SwiperSlide> 
            <img src="https://hierdadort.de/wp-content/uploads/2020/05/P1000650-Cover_1800_Vogel.jpg" />
            <div className="info-block">
              <text className="image-title">Robot Dodo Bird or Something</text><br></br><text className="image-artist">Somedude</text>
            </div>
          </SwiperSlide>
          
          <SwiperSlide> 
            <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0092310228h-800x517.jpg" />
            <div className="info-block">
            <text className="image-title">Look a Building</text><br></br><text className="image-artist">Alright</text>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <img src="https://awesomeberlin.net/wp-content/uploads/2015/01/IMG_1704.jpg" />
            <div className="info-block">
            <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>       
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 5
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 6
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 7
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 8
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>

          <SwiperSlide>Slide 9
          <div className="info-block">
          <text className="image-title">Title</text><br></br><text className="image-artist">Artist</text>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>

    </IonContent>
  </IonPage>
  );
};

export default Galleries;
