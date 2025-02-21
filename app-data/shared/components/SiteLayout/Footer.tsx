import React, { useEffect } from 'react';
import AOS from 'aos';
import { Element } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  ContactEn,
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  FooterLogo,
  colors,
} from '../../design';
import { rem } from 'polished';
import { ContactForm } from './ContactForm';
import { SOCIAL_LINKS } from './Navigation';
import styled from 'styled-components';

export const Footer = () => {
  const { t } = useTranslation(['footer']);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <Element name="contact">
      <Box
        backgroundColor={colors.primary}
        py={rem(112)}
        px={{ base: rem(28), lg: rem(72) }}
      >
        <Text
          color="black"
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={rem(48)}
          lineHeight={rem(48)}
        >
          {t('footer:title')}
        </Text>
        <Text
          mt={rem(24)}
          color="black"
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={rem(28)}
        >
          {t('footer:subtitle')}
        </Text>
        <Flex
          mt={{ base: rem(60), xl: rem(102) }}
          flexDir={{ base: 'column', xl: 'row' }}
        >
          <Box
            width={{ base: '100%', xl: '50%' }}
            minWidth={{ base: 'auto', xl: rem(700) }}
          >
            <ContactForm />
          </Box>
          <Flex
            width={{ base: '100%', xl: '50%' }}
            justifyContent={{ base: 'center', xl: 'flex-end' }}
            mt={{ base: rem(80), xl: 0 }}
            ml={{ base: 0, xl: rem(16) }}
          >
            <Box
              position="relative"
              width="100%"
              maxW={{ base: '100%', xl: rem(813) }}
            >
              <Flex position="relative">
                <Flex
                  height={{ base: rem(80), sm: rem(100), lg: rem(140) }}
                  width="100%"
                  justifyContent="flex-start"
                >
                  <ContactEn />
                </Flex>
                <Box
                  position="absolute"
                  top="calc(50% - 14px)"
                  right={{ base: 'unset', xl: 0 }}
                  left={{ base: 0, xl: 'unset' }}
                  width="100%"
                >
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={rem(28)}
                    color="black"
                    lineHeight={rem(32)}
                    textAlign={{ base: 'left', xl: 'right' }}
                    zIndex={2}
                  >
                    Daybyme Media House s. r. o.{' '}
                  </Text>
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                flexDirection="column"
                alignItems={{ base: 'flex-start', xl: 'flex-end' }}
              >
                <Flex
                  position="relative"
                  zIndex={1}
                  top={{ base: rem(0), md: rem(-80) }}
                  flexDirection="column"
                >
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    mt={rem(52)}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Office:
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Galvaniho 19
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Campus GBC V
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    821 04 Bratislava
                  </Text>
                  <a href="mailto:hi@daybyme.com">
                    <Text
                      fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                      fontSize={{ base: rem(24), md: rem(28) }}
                      color="black"
                      lineHeight={{ base: rem(28), md: rem(32) }}
                      textAlign={{ base: 'left', xl: 'right' }}
                      textDecoration="underline"
                    >
                      hi@daybyme.com
                    </Text>
                  </a>
                </Flex>
                <Flex
                  position="relative"
                  zIndex={1}
                  top={{ base: rem(0), md: rem(-80) }}
                  flexDirection="column"
                >
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    mt={rem(52)}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Invoice details:
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Daybyme Media House s.r.o.
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Grösslingova 52 c
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    811 09 Bratislava
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    Slovak Republic
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    ID: 50409760
                  </Text>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(24), md: rem(28) }}
                    color="black"
                    lineHeight={{ base: rem(28), md: rem(32) }}
                    textAlign={{ base: 'left', xl: 'right' }}
                  >
                    VAT ID: SK2120332467
                  </Text>
                </Flex>
              </Flex>

              <Flex
                columnGap={{ base: rem(24), xl: rem(8) }}
                position="relative"
                top={{ base: rem(40), md: rem(-32) }}
                justifyContent={{ base: 'flex-start', xl: 'flex-end' }}
              >
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
              <Box
                position={{ base: 'relative', xl: 'relative' }}
                mt={rem(20)}
                width="100%"
              >
                <Flex
                  flexDirection="column"
                  alignItems={{ base: 'center', xl: 'flex-end' }}
                  mt={{ base: rem(100), xl: 0 }}
                >
                  <FooterLogo />
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={rem(16)}
                    color="black"
                    mt={rem(32)}
                  >
                    EST. 2014
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Element>
  );
};

const SocialLink = styled(Text)`
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  color: black;
  text-decoration: underline;
  font-size: ${rem(28)};
  line-height: 120%;
`;
