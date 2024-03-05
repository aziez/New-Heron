import {
  IonFab,
  IonImg,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import "./style.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Pagination, Navigation } from "swiper/modules";

interface DataDenah {
  id: string;
  nama: string;
  url: string;
  ket: string;
  info: string;
}

interface Props {
  dataArray: DataDenah[];
  disclaimer?: boolean;
}

const DenahControl: FC<Props> = ({ dataArray }) => {
  const swiper = useSwiper();

  const handleSegmentChange = (event: CustomEvent) => {
    const segmentValue = event.detail.value;
    const slideIndex = parseInt(segmentValue);
    swiper.enable();
    swiper.slideTo(slideIndex);
    swiper.disable();
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end">
        <IonSegment
          className="segment"
          mode="ios"
          value="0"
          onIonChange={handleSegmentChange}
        >
          {dataArray.map((data) => (
            <IonSegmentButton
              className="segment-btn"
              key={data.id}
              value={data.id}
            >
              {data.nama}
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonFab>
    </>
  );
};

const Denah: FC<Props> = ({ dataArray, disclaimer = false }) => {
  return (
    <Swiper
      className="slides"
      effect={"fade"}
      pagination={{ type: "progressbar" }}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper: any) => swiper.disable()}
      onSlideChange={() => console.log("slide change")}
      //   onSlideChange={() => {/*...*/}}
    >
      <DenahControl dataArray={dataArray} />
      {dataArray.map((data) => (
        <>
          <SwiperSlide key={data.id} className="slide">
            <TransformWrapper initialScale={1.2} maxScale={2}>
              <TransformComponent>
                <div className="zoom">
                  <IonImg className="ket" src={data.url} alt={data.nama} />
                </div>
              </TransformComponent>
            </TransformWrapper>
            <div
              className="bawah"
              data-swiper-parallax="-300"
              data-swiper-parallax-duration="600"
            >
              <IonImg src={data.ket} alt={data.nama} />
            </div>
            {disclaimer && (
              <div className="info">
                <IonImg src={data?.info} alt={data.nama} />
              </div>
            )}
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default Denah;
