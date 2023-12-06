import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import styled, { keyframes } from 'styled-components';
import { Box, Flex, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  colors,
} from '../../../shared/design';
SwiperCore.use([Navigation, Pagination, EffectFade]);

const CLASS_NAMES = ['slide-first', 'slide-third', 'slide-second'];

export const Statements = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text here
      const newIndex = (activeSlide + 1) % CLASS_NAMES.length;
      setActiveSlide(newIndex);
    }, 3000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeSlide, CLASS_NAMES]);

  return (
    <Box px={rem(30)} pt={rem(100)}>
      <Wrapper
        p={rem(40)}
        pb={rem(30)}
        width="100%"
        position="relative"
        height="823px"
      >
        <Item
          backgroundColor="red"
          className={CLASS_NAMES[activeSlide % CLASS_NAMES.length]}
        >
          <img key="img1" src="https://picsum.photos/id/237/200/300" />
        </Item>
        <Item
          backgroundColor="blue"
          className={CLASS_NAMES[(activeSlide + 1) % CLASS_NAMES.length]}
        >
          <img key="img1" src="https://picsum.photos/id/237/200/300" />
        </Item>
        <Item
          backgroundColor="green"
          className={CLASS_NAMES[(activeSlide + 2) % CLASS_NAMES.length]}
        >
          <img key="img1" src="https://picsum.photos/id/237/200/300" />
        </Item>
      </Wrapper>
    </Box>
  );
};

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    width: 1;
  }
`;

const Item = styled(Box)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: all 1s ease-out;
  border-radius: ${rem(20)};
  overflow: hidden;
`;

const Wrapper = styled(Box)`
  .slide-first {
    transform: translateY(0px);
    z-index: 3;
  }
  .slide-second {
    transform: translateY(-100px) scale(0.9);
    z-index: 2;
    animation: ${opacity} 1000ms linear;
  }
  .slide-third {
    transform: translateY(-180px) scale(0.8);
    z-index: 1;
    animation: ${opacity} 1000ms linear;
  }
`;

const ControlsWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  .swiper-button-disabled {
    svg {
      path {
        stroke: #767676;
      }
    }
  }
`;

const PaginationWrapper = styled.div`
  position: relative;
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: rgba(217, 217, 217, 0.2);
  }
  .swiper-pagination-bullet-active {
    background-color: rgba(217, 217, 217, 1);
    transform: scale(1);
  }
`;

const SwiperArrow = styled.div`
  position: relative;
  cursor: pointer;
`;
