import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { MobileNavContent } from './style';
import Link from 'next/link';
import { Logo } from '../Logo';
import {
  Close,
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  Hamburger,
  LogoFull,
  colors,
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

const MENU_ITEMS = [
  {
    name: 'layout:highlights',
    href: '',
  },
  {
    name: 'layout:about_us',
    href: '',
  },
  {
    name: 'layout:our_products',
    href: '',
  },
  {
    name: 'layout:services',
    href: '',
  },
  {
    name: 'layout:references',
    href: '',
  },
  {
    name: 'layout:contact',
    href: '',
  },
];

type NavigationProps = {
  isSticky?: boolean;
};

export const Navigation = ({ isSticky = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation(['layout']);
  const lang = i18n.language ?? 'en';
  const isEnglish = lang === 'en';
  const activeTab = router.pathname;
  const { query } = router;
  const menuContentRef = useRef(null);

  const toggleMobile = () => setIsOpen(!isOpen);

  const handleScrollToContent = (content: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${content}`);
    }
    scroller.scrollTo(content, {
      duration: 700,
      delay: 50,
      smooth: true,
      offset: -20,
    });
  };

  const handleScrollToContentMobile = (content: string) => {
    setIsOpen(false);
    if (router.pathname !== '/') {
      router.push(`/#${content}`);
    }
    scroller.scrollTo(content, {
      duration: 700,
      delay: 50,
      smooth: true,
      offset: 0,
    });
  };

  useOutsideClick({
    ref: menuContentRef,
    handler: () => setIsOpen(false),
  });

  return (
    <Box
      mt={isSticky ? rem(52) : 0}
      position={isSticky ? 'sticky' : 'relative'}
      top={isSticky ? -1 : 0}
      zIndex={99}
    >
      <Flex
        background={isSticky ? 'transparent' : colors.pageBackground}
        height={rem(166)}
        px={rem(72)}
        pt={rem(56)}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Flex>
          <Link href="/">
            <Box mt={rem(6)}>
              <Logo />
            </Box>
          </Link>
          {!isSticky && (
            <>
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
            </>
          )}
        </Flex>
        <Flex columnGap={rem(25)} alignItems="center">
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
      <MobileNavContent
        py={rem(38)}
        px={rem(56)}
        mobileOpen={isOpen}
        ref={menuContentRef}
      >
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Box>
            <Flex justifyContent="flex-end">
              <Box cursor="pointer" onClick={toggleMobile}>
                <Close />
              </Box>
            </Flex>
            <Box my={rem(40)}>
              {MENU_ITEMS.map(({ name, href }) => (
                <Link href={href} key={name}>
                  <MenuItem>{t(name)}</MenuItem>
                </Link>
              ))}
            </Box>
          </Box>
          <Flex
            justifyContent="space-between"
            py={rem(38)}
            alignItems="flex-end"
          >
            <LogoFull />
            <Flex columnGap={rem(8)}>
              <a href={SOCIAL_LINKS.fb} target="_blank">
                <SocialLink>FB.</SocialLink>
              </a>
              <a href={SOCIAL_LINKS.ig} target="_blank">
                <SocialLink>IG.</SocialLink>
              </a>
              <a href={SOCIAL_LINKS.in} target="_blank">
                <SocialLink>IN.</SocialLink>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </MobileNavContent>
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

const MenuItem = styled(Text)`
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  font-weight: 700;
  font-size: ${rem(64)};
  color: white;
`;

export const SocialLink = styled(Text)`
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  color: black;
  text-decoration: underline;
  font-size: ${rem(16)};
  line-height: 120%;
`;
