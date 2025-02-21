'use client';

import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { scroller } from 'react-scroll';
import {
  colors,
  FONT_FAMILY_FORMULA,
  OvMediaLogo,
  PrimaryButton,
  SupercarHeading,
} from '../../../shared/design';
import dynamic from 'next/dynamic';
import { OverView } from './Overview';
import { Timeline } from './Timeline';
import { Venture } from './Venture';
import { Deliveries } from './Deliveries';
import { useState } from 'react';
import { SOC_GALLERY } from '../../../shared/data/socGallery';
import { Bts } from './Bts';
import Link from 'next/link';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

export const Soc = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const handleScrollToContent = (content: string) => {
    scroller.scrollTo(content, {
      duration: 700,
      delay: 50,
      smooth: true,
      offset: -120,
    });
  };
  return (
    <Box>
      <Box
        width="100%"
        minH="100vh"
        position="relative"
        overflow="hidden"
        px={{ base: rem(28), lg: rem(72) }}
        background="rgba(0,0,0,.4)"
        pb={rem(114)}
      >
        {/* Video Background */}
        <Box
          as="video"
          autoPlay
          loop
          muted
          playsInline
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex="-1"
        >
          <source src="/video/soc-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        <Flex flexDir="column">
          <Box mt={rem(200)}>
            <Link href="/">
              <PrimaryButton>GO BACK</PrimaryButton>
            </Link>
            <Box
              mt={{ base: rem(60), '3xl': rem(100) }}
              width={rem(200)}
              display={{ base: 'none', lg: 'block' }}
            >
              <OvMediaLogo />
            </Box>
          </Box>
          <Box
            width={{ base: '100%', sm: '400px', '3xl': '700px' }}
            mt={rem(50)}
          >
            <SupercarHeading />
          </Box>
          <Flex
            columnGap={rem(12)}
            mt={rem(46)}
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems="flex-start"
            rowGap={rem(20)}
          >
            {['#Photoshooting', '#videoproduction', '#content'].map((label) => (
              <Box
                textTransform="uppercase"
                color="white"
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                fontSize={rem(16)}
                lineHeight={rem(22)}
                py={rem(8)}
                px={rem(12)}
                borderRadius={rem(4)}
                mr={rem(20)}
                key={label}
                background="rgba(255,255,255,.1)"
              >
                {label}
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box
          position="absolute"
          bottom={{ base: rem(32), xl: rem(100) }}
          right={{ base: rem(32), md: rem(80) }}
          left={{ base: rem(32), md: 'unset' }}
        >
          <PrimaryButton
            borderColor={colors.primary}
            color={colors.primary}
            onClick={() => handleScrollToContent('deliveries')}
            height={{ base: rem(60), md: rem(48) }}
          >
            all videos and photos
          </PrimaryButton>
        </Box>
      </Box>
      <OverView setOpenGallery={setOpen} setPhotoIndex={setPhotoIndex} />
      <Timeline />
      <Venture />
      <Deliveries setOpenGallery={setOpen} setPhotoIndex={setPhotoIndex} />
      <Bts />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={SOC_GALLERY}
        index={photoIndex}
      />
    </Box>
  );
};
