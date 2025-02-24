import { Box, Flex, Text } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import styled from 'styled-components';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import {
  FONT_FAMILY_FORMULA,
  media,
  PrimaryButton,
} from '../../../../shared/design';
import { ReferenceLabel } from './ReferenceLabel';
import { ReferencesImage } from './ReferencesImage';
import Link from 'next/link';

SwiperCore.use([Pagination, EffectFade]);

export type ReferencesItemType = {
  images: {
    src: string;
    alt: string;
  }[];
  mobileImages: {
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
  activeIndex: number;
  href?: string;
};

export const ReferencesItem = ({
  images,
  mobileImages,
  title,
  labels,
  description,
  activeIndex,
  href,
}: ReferencesItemType) => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';

  return (
    <Wrapper width="100%" position="relative">
      <ReferencesImage
        images={images}
        mobileImages={mobileImages}
        activeIndex={activeIndex}
      />

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
          {href && (
            <Link href={href}>
              <PrimaryButton height={rem(40)} fontSize={rem(12)} mt={rem(20)}>
                Detail
              </PrimaryButton>
            </Link>
          )}
        </Controls>
      </Box>
    </Wrapper>
  );
};

const Controls = styled.div`
  position: relative;
  width: 100%;
  z-index: 3;
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
