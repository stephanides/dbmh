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
    numberSufix: 'Bugatti SM',
    title: 'Bugatti SM',
    subtitle: {
      en: 'Creating live content coverage for Bugatti social media with over 2,5M views and 230K interactions.',
      sk: 'Vytváranie živého pokrytia pre sociálne médiá Bugatti s viac ako 2,5 miliónmi zobrazení a 230 000 interakciami.',
    },
    image: '/images/buggati.png',
  },
  {
    number: 1,
    numberSufix: 'Rimac SM',
    title: 'Rimac SM',
    subtitle: {
      en: 'Delivering content for Rimac Automobili social media. ',
      sk: 'Poskytovanie obsahu pre sociálne médiá Rimac Automobili.',
    },
    image: '/images/rimac.png',
  },
  {
    number: 1000,
    numberSufix: 'Internationally recognized',
    title: 'Internationally recognized',
    subtitle: {
      en: 'Our team and content being internationally recognized by global brands (Porsche, BMW, Pagani).',
      sk: 'Náš tím a obsah sú medzinárodne uznávané svetovými značkami (Porsche, BMW, Pagani).',
    },
    image: '/images/ir.png',
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
    <Box width="100%" height={{ base: rem(600), md: '100%' }}>
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
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={{ base: rem(26), '3xl': rem(26) }}
                lineHeight={rem(42)}
                color={colors.primary}
              >
                {slide.title}
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color="white"
                fontSize={rem(16)}
                mt={rem(24)}
                lineHeight={rem(22)}
              >
                {slide.subtitle[lang]}
              </Text>
              <Flex
                position="absolute"
                bottom="0"
                width="100%"
                justifyContent="center"
              >
                <Box maxWidth={{ base: rem(280), md: rem(200) }} width="100%">
                  <Image
                    src={slide.image}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={slide.subtitle[lang]}
                  />
                </Box>
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
