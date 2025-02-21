import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { AnimatedWrapper, CustomContainer } from '../../../shared/components';
import { FONT_FAMILY_FORMULA } from '../../../shared/design';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

const images = [
  '/images/soc/bts/IMG_0607.jpeg',
  '/images/soc/bts/IMG_0609.jpeg',
  '/images/soc/bts/IMG_0653.jpeg',
  '/images/soc/bts/IMG_0825.jpeg',
  '/images/soc/bts/IMG_0945.jpg',
  '/images/soc/bts/IMG_4259.jpeg',
  '/images/soc/bts/IMG_4280.jpeg',
  '/images/soc/bts/IMG_5061.jpg',
  '/images/soc/bts/IMG_5961.jpeg',
  '/images/soc/bts/IMG_7637.jpg',
  '/images/soc/bts/IMG_7668.jpeg',
  '/images/soc/bts/IMG_8452.jpeg',
  '/images/soc/bts/IMG_8641.jpeg',
  '/images/soc/bts/IMG_9551.jpeg',
];

export const Bts = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <CustomContainer>
      <Box position="relative" py={rem(180)}>
        <Box
          mx={{ base: rem(28), lg: rem(72) }}
          position="relative"
          minH={{ base: rem(800), lg: rem(600) }}
        >
          <AnimatedWrapper
            width={{ base: rem(100), md: rem(180 * 0.8), lg: rem(120) }}
            height={{ base: rem(140), md: rem(200 * 0.8), lg: rem(200) }}
            position="absolute"
            top={rem(-20)}
            left={{ base: '25%', lg: '30%' }}
            backgroundImage={`url(${images[0]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            opacity={0.5}
            index={0}
            onClick={() => {
              setPhotoIndex(0);
              setOpen(true);
            }}
            display={{ base: 'none', md: 'block' }}
          />

          <AnimatedWrapper
            width={{
              base: rem(120),
              sm: rem(160),
              md: rem(220 * 0.8),
              lg: rem(220),
            }}
            height={{
              base: rem(200),
              sm: rem(240),
              md: rem(340 * 0.8),
              lg: rem(340),
            }}
            position="absolute"
            top={{ base: rem(300), md: rem(180) }}
            left={{ base: rem(30), md: '39%' }}
            backgroundImage={`url(${images[1]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            opacity={0.3}
            index={1}
            onClick={() => {
              setPhotoIndex(1);
              setOpen(true);
            }}
          />

          <AnimatedWrapper
            width={{
              base: rem(200),
              sm: rem(260),
              md: rem(400 * 0.8),
              lg: rem(300),
            }}
            height={{
              base: rem(180),
              sm: rem(220),
              md: rem(300 * 0.8),
              lg: rem(200),
            }}
            position="absolute"
            top={{ base: rem(100), md: rem(40) }}
            right={{ base: '2%', lg: '12%' }}
            backgroundImage={`url(${images[2]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            opacity={0.6}
            index={2}
            onClick={() => {
              setPhotoIndex(2);
              setOpen(true);
            }}
          />

          <AnimatedWrapper
            width={{ base: rem(120), md: rem(300 * 0.8), lg: rem(300) }}
            height={{ base: rem(140), md: rem(250 * 0.8), lg: rem(250) }}
            position="absolute"
            top={rem(160)}
            right="29%"
            backgroundImage={`url(${images[3]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            index={3}
            opacity={0.8}
            onClick={() => {
              setPhotoIndex(3);
              setOpen(true);
            }}
            display={{ base: 'none', md: 'block' }}
          />

          <AnimatedWrapper
            width={{
              base: rem(160),
              sm: rem(200),
              md: rem(360 * 0.8),
              lg: rem(360),
            }}
            height={{
              base: rem(200),
              sm: rem(280),
              md: rem(240 * 0.8),
              lg: rem(240),
            }}
            position="absolute"
            top={{ base: rem(-20), md: rem(200) }}
            left={{ base: rem(-14), sm: '3%', lg: '10%' }}
            backgroundImage={`url(${images[4]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            index={4}
            opacity={0.8}
            onClick={() => {
              setPhotoIndex(4);
              setOpen(true);
            }}
          />

          <AnimatedWrapper
            width={{
              base: rem(200),
              sm: rem(240),
              md: rem(400 * 0.8),
              lg: rem(400),
            }}
            height={{
              base: rem(180),
              sm: rem(200),
              md: rem(300 * 0.8),
              lg: rem(300),
            }}
            position="absolute"
            top={{ base: rem(500), lg: rem(400) }}
            right={{ base: rem(-20), sm: '3%', lg: '10%' }}
            backgroundImage={`url(${images[5]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            index={5}
            onClick={() => {
              setPhotoIndex(5);
              setOpen(true);
            }}
          />

          <AnimatedWrapper
            width={{ base: rem(160), sm: rem(200), md: rem(350), lg: rem(120) }}
            height={{
              base: rem(200),
              sm: rem(320),
              md: rem(420),
              lg: rem(200),
            }}
            position="absolute"
            top={{ base: rem(600), lg: rem(440) }}
            left={{ base: rem(-20), sm: '2%', lg: '25%' }}
            backgroundImage={`url(${images[6]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            opacity={0.8}
            index={6}
            onClick={() => {
              setPhotoIndex(6);
              setOpen(true);
            }}
          />

          <Flex
            width="100%"
            justifyContent="center"
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
          >
            <Text
              color="white"
              fontSize={{ base: rem(28), sm: rem(36), md: rem(44) }}
              textAlign="center"
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
            >
              Pics or it didn't happen
            </Text>
          </Flex>
        </Box>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((image) => ({ src: image }))}
          index={photoIndex}
        />
      </Box>
    </CustomContainer>
  );
};
