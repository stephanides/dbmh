import { Box, Flex } from '@chakra-ui/react';
import { scroller } from 'react-scroll';
import {
  ContentFifth,
  ContentFirst,
  ContentFourth,
  ContentSecond,
  ContentSixth,
  ContentThird,
} from './Contents';
import {
  ContentFirst as MobileContentFirst,
  ContentSecond as MobileContentSecond,
  ContentThird as MobileContentThird,
  ContentFourth as MobileContentFourth,
  ContentSixth as MobileContentSixth,
  ContentSeventh as MobileContentSeventh,
  ContentEigth as MobileContentEigth,
  ContentNineth as MobileContentNineth,
  ContentTenth as MobileContentTenth,
  ContentTop,
  ContentUnderTop,
} from './ContentsMobile';
import { rem } from 'polished';
import { useEffect, useState } from 'react';
import { HeadingImage } from './HeadingImage';
import { ScrollDown } from '../../../../shared/design';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleScrollToContent = (content: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${content}`);
    } else {
      scroller.scrollTo(content, {
        duration: 700,
        delay: 50,
        smooth: true,
        offset: -20,
      });
    }
  };

  useEffect(() => {
    // Trigger animation with a small delay
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // You can adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Box
      pl={{ base: rem(20), lg: rem(56) }}
      pr={{ base: rem(20), lg: rem(46) }}
      position="relative"
    >
      <Flex
        rowGap={{ base: rem(12), '3xl': rem(20) }}
        flexDirection="column"
        display={{ base: 'none', lg: 'flex' }}
      >
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
          display={{ base: 'none', '3xl': 'block' }}
        >
          <ContentFirst />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <ContentSecond />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <ContentThird />
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
      <Flex
        rowGap={rem(8)}
        flexDirection="column"
        display={{ base: 'flex', lg: 'none' }}
      >
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <ContentUnderTop />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <MobileContentFirst />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <MobileContentSecond />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <MobileContentThird />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <MobileContentFourth />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <MobileContentSixth />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <MobileContentSeventh />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <MobileContentEigth />
        </Box>
        <Box className={`animated-heading-right ${isVisible ? 'visible' : ''}`}>
          <MobileContentNineth />
        </Box>
        <Box
          className={`animated-heading-left ${isVisible ? 'visible' : ''}`}
          position="relative"
        >
          <MobileContentTenth />
        </Box>
      </Flex>
      <Box
        position="absolute"
        right="72px"
        top="calc(50% - 116px)"
        display={{ base: 'none', lg: 'flex' }}
        cursor="pointer"
        onClick={() => handleScrollToContent('highlights')}
      >
        <ScrollDown />
      </Box>
    </Box>
  );
};
