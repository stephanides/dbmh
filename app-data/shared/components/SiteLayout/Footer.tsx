import React, { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
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
    <Box backgroundColor={colors.primary} py={rem(112)} px={rem(72)}>
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
      <Flex mt={rem(102)}>
        <Box width="50%">
          <ContactForm />
        </Box>
        <Flex width="50%" justifyContent="flex-end">
          <Box position="relative">
            <Box position="absolute" top={0} right={0}>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                fontSize={rem(200)}
                lineHeight={rem(200)}
                color={colors.primaryLight}
                userSelect="none"
              >
                {t('footer:contact')}
              </Text>
            </Box>
            <Flex
              position="relative"
              zIndex={1}
              mt={rem(100)}
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={rem(28)}
                color="black"
                lineHeight={rem(32)}
              >
                Daybyme Media House s. r. o.{' '}
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={rem(28)}
                color="black"
                lineHeight={rem(32)}
                mt={rem(52)}
                textAlign="right"
              >
                Grösslingova 52,
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={rem(28)}
                color="black"
                lineHeight={rem(32)}
                textAlign="right"
              >
                811 09 Bratislava -
              </Text>
            </Flex>
            <Flex columnGap={rem(8)} mt={rem(52)} justifyContent="flex-end">
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
            <Box position="absolute" bottom={0} width="100%">
              <Flex flexDirection="column" alignItems="flex-end">
                <FooterLogo />
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  fontSize={rem(16)}
                  color="black"
                  mt={rem(32)}
                >
                  EST. 2012
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const SocialLink = styled(Text)`
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  color: black;
  text-decoration: underline;
  font-size: ${rem(28)};
  line-height: 120%;
`;
