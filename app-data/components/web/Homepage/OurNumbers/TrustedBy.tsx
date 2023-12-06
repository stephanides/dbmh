import React, { useEffect, useRef } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Box, Text } from '@chakra-ui/react';
import { FONT_FAMILY_FORMULA, colors } from '../../../../shared/design';
import { rem } from 'polished';
SwiperCore.use([Autoplay]);

const PARTNERS = [
  {
    src: '/images/partners/1.svg',
    alt: '',
  },
  {
    src: '/images/partners/2.svg',
    alt: '',
  },
  {
    src: '/images/partners/1.svg',
    alt: '',
  },
  {
    src: '/images/partners/2.svg',
    alt: '',
  },
  {
    src: '/images/partners/1.svg',
    alt: '',
  },
  {
    src: '/images/partners/2.svg',
    alt: '',
  },
  {
    src: '/images/partners/1.svg',
    alt: '',
  },
  {
    src: '/images/partners/2.svg',
    alt: '',
  },
];

export const TrustedBy = () => {
  const swiper = useRef(null);

  useEffect(() => {
    const restartSwiperAutoplay = () => {
      if (document.visibilityState === 'visible') {
        swiper.current.swiper.autoplay.start();
      }
    };
    document.addEventListener('visibilitychange', restartSwiperAutoplay);

    return () => {
      document.removeEventListener('visibilitychange', restartSwiperAutoplay);
    };
  }, [swiper]);

  useEffect(() => {
    if (swiper.current) {
      swiper.current.swiper.autoplay.start();
      swiper.current.swiper.autoplay.run();
    }
  }, []);

  console.log(swiper?.current?.swiper.autoplay);
  return (
    <Box
      border={`1px solid ${colors.border}`}
      borderRadius={rem(8)}
      py={rem(40)}
      height="330px"
    >
      <Text
        pl={rem(40)}
        pb={rem(124)}
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        fontSize={rem(36)}
        color={colors.primary}
      >
        Trusted by
      </Text>

      <Swiper
        // @ts-ignore
        ref={swiper}
        tag={SwiperWrapper}
        loop
        slidesPerView={4}
        autoplay={{
          delay: 21,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        speed={5000}
        direction="horizontal"
        breakpoints={{
          // when window width is >= 320px
          0: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {PARTNERS.map((partner, i) => (
          <SwiperSlide key={i}>
            <Item>
              <ItemImage src={partner.src} alt={partner.alt} />
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const SwiperWrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
  transition-timing-function: linear !important;

  .swiper-wrapper {
    align-items: center;
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
  }
`;

const Item = styled.div`
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
  cursor: pointer;
`;
