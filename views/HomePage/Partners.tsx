import React from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

const PARTNER_LOGOS = [
  'logoipsum-logo-1.svg',
  'logoipsum-logo-2.svg',
  'logoipsum-logo-3.svg',
  'logoipsum-logo-4.svg',
  'logoipsum-logo-5.svg',
  'logoipsum-logo-6.svg',
  'logoipsum-logo-7.svg',
]

const LOGOS_PER_VIEW = 6

export default function Partners() {
  return (
    <PartnersWrapper>
      <Swiper
        slidesPerView={LOGOS_PER_VIEW}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} width={128} height={128} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  )
}

const PartnersWrapper = styled.div`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
  }

  .swiper-slide {
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`
