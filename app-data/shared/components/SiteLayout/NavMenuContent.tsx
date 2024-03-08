import { rem } from 'polished';
import { scroller } from 'react-scroll';
import { MenuItem, MobileNavContent } from './style';
import { Box, Flex } from '@chakra-ui/react';
import { Close, LogoFull } from '../../design';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS, SocialLink } from './Navigation';
import { useRouter } from 'next/router';

const MENU_ITEMS = [
  {
    name: 'layout:highlights',
    href: 'highlights',
  },
  {
    name: 'layout:about_us',
    href: 'aboutUs',
  },
  {
    name: 'layout:our_products',
    href: 'ourProducts',
  },
  {
    name: 'layout:services',
    href: 'services',
  },
  {
    name: 'layout:references',
    href: 'references',
  },
  {
    name: 'layout:contact',
    href: 'contact',
  },
];

type NavMenuContentProps = {
  isOpen: boolean;
  toggleMobile: () => void;
  menuContentRef: any;
  setIsOpen: (value: boolean) => void;
};

export const NavMenuContent = ({
  isOpen,
  toggleMobile,
  menuContentRef,
  setIsOpen,
}: NavMenuContentProps) => {
  const { t, i18n } = useTranslation(['layout']);
  const router = useRouter();

  const handleScrollToContent = (content: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${content}`);
    } else {
      setIsOpen(false);
      scroller.scrollTo(content, {
        duration: 700,
        delay: 50,
        smooth: true,
        offset: -20,
      });
    }
  };

  return (
    <MobileNavContent
      py={{ base: rem(24), '3xl': rem(38) }}
      px={{ base: rem(24), md: rem(56) }}
      mobileOpen={isOpen}
      ref={menuContentRef}
    >
      <Flex flexDirection="column" height="100%" justifyContent="space-between">
        <Box>
          <Flex justifyContent="flex-end">
            <Box cursor="pointer" onClick={toggleMobile}>
              <Close />
            </Box>
          </Flex>
          <Box my={{ base: rem(32), '3xl': rem(40) }}>
            {MENU_ITEMS.map(({ name, href }) => (
              <MenuItem onClick={() => handleScrollToContent(href)} key={name}>
                {t(name)}
              </MenuItem>
            ))}
          </Box>
        </Box>
        <Flex justifyContent="space-between" py={rem(38)} alignItems="flex-end">
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
  );
};
