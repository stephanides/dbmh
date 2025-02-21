import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import {
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  Hamburger,
  colors,
  media,
} from '../../design';
import styled from 'styled-components';
import { Box, Flex, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { HeadingText } from './HeadingText';

export const SOCIAL_LINKS = {
  fb: 'https://www.facebook.com/daybymemediahouse',
  ig: 'https://www.instagram.com/daybymemediahouse/',
  in: 'https://www.linkedin.com/company/daybyme/about',
};

type NavigationProps = {
  isSticky?: boolean;
  toggleMobile: () => void;
};

export const Navigation = ({
  isSticky = false,
  toggleMobile,
}: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        position="fixed"
        top={0}
        zIndex={99}
        pointerEvents="none"
        width="100%"
      >
        <Flex
          background={scrolled ? colors.pageBackground : 'transparent'}
          transition="all 0.3s ease-out"
          height={{
            base: rem(100),
            md: rem(scrolled ? 90 : 120),
            lg: rem(scrolled ? 100 : 166),
          }}
          px={{ base: rem(28), lg: rem(72) }}
          // pt={{ base: 0, lg: rem(56) }}
          justifyContent="space-between"
          alignItems={{ base: 'center' }}
        >
          <Flex pointerEvents="all" alignItems="center">
            <Link href="/">
              <Box mt={rem(6)} p={rem(4)}>
                <Logo />
              </Box>
            </Link>

            <Flex
              display={{ base: 'none', md: 'flex' }}
              transition="all .3s ease-out"
              opacity={scrolled ? 0 : 1}
            >
              <Box ml={rem(125)}>
                <StyledHeadingText>DAYBYME</StyledHeadingText>
                <StyledHeadingText>MEDIA</StyledHeadingText>
                <StyledHeadingText>HOUSE</StyledHeadingText>
              </Box>
              <Box ml={rem(63)}>
                <StyledHeadingText>FULLSERVICE</StyledHeadingText>
                <HeadingText />
                <StyledHeadingText>AGENCY</StyledHeadingText>
              </Box>
            </Flex>
          </Flex>
          <Flex columnGap={rem(25)} alignItems="center" pointerEvents="all">
            {/* <Link href={{ pathname: '', query: { ...query } }} locale="en">
            <LangItem active={isEnglish}>ENG</LangItem>
          </Link>
          <Link href={{ pathname: '', query: { ...query } }} locale="sk">
            <LangItem active={!isEnglish}>SK</LangItem>
          </Link> */}
            <Box onClick={toggleMobile} cursor="pointer">
              <Hamburger />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const LangItem = styled(Text)<{
  active: boolean;
}>`
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  color: white;
  font-size: ${rem(20)};
  line-height: ${rem(20)};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledHeadingText = styled(Text)`
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  color: white;
  font-size: ${rem(20)};
  line-height: ${rem(22)};
`;

export const SocialLink = styled(Text)`
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  color: black;
  text-decoration: underline;
  font-size: ${rem(16)};
  line-height: 120%;
`;
