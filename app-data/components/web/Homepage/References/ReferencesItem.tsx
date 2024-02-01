import { Box, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as ReactDOMServer from 'react-dom/server';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import styled, { css, keyframes } from 'styled-components';
import { CarouselPaginationDot } from './PaginationDot';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import { FONT_FAMILY_FORMULA, media } from '../../../../shared/design';
import { ReferenceLabel } from './ReferenceLabel';

SwiperCore.use([Pagination, EffectFade]);

export type ReferencesItemType = {
  images: {
    src: string;
    alt: string;
  }[];
  title: {
    sk: string;
    en: string;
  };
  labels: string[];
  description: {
    sk: string;
    en: string;
  };
};
const AUTOPLAY_DELAY = 5000;
const BULLET_ACTIVE_CLASS = 'pagination-bullet-references-active';

export const ReferencesItem = ({
  images,
  title,
  labels,
  description,
}: ReferencesItemType) => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  return (
    <Wrapper width="100%">
      <Swiper
        observer
        tag={SwiperWrapper}
        slidesPerView={1}
        centeredSlides
        speed={1200}
        direction="horizontal"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        pagination={{
          el: `.pagination-bullet-references`,
          clickable: true,
          bulletActiveClass: BULLET_ACTIVE_CLASS,
          renderBullet: (_, className) =>
            ReactDOMServer.renderToStaticMarkup(
              <CarouselPaginationDot
                className={className}
                animationDuration={AUTOPLAY_DELAY}
                bulletActiveClass={BULLET_ACTIVE_CLASS}
                slidesCount={images.length}
              />
            ),
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <ImageWrapper
              width="100%"
              height="100%"
              backgroundImage={`url(${image.src})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <Box
                position="absolute"
                width="100%"
                height="100%"
                backgroundColor="rgba(0,0,0,0.6)"
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
        <Box
          position="absolute"
          bottom={{ base: 'unset', md: rem(40), xl: '100px' }}
          top={{ base: rem(64), md: 'unset' }}
          pl={{ base: rem(32), lg: rem(60), xl: rem(140), '3xl': rem(222) }}
          pr={{ base: rem(32), lg: 0 }}
          maxWidth={rem(720)}
          width="100%"
        >
          <Controls>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              fontSize={rem(14)}
              color="white"
              mb={rem(24)}
            >
              {lang === 'en' ? 'References' : 'Referencie'}
            </Text>
            <PaginationWrapper
              className={`swiper-pagination pagination-bullet-references`}
            />
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              fontSize={{ base: rem(40), xl: rem(72) }}
              lineHeight={{ base: rem(46), xl: rem(82) }}
              color="white"
              mt={rem(72)}
            >
              {title[lang]}
            </Text>
            <Flex mt={rem(40)} width="100%" flexWrap="wrap" columnGap={rem(12)}>
              {labels.map((label) => (
                <ReferenceLabel key={label} title={label} />
              ))}
            </Flex>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
              fontSize={rem(16)}
              lineHeight={rem(22)}
              color="white"
              mt={rem(40)}
              maxWidth={rem(420)}
            >
              {description[lang]}
            </Text>
          </Controls>
        </Box>
      </Swiper>
    </Wrapper>
  );
};

const ImageWrapper = styled(Box)``;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    align-items: center;
  }
`;

const Controls = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const PaginationWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 8px;
`;

const Wrapper = styled(Box)`
  aspect-ratio: 1920 / 1080;
  ${media.down.lg} {
    aspect-ratio: 768 / 532;
  }
  ${media.down.md} {
    aspect-ratio: 360 / 660;
  }
`;
