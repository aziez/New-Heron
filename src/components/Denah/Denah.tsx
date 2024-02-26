import {
    IonFab,
    IonImg,
    IonLabel,
    IonSegment,
    IonSegmentButton,
  } from "@ionic/react";
  import { FC, useRef } from "react";
  import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
  import "swiper/css";
  import "@ionic/react/css/ionic-swiper.css";
  import "./style.css";
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper/modules";
  
  import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
  
  interface DataDenah {
    id: string;
    nama: string;
    url: string;
    ket: string;
  }
  
  interface Props {
    dataArray: DataDenah[];
  }
  
  const Denah: FC<Props> = ({ dataArray }) => {
    const swiper = useSwiper();
  
    const handleSegmentChange = (event: CustomEvent) => {
      const segmentValue = event.detail.value;
      const slideIndex = parseInt(segmentValue);
  
      console.log("DATAA", swiper);
      swiper.slideNext()
  
      if (swiper) {
        swiper.slideTo(slideIndex);
      }
    };
  
    return (
      <>
        <IonFab vertical="bottom" horizontal="end">
          <IonSegment
            mode="md"
            value="0"
            className="segment"
            onIonChange={handleSegmentChange}
          >
            {dataArray.map((data) => (
              <IonSegmentButton key={data.id} value={data.id} className="segment-btn">
                <IonLabel className="label">{data.nama}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonFab>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
          className="slides"
          spaceBetween={50} // Set the space between slides if needed
          slidesPerView={1} // Set the number of slides per view
        >
          {dataArray.map((data) => (
            <SwiperSlide key={data.id} className="slide">
              <TransformWrapper>
                <TransformComponent>
                  <div className="zoom">
                    <IonImg className="ket" src={data.url} alt={data.nama} />
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };
  
  export default Denah;
  