import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from 'swiper';
import {
  CustomContainer,
  SwiperArrowLeft,
  SwiperArrowRight,
} from '../../../shared/components';
import { Box, Flex } from '@chakra-ui/react';

const images = [
  {
    url: '/media/homepage/carousel/carousel_1.jpg',
    title: 'Carousel 1',
  },
  {
    url: '/media/homepage/carousel/carousel_2.jpg',
    title: 'Carousel 2',
  },
  {
    url: '/media/homepage/carousel/carousel_3.jpg',
    title: 'Carousel 3',
  },
];

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

export const MainCarousel = () => {
  const elements = images.map((image) => (
    <SwiperSlide tag={StyledSwiperSlide} key={image.title}>
      <Slide url={image.url} />
    </SwiperSlide>
  ));
  return (
    <Container>
      {/* desktop */}
      <Box display={{ base: 'none', lg: 'block' }} height="100%">
        <Controls>
          <CustomContainer>
            <ControlsWrapper>
              <PaginationWrapper className="swiper-pagination swiper-pagination-progressbar custom-pagination-progress" />
              <SwiperArrowLeft className=" swiper-button-prev-main swiper-button-prev" />
              <SwiperArrowRight className=" swiper-button-next swiper-button-next-main" />
            </ControlsWrapper>
          </CustomContainer>
        </Controls>
        <Swiper
          className="swiper-main"
          observer
          tag={SwiperWrapper}
          slidesPerView={1}
          loop
          direction="horizontal"
          effect="fade"
          pagination={{
            el: '.custom-pagination-progress',
            type: 'progressbar',
          }}
          navigation={{
            prevEl: '.swiper-button-prev-main',
            nextEl: '.swiper-button-next-main',
          }}
        >
          {elements}
        </Swiper>
      </Box>
      {/* mobile */}
      <Box display={{ base: 'block', lg: 'none' }} height="100%">
        <Controls>
          <CustomContainer>
            <ControlsWrapper>
              <PaginationWrapper className="swiper-pagination swiper-pagination-bullet custom-pagination-bullet" />
            </ControlsWrapper>
          </CustomContainer>
        </Controls>
        <Swiper
          className="swiper-main-mobile"
          observer
          tag={SwiperWrapperMobile}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop
          direction="horizontal"
          effect="fade"
          pagination={{
            el: '.custom-pagination-bullet',
            clickable: true,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-main-mobile',
            nextEl: '.swiper-button-next-main-mobile',
          }}
        >
          {elements}
        </Swiper>
      </Box>
    </Container>
  );
};

const Controls = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  bottom: 32px;
`;

const ControlsWrapper = styled(Flex)`
  align-items: center;
`;

const SwiperWrapper = styled.div`
  height: 100%;
`;

const SwiperWrapperMobile = styled.div``;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

type SlideProps = {
  url: string;
};
const Slide = styled.div<SlideProps>`
  background-image: ${({ url }) => `url(${url})`};
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 992px) {
    aspect-ratio: 390/260;
    background-position: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto !important;
`;

const PaginationWrapper = styled.div`
  width: 100%;
  height: 3px;
  position: relative;
  margin-right: 50px;
  background: #ffffff80;
  @media (max-width: 992px) {
    background: transparent;
    margin-right: 0;
  }
`;
