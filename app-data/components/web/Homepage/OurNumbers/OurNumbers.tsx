import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  ArrowBig,
  FONT_FAMILY_FORMULA,
  LogoBig,
  colors,
} from '../../../../shared/design';
import { rem } from 'polished';
import { TrustedBy } from './TrustedBy';
import { CounterCarousel } from './CounterCarousel';
import { OtherNumbersCarousel } from './OtherNumbersCarousel';

const SLIDES_1 = [
  {
    number: 10,
    numberSufix: 'Mil.',
    text: {
      en: 'označení hashtagov.',
      sk: 'označení hashtagov.',
    },
  },
  {
    number: 1,
    numberSufix: 'Mil.',
    text: {
      en: 'followers.',
      sk: 'sledovateľov.',
    },
  },
  {
    number: 75,
    numberSufix: 'K',
    text: {
      en: 'registrations.',
      sk: 'registrácií',
    },
  },
  {
    number: 400,
    numberSufix: 'K',
    text: {
      en: 'uploaded photos.',
      sk: 'nahratých fotografií.',
    },
  },
];

const SLIDES_2 = [
  {
    number: 250,
    numberSufix: '+',
    text: {
      en: 'influencers monthly.',
      sk: 'influencerov mesačne.',
    },
  },
  {
    number: 75,
    numberSufix: 'K',
    text: {
      en: 'microinfluencers in database.',
      sk: 'microinfluencerov v databáze.',
    },
  },
  {
    number: 500,
    numberSufix: '+',
    text: {
      en: 'campaigns.',
      sk: 'kampaní',
    },
  },
];

export const OurNumbers = () => {
  const { t } = useTranslation('ourNumbers');
  return (
    <Box pt={rem(292)} pb={rem(227)} px={rem(72)}>
      <Text
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        color="white"
        fontSize={rem(104)}
        lineHeight={rem(124)}
      >
        {t('ourNumbers:heading_1')}
      </Text>
      <Flex alignItems="center" columnGap={rem(24)}>
        <ArrowBig />
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="#767676"
          fontSize={rem(104)}
          lineHeight={rem(124)}
          mt={rem(16)}
        >
          {t('ourNumbers:heading_2')}
        </Text>
      </Flex>
      <Box mt={rem(236)}>
        <Flex>
          <Box width="50%">
            <Flex mb={rem(32)}>
              <Box width="calc(50% - 16px)" mr={rem(16)} height="auto">
                <CounterCarousel
                  slides={SLIDES_1}
                  classNameOverride="first-counter"
                />
              </Box>
              <Box width="calc(50% - 16px)" ml={rem(16)} height="auto">
                <CounterCarousel
                  slides={SLIDES_2}
                  classNameOverride="second-counter"
                />
              </Box>
            </Flex>
            <TrustedBy />
          </Box>
          <Box pl={rem(32)} width="50%" height={rem(692)}>
            <Flex height="100%">
              <Box
                border={`1px solid ${colors.border}`}
                borderRadius={rem(8)}
                p={rem(40)}
                pb={rem(0)}
                width="calc(50% - 16px)"
                height="100%"
                mr={rem(16)}
              >
                <OtherNumbersCarousel classNameOverride="other-numbers" />
              </Box>
              <Box
                border={`1px solid ${colors.border}`}
                borderRadius={rem(8)}
                p={rem(40)}
                width="calc(50% - 16px)"
                ml={rem(16)}
              >
                <Text
                  pb={rem(32)}
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  fontSize={rem(36)}
                  lineHeight={rem(42)}
                  color={colors.primary}
                >
                  Influencer marketing
                </Text>
                <Text
                  pb={rem(32)}
                  fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                  fontSize={rem(16)}
                  color={colors.primary}
                >
                  Database of local meme inluencers
                </Text>
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                  fontSize={rem(16)}
                  color="white"
                >
                  We began incorporating meme creators for marketing purposes,
                  and all the brands that experimented with this approach
                  expressed satisfaction.
                </Text>
                <Flex justifyContent="center" pt={rem(148)}>
                  <LogoBig />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
