'use client'
import { register } from 'swiper/element/bundle';
import styles from './devSwiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import "swiper/css";

import Image from 'next/image';
import { useEffect, useRef } from 'react';


const DevSwiper = ({galleryName}) => {


    const swiperRef = useRef(null);

      // Register swiper
    useEffect(() => {
        console.log('swiper registered')
        register();

        console.log(swiperRef.current.swiper)

    }, []);


    // Listen for events
    useEffect(() => {
        swiperRef.current.addEventListener('swiperSlideChange', (e) => {
            const [swiper] = e.detail;
            console.log('slide changed', swiper.activeIndex);
        });
    }, []);

    const slideNext = () => {
        swiperRef.current.swiper.slideNext(500);
    }
    const slidePrev = () => {
        swiperRef.current.swiper.slidePrev(500);
    }


    return (
        <div className={styles.slider}>

            <div className={styles.arrowContainer}>
                <FaChevronLeft className={styles.arrow} onClick={() => slidePrev()}></FaChevronLeft>
                <FaChevronRight className={styles.arrow} onClick={() => slideNext()}></FaChevronRight>
            </div>

            <swiper-container style={{ height: '100%' }}  autoplay-delay="5000" rewind="true"  loop="true"  slides-per-view="2" keyboard="true" speed="500" space-between="25" ref={swiperRef}>
                {galleryName.map( (image) => {
                    return <swiper-slide key={image._id} className={styles.slide}> 
                        <Image className={styles.image} src={`/galleries${image.path}`} alt={image.name} width={500} height={500} />
                    </swiper-slide>
                
                })}
            </swiper-container>

        </div>
    )

}

export default DevSwiper;