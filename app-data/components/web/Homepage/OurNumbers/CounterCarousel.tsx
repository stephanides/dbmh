import React, { useEffect, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  FONT_FAMILY_FORMULA,
  colors,
} from '../../../../shared/design';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
SwiperCore.use([Navigation, Pagination]);

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

export type CounterCarouselSlide = {
  number: number;
  numberSufix: string;
  text: {
    sk: string;
    en: string;
  };
};

type CounterCarouselProps = {
  classNameOverride: string;
  slides: CounterCarouselSlide[];
};

export const CounterCarousel = ({
  classNameOverride,
  slides,
}: CounterCarouselProps) => {
  const [activeNumber, setActiveNumber] = useState(slides[0].number);
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';

  useEffect(() => {
    setActiveNumber(slides[0].number);
  }, [lang]);

  return (
    <Box
      border={`1px solid ${colors.border}`}
      borderRadius={rem(8)}
      px={rem(40)}
      width="100%"
      height={rem(330)}
    >
      <Swiper
        observer
        onSlideChange={(swiper) => {
          setActiveNumber(slides[swiper.realIndex].number);
        }}
        tag={SwiperWrapper}
        slidesPerView={1}
        speed={800}
        direction="horizontal"
        pagination={{
          el: `.pagination-bullet-${classNameOverride}`,
          clickable: true,
        }}
        navigation={{
          prevEl: `.swiper-button-prev-${classNameOverride}`,
          nextEl: `.swiper-button-next-${classNameOverride}`,
        }}
        key={`${classNameOverride}-${lang}`}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box pt={rem(40)}>
              <Flex>
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: 'spring',
                    duration: index + 0.3,
                  })}
                  animateToNumber={activeNumber}
                  fontStyle={{
                    fontSize: 36,
                    fontFamily: FONT_FAMILY_FORMULA.EXTRA_BOLD,
                    color: colors.primary,
                  }}
                />
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  fontSize={rem(36)}
                  color={colors.primary}
                >
                  {slide.numberSufix}
                </Text>
              </Flex>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color="white"
                fontSize={rem(16)}
                mt={rem(24)}
                lineHeight={rem(22)}
              >
                {slide.text[lang]}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
        <Controls>
          <ControlsWrapper>
            <PaginationWrapper
              className={`swiper-pagination pagination-bullet-${classNameOverride}`}
            />
            <Flex columnGap={rem(8)}>
              <SwiperArrow
                className={`swiper-button-prev-${classNameOverride}`}
              >
                <ArrowLeftCircle />
              </SwiperArrow>
              <SwiperArrow
                className={`swiper-button-next-${classNameOverride}`}
              >
                <ArrowRightCircle />
              </SwiperArrow>
            </Flex>
          </ControlsWrapper>
        </Controls>
      </Swiper>
    </Box>
  );
};

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    align-items: center;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  z-index: 1;
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
