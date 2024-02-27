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
}

interface Props {
  dataArray: DataDenah[];
}

const DenahControl: FC<Props> = ({ dataArray }) => {
  const swiper = useSwiper();

  const handleSegmentChange = (event: CustomEvent) => {
    const segmentValue = event.detail.value;
    const slideIndex = parseInt(segmentValue);

    console.log("DATAA", slideIndex);
    swiper.slideTo(slideIndex);
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
              <IonLabel>{data.nama}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonFab>
    </>
  );
};

const Denah: FC<Props> = ({ dataArray }) => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="slides"
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,

          translate: ["120%", 0, -500],
        },
      }}
    >
      <DenahControl dataArray={dataArray} />
      {dataArray.map((data) => (
        <SwiperSlide key={data.id} className="slide">
          <TransformWrapper initialScale={1} maxScale={2}>
            <TransformComponent>
              <div className="zoom">
                <IonImg className="ket" src={data.url} alt={data.nama} />
              </div>
            </TransformComponent>
          </TransformWrapper>
          <div className="bawah">
            <IonImg src={data.ket} alt={data.nama} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Denah;
