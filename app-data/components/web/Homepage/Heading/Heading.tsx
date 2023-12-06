import { Box, Flex } from '@chakra-ui/react';
import {
  ContentFifth,
  ContentFirst,
  ContentFourth,
  ContentSecond,
  ContentSixth,
  ContentThird,
} from './Contents';
import { rem } from 'polished';
import { useEffect, useState } from 'react';
import { HeadingImage } from './HeadingImage';

const IMAGES = [
  { src: '/images/heading/1_1.jpg', alt: '' },
  { src: '/images/heading/1_2.jpg', alt: '' },
  { src: '/images/heading/1_3.jpg', alt: '' },
];

const IMAGES2 = [
  { src: '/images/heading/2_1.jpg', alt: '' },
  { src: '/images/heading/2_2.jpg', alt: '' },
  { src: '/images/heading/2_3.jpg', alt: '' },
];

export const Heading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation with a small delay
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // You can adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Box pl={rem(56)} pr={rem(46)}>
      <Flex rowGap={rem(20)} flexDirection="column">
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <ContentFirst />
          <Box position="absolute" left="11.3%" top={0} height="100%">
            <HeadingImage images={IMAGES} />
          </Box>
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <ContentSecond />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <ContentThird />
          <Box position="absolute" right="17.3%" top={0} height="100%">
            <HeadingImage images={IMAGES2} />
          </Box>
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <ContentFourth />
        </Box>
        <Box className={`animated-heading-left ${isVisible ? 'visible' : ''}`}>
          <ContentFifth />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <ContentSixth />
        </Box>
      </Flex>
    </Box>
  );
};
