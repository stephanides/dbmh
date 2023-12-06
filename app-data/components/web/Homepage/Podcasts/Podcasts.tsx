import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ArrowLeftCircle, ArrowRightCircle } from '../../../../shared/design';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import { PodcastSlide } from './PodcastSlide';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export type Podcast = {
  index: number;
  name: string;
  company: string;
  description: {
    sk: string;
    en: string;
  };
  title: string;
  href: string;
  avatar: string;
  logo: string;
  podcast_example: string;
};

const SLIDES = [
  {
    index: 0,
    name: 'Dany Čačala',
    company: 'Buzzworld<br /> by Gabo & Peťo',
    description: {
      sk: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
      en: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
    },
    title: 'followers',
    href: 'https://google.com',
    avatar: '/images/podcasts/1/avatar.png',
    logo: '/images/podcasts/1/logo.jpg',
    podcast_example: '/podcasts/buzzworld.mp3',
  },
  {
    index: 1,
    name: 'Dany Čačala',
    company: 'Buzzworld<br /> by Gabo & Peťo',
    description: {
      sk: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
      en: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
    },
    title: 'followers',
    href: 'https://google.com',
    avatar: '/images/podcasts/1/avatar.png',
    logo: '/images/podcasts/1/logo.jpg',
    podcast_example: '/podcasts/startitup.mp3',
  },
  {
    index: 2,
    name: 'Dany Čačala',
    company: 'Buzzworld<br /> by Gabo & Peťo',
    description: {
      sk: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
      en: 'Presne tak, kupuješ si autenticitu. To ti nenahradí žiaden veľký influencer. Dnes idú firmy a agentúry po tých najväčších, čo majú obrovské čísla. Ale skúsme si to obrátiť. Prečo neísť po kvantite malých influencerov, ktorý na konci dňa majú vyšší engadgement rate. Tá rovnica je úplne jasná. To je matematika a excel, to neoklameš. Toto nie sú dojmy.',
    },
    title: 'followers',
    href: 'https://google.com',
    avatar: '/images/podcasts/1/avatar.png',
    logo: '/images/podcasts/1/logo.jpg',
    podcast_example: '/podcasts/tony.mp3',
  },
];

export const Podcasts = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    // Update the active slide index in the state
    setActiveSlide(swiper.activeIndex);
  };

  console.log(activeSlide);

  return (
    <Box
      backgroundColor="#151515"
      borderRadius={rem(20)}
      mx={rem(190)}
      py={rem(64)}
      px={rem(75)}
      mb={rem(198)}
    >
      <Swiper
        observer
        tag={SwiperWrapper}
        slidesPerView={1}
        direction="horizontal"
        speed={1200}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: `.swiper-button-prev-podcasts`,
          nextEl: `.swiper-button-next-podcasts`,
        }}
        key={`podcasts-${lang}`}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <PodcastSlide podcast={slide} activeSlide={activeSlide} />
          </SwiperSlide>
        ))}
        <Controls>
          <ControlsWrapper>
            <SwiperArrow className="swiper-button-prev-podcasts">
              <ArrowLeftCircle />
            </SwiperArrow>
            <Box ml={rem(28)}>
              <SwiperArrow className="swiper-button-next-podcasts">
                <ArrowRightCircle />
              </SwiperArrow>
            </Box>
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
  bottom: 0;
  z-index: 1;
`;

const ControlsWrapper = styled(Flex)`
  align-items: center;
  width: 100%;
  .swiper-button-disabled {
    svg {
      path {
        stroke: #767676;
      }
    }
  }
`;

const SwiperArrow = styled.div`
  position: relative;
  cursor: pointer;
`;
