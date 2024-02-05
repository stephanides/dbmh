import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FONT_FAMILY_FORMULA, colors, media } from '../../../../shared/design';
import { rem } from 'polished';

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
    src: '/images/partners/3.svg',
    alt: '',
  },
  {
    src: '/images/partners/4.svg',
    alt: '',
  },
  {
    src: '/images/partners/5.svg',
    alt: '',
  },
  {
    src: '/images/partners/6.svg',
    alt: '',
  },
  {
    src: '/images/partners/7.svg',
    alt: '',
  },
  {
    src: '/images/partners/8.svg',
    alt: '',
  },
  {
    src: '/images/partners/9.svg',
    alt: '',
  },
  {
    src: '/images/partners/10.svg',
    alt: '',
  },
  {
    src: '/images/partners/11.svg',
    alt: '',
  },
  {
    src: '/images/partners/12.svg',
    alt: '',
  },
  {
    src: '/images/partners/13.svg',
    alt: '',
  },
  {
    src: '/images/partners/14.svg',
    alt: '',
  },
];

const settings = {
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  infinite: true,
  swipeToSlide: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export const TrustedBy = () => {
  return (
    <Box
      border={`1px solid ${colors.border}`}
      borderRadius={rem(8)}
      py={{ base: rem(32), '3xl': rem(40) }}
      height={{ base: rem(240), sm: '330px' }}
    >
      <Text
        pl={rem(40)}
        pb={{ base: rem(40), sm: rem(80) }}
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        fontSize={{ base: rem(26), '3xl': rem(26) }}
        color={colors.primary}
      >
        Trusted by
      </Text>

      <Slider arrows={false} {...settings}>
        {PARTNERS.map((partner, i) => (
          <Box>
            <ItemImage src={partner.src} alt={partner.alt} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const ItemImage = styled.img`
   {
    width: 80px;
    height: auto;
    margin-left: 16px;
    margin-right: 16px;
    ${media.down.sm} {
      width: 68px;
    }
  }
`;
