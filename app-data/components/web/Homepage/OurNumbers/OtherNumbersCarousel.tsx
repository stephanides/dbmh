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
import Image from 'next/image';
SwiperCore.use([Navigation, Pagination]);

const SLIDES = [
  {
    number: 10,
    numberSufix: 'K',
    title: 'followers',
    subtitle: {
      en: 'Could see our video.',
      sk: 'Could see our video.',
    },
    text: {
      en: 'označení hashtagov.',
      sk: 'označení hashtagov.',
    },
    image: '/images/iphone_front.png',
  },
  {
    number: 1,
    numberSufix: 'K',
    title: 'followers',
    subtitle: {
      en: 'Could see our photo.',
      sk: 'Could see our photo.',
    },
    text: {
      en: 'followers.',
      sk: 'sledovateľov.',
    },
    image: '/images/iphone_front.png',
  },
  {
    number: 1000,
    numberSufix: 'K',
    title: 'followers',
    subtitle: {
      en: 'Could see our image.',
      sk: 'Could see our image.',
    },
    text: {
      en: 'registrations.',
      sk: 'registrácií',
    },
    image: '/images/iphone_front.png',
  },
];

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

type OtherNumbersCarouselProps = {
  classNameOverride: string;
};

export const OtherNumbersCarousel = ({
  classNameOverride,
}: OtherNumbersCarouselProps) => {
  const [activeNumber, setActiveNumber] = useState(SLIDES[0].number);
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';

  useEffect(() => {
    setActiveNumber(SLIDES[0].number);
  }, [lang]);

  return (
    <Box width="100%" height="100%">
      <Swiper
        observer
        onSlideChange={(swiper) => {
          setActiveNumber(SLIDES[swiper.realIndex].number);
        }}
        tag={SwiperWrapper}
        speed={800}
        slidesPerView={1}
        direction="horizontal"
        navigation={{
          prevEl: `.swiper-button-prev-${classNameOverride}`,
          nextEl: `.swiper-button-next-${classNameOverride}`,
        }}
        key={`${classNameOverride}-${lang}`}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box height="100%" position="relative">
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
                    lineHeight: rem(42),
                  }}
                />
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  fontSize={rem(36)}
                  color={colors.primary}
                  lineHeight={rem(42)}
                >
                  {slide.numberSufix}
                </Text>
              </Flex>

              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={rem(36)}
                lineHeight={rem(42)}
                color={colors.primary}
              >
                {slide.title}
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color={colors.primary}
                fontSize={rem(16)}
                mt={rem(24)}
                lineHeight={rem(22)}
              >
                {slide.subtitle[lang]}
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color="white"
                fontSize={rem(16)}
                mt={rem(24)}
                lineHeight={rem(22)}
              >
                {slide.text[lang]}
              </Text>
              <Flex
                position="absolute"
                bottom="0"
                width="100%"
                justifyContent="center"
              >
                <Image
                  src={slide.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: rem(340) }}
                  alt={slide.subtitle[lang]}
                />
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
        <Controls>
          <ControlsWrapper>
            <SwiperArrow className={`swiper-button-prev-${classNameOverride}`}>
              <ArrowLeftCircle />
            </SwiperArrow>
            <SwiperArrow className={`swiper-button-next-${classNameOverride}`}>
              <ArrowRightCircle />
            </SwiperArrow>
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
  top: calc(50% - 16px);
  width: 100%;
  z-index: 1;
`;

const ControlsWrapper = styled(Flex)`
  align-items: center;
  width: 100%;
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
