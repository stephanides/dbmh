import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import { Box, Flex } from '@chakra-ui/react';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  media,
} from '../../../../shared/design';
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
    company: 'Startitup podcasty',
    description: {
      sk: 'Microinfluencer má rádovo 4 až 5x vyšší dosah v rámci svojej bubliny, v rámci engagementu rateu, teda miery zapojenia sledovateľov. Microinfluencer hovorí jazykom svojej bubliny, tých svojich ľudí a má na svoju komunitu "word of mouth" efekt, čo znamená, že nejde o reklamu tlačenú zhora ale skôr odporúčanie zdola.',
      en: 'Microinfluencer má rádovo 4 až 5x vyšší dosah v rámci svojej bubliny, v rámci engagementu rateu, teda miery zapojenia sledovateľov. Microinfluencer hovorí jazykom svojej bubliny, tých svojich ľudí a má na svoju komunitu "word of mouth" efekt, čo znamená, že nejde o reklamu tlačenú zhora ale skôr odporúčanie zdola.',
    },
    title: 'followers',
    href: 'https://podcasts.apple.com/sk/podcast/startitup-podcasty/id1446070403?i=1000630725238',
    avatar: '/images/podcasts/1/avatar.png',
    logo: '/images/podcasts/2/logo.jpg',
    podcast_example: '/podcasts/startitup.mp3',
  },
  {
    index: 1,
    name: 'Gabriel Tóth',
    company: 'Buzzworld<br /> by Gabo & Peťo',
    description: {
      sk: 'To, čo hovoríš, je brutálne zaujímavé. Čo som si uvedomil pri tejto kampani, že ty vlastne cez tých microinfluencerov ako keby targetuješ, microtargetuješ a cieliš. Že vlastne vieš bežne využívať cielenie cez výber toho konkrétneho influencera. Áno, áno, ty hľadáš veľmi malé bubliny, ktoré vložíš do veľkej bubliny a tuto sme sa bavili o ľuďoch, ktorí majú…',
      en: 'To, čo hovoríš, je brutálne zaujímavé. Čo som si uvedomil pri tejto kampani, že ty vlastne cez tých microinfluencerov ako keby targetuješ, microtargetuješ a cieliš. Že vlastne vieš bežne využívať cielenie cez výber toho konkrétneho influencera. Áno, áno, ty hľadáš veľmi malé bubliny, ktoré vložíš do veľkej bubliny a tuto sme sa bavili o ľuďoch, ktorí majú…',
    },
    title: 'followers',
    href: 'https://podcasts.apple.com/sk/podcast/buzzworld-by-gabo-pe%C5%A5o/id1605497773?i=1000625472947',
    avatar: '/images/podcasts/1/toth_avatar.jpeg',
    logo: '/images/podcasts/1/logo.jpg',
    podcast_example: '/podcasts/buzzworld.mp3',
  },
  {
    index: 2,
    name: 'Dany Čačala',
    company: 'Doba Digitálna by Tony Dúbravec',
    description: {
      sk: 'Celé to začalo v roku 2013 vytvorením známych facebookových a instagramových značiek @dnes_nosim, @dnes_jem, @dnes_cestujem a ostatných, kde sme v priebehu nasledujúcich rokov organicky nabrali vysoké státisíce ľudí, až sme sa dostali k méte jedného milióna sledovateľov…',
      en: 'Celé to začalo v roku 2013 vytvorením známych facebookových a instagramových značiek @dnes_nosim, @dnes_jem, @dnes_cestujem a ostatných, kde sme v priebehu nasledujúcich rokov organicky nabrali vysoké státisíce ľudí, až sme sa dostali k méte jedného milióna sledovateľov…',
    },
    title: 'followers',
    href: 'https://podcasts.apple.com/sk/podcast/pre%C4%8Do-spolupracova%C5%A5-s-mikroinfluencermi-daniel-%C4%8Da%C4%8Dala/id1551746459?i=1000630921517',
    avatar: '/images/podcasts/1/avatar.png',
    logo: '/images/podcasts/3/logo.jpg',
    podcast_example: '/podcasts/tony.mp3',
  },
];

export const Podcasts = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handleSlideChange = (swiper) => {
    // Update the active slide index in the state
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <Box
      position="relative"
      mx={{ base: rem(28), lg: rem(72), '3xl': rem(190) }}
      mb={{ base: rem(120), lg: rem(198) }}
    >
      <Swiper
        observer
        tag={SwiperWrapper}
        slidesPerView={1}
        direction="horizontal"
        spaceBetween={32}
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
            {/* @ts-ignore */}
            {({ isActive }) => {
              return (
                <PodcastSlide
                  podcast={slide}
                  activeSlide={activeSlide}
                  isActive={activeSlide === i}
                  isMuted={isMuted}
                  setIsMuted={setIsMuted}
                />
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

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
  bottom: 64px;
  z-index: 1;
  left: 72px;
  ${media.down.lg} {
    bottom: -80px;
    width: 100%;
    left: 0;
  }
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
  ${media.down.lg} {
    display: flex;
    justify-content: center;
  }
`;

const SwiperArrow = styled.div`
  position: relative;
  cursor: pointer;
`;
