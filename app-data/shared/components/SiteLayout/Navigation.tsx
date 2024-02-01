import { useRouter } from 'next/router';

import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
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
import { Box, Flex, Text, useOutsideClick } from '@chakra-ui/react';
import { rem } from 'polished';
import { HeadingText } from './HeadingText';

export const SOCIAL_LINKS = {
  fb: 'https://google.sk',
  ig: 'https://google.sk',
  in: 'https://google.sk',
};

type NavigationProps = {
  isSticky?: boolean;
  toggleMobile: () => void;
};

export const Navigation = ({
  isSticky = false,
  toggleMobile,
}: NavigationProps) => {
  const router = useRouter();
  const { i18n } = useTranslation(['layout']);
  const lang = i18n.language ?? 'en';
  const isEnglish = lang === 'en';
  const { query } = router;

  return (
    <Box
      mt={isSticky ? rem(52) : 0}
      position={{ base: 'fixed', lg: isSticky ? 'sticky' : 'relative' }}
      top={isSticky ? -1 : 0}
      zIndex={99}
      pointerEvents="none"
      display={{ base: isSticky ? 'none' : 'block', lg: 'block' }}
      width="100%"
    >
      <Flex
        background={isSticky ? 'transparent' : colors.pageBackground}
        height={{ base: rem(100), md: rem(120), lg: rem(166) }}
        px={{ base: rem(28), lg: rem(72) }}
        pt={{ base: 0, lg: rem(56) }}
        justifyContent="space-between"
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <Flex pointerEvents="all">
          <Link href="/">
            <Box mt={rem(6)}>
              <Logo />
            </Box>
          </Link>
          {!isSticky && (
            <Flex display={{ base: 'none', md: 'flex' }}>
              <Box ml={rem(125)}>
                <StyledHeadingText>DAYBYME</StyledHeadingText>
                <StyledHeadingText>MEDIA</StyledHeadingText>
                <StyledHeadingText>HOUSE</StyledHeadingText>
              </Box>
              <Box ml={rem(63)}>
                <StyledHeadingText>FULLSERVIS</StyledHeadingText>
                <HeadingText />
                <StyledHeadingText>AGENCY</StyledHeadingText>
              </Box>
            </Flex>
          )}
        </Flex>
        <Flex columnGap={rem(25)} alignItems="center" pointerEvents="all">
          <Link href={{ pathname: '', query: { ...query } }} locale="en">
            <LangItem active={isEnglish}>ENG</LangItem>
          </Link>
          <Link href={{ pathname: '', query: { ...query } }} locale="sk">
            <LangItem active={!isEnglish}>SK</LangItem>
          </Link>
          <Box onClick={toggleMobile} cursor="pointer">
            <Hamburger />
          </Box>
        </Flex>
      </Flex>
    </Box>
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
