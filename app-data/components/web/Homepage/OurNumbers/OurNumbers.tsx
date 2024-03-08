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
    number: 1,
    numberSufix: {
      en: 'Mil+ followers',
      sk: 'Mil+ sledovateľov',
    },
    text: {
      en: `With brands Dnes nosím, Dnes jem a Dnes cestujem, we've created trend that's been followed by almost 1 million people cumulatively.`,
      sk: 'Značkami Dnes nosím, Dnes jem a Dnes cestujem sme vytvorili trend, ktorý dodnes na FB a IG kumulatívne sleduje viac ako 1 milión ľudí.',
    },
  },
  {
    number: 10,
    numberSufix: {
      en: 'Mil+ tags',
      sk: 'Mil+ označení',
    },
    text: {
      en: `Hashtags #dnesnosim, #dnesjem, #dnescestujem and others that we've created and protected with trademarks, have over 10 million of tags on social media.`,
      sk: 'Hashtagy #dnesnosim, #dnesjem, #dnescestujem a ďalšie, ktoré sme vymysleli a ktoré si chránime ochrannou známkou, evidujú viac ako 10 miliónov označení.',
    },
  },
  {
    number: 600,
    numberSufix: {
      en: 'K+ UGC on Daybyme.com',
      sk: 'Tis+ fotiek na Daybyme.com',
    },
    text: {
      en: `More than 600 thousand photos were uploaded by users to our lifestyle network Daybyme.com.`,
      sk: 'Na lifestyle sieť Daybyme.com bolo používateľmi nahratých viac ako 600 tisíc fotografií.',
    },
  },
];

const SLIDES_2 = [
  {
    number: 250,
    numberSufix: {
      en: '+ influencers',
      sk: '+ influencers',
    },
    text: {
      en: `On average, we involve more than 250 influencers in our clients' campaigns every month.`,
      sk: 'Do kampaní našich klientov v priemere mesačne zapájame viac ako 250 influencerov.',
    },
  },
  {
    number: 60,
    numberSufix: {
      sk: 'Tis+ microinflu',
      en: 'K+ microinflu',
    },
    text: {
      en: 'Our databases contain tens of thousands of micro-influencers from Slovakia and the Czech Republic.',
      sk: 'V našich databázach sa nachádzajú desiatky tisíc microinfluencerov zo Slovenska a Česka.',
    },
  },
  {
    number: 500,
    numberSufix: {
      sk: '+ kampaní',
      en: '+ campaigns ',
    },
    text: {
      en: 'Over the past 10 years, we have successfully managed hundreds of campaigns for clients in various segments.',
      sk: 'Za posledných 10 rokov sme úspešne odservisovali stovky kampaní pre klientov najrôznejšich segmentov.',
    },
  },
];

export const OurNumbers = () => {
  const { t, i18n } = useTranslation('ourNumbers');
  const lang = i18n.language ?? 'en';
  return (
    <Box
      pt={{ base: rem(104), md: rem(140), '3xl': rem(292) }}
      pb={{ base: rem(60), lg: rem(120), '2xl': rem(180), '3xl': rem(227) }}
      px={{ base: rem(28), lg: rem(72) }}
    >
      <Text
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        color="white"
        fontSize={{ base: rem(34), xs: rem(44), lg: rem(104) }}
        lineHeight={{ base: rem(58), lg: rem(124) }}
        pr={{ base: rem(40), lg: 0 }}
      >
        {t('ourNumbers:heading_1')}
      </Text>
      <Flex
        alignItems={{ base: 'flex-start', lg: 'center' }}
        columnGap={rem(24)}
      >
        <Box
          mt={{ base: rem(16), lg: 0 }}
          width={{ base: rem(48), lg: rem(96) }}
          minWidth={{ base: rem(48), lg: rem(96) }}
        >
          <ArrowBig />
        </Box>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="#767676"
          fontSize={{ base: rem(34), xs: rem(44), lg: rem(104) }}
          lineHeight={{ base: rem(58), lg: rem(124) }}
          mt={rem(16)}
        >
          {t('ourNumbers:heading_2')}
        </Text>
      </Flex>
      <Box mt={{ base: rem(100), md: rem(140), '3xl': rem(236) }}>
        <Flex flexDirection={{ base: 'column', '2xl': 'row' }}>
          <Box width={{ base: '100%', '2xl': '50%' }}>
            <Flex mb={rem(32)} flexDir={{ base: 'column', md: 'row' }}>
              <Box
                width={{ base: '100%', md: 'calc(50% - 16px)' }}
                mr={{ base: 0, md: rem(16) }}
                height="auto"
                mb={{ base: rem(32), md: 0 }}
              >
                <CounterCarousel
                  slides={SLIDES_1}
                  classNameOverride="first-counter"
                />
              </Box>
              <Box
                width={{ base: '100%', md: 'calc(50% - 16px)' }}
                ml={{ base: 0, md: rem(16) }}
                height="auto"
              >
                <CounterCarousel
                  slides={SLIDES_2}
                  classNameOverride="second-counter"
                />
              </Box>
            </Flex>
            <Box display={{ base: 'none', md: 'block' }} mb={rem(32)}>
              <TrustedBy />
            </Box>
          </Box>
          <Box
            pl={{ base: 0, '2xl': rem(32) }}
            width={{ base: '100%', '2xl': '50%' }}
            height={{ base: 'auto', md: rem(722) }}
          >
            <Flex height="100%" flexDir={{ base: 'column', md: 'row' }}>
              <Box
                border={`1px solid ${colors.border}`}
                borderRadius={rem(8)}
                pb={rem(0)}
                width={{ base: '100%', md: 'calc(50% - 16px)' }}
                height="100%"
                mr={{ base: 0, md: rem(16) }}
                mb={{ base: rem(32), md: 0 }}
              >
                <OtherNumbersCarousel classNameOverride="other-numbers" />
              </Box>
              <Box
                border={`1px solid ${colors.border}`}
                borderRadius={rem(8)}
                p={{ base: rem(32), '3xl': rem(40) }}
                width={{ base: '100%', md: 'calc(50% - 16px)' }}
                mr={{ base: 0, md: rem(16) }}
              >
                <Text
                  pb={rem(32)}
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  fontSize={{ base: rem(26), '3xl': rem(26) }}
                  lineHeight={rem(42)}
                  color={colors.primary}
                  textTransform="uppercase"
                >
                  Rally Radosti
                </Text>
                <Text
                  pb={rem(32)}
                  fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                  fontSize={rem(16)}
                  color={colors.primary}
                >
                  {lang === 'en'
                    ? 'We are co-organizers and proud partners'
                    : 'Sme spoluorganizátormi a hrdými partnermi'}
                </Text>
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                  fontSize={rem(16)}
                  color="white"
                >
                  {lang === 'en'
                    ? `In its 5 years of existence, Rally Radosti has donated more than 200,000 EUR to Slovak hospitals. The money went to children's departments of hospitals in Bratislava, Banská Bystrica, Košice and Michalovce.`
                    : 'Za 5 rokov existencie odovzdala Rally Radosti viac ako 200 tisíc EUR slovenským nemocniciam. Peniaze putovali detským oddeleniam nemocníc v Bratislave, Banskej Bystrici, Košiciach a Michalovciach.'}
                </Text>
                <Flex
                  justifyContent="center"
                  pt={{ base: rem(100), '3xl': rem(148) }}
                >
                  <LogoBig />
                </Flex>
              </Box>
            </Flex>
            <Box mt={rem(32)} display={{ base: 'block', md: 'none' }}>
              <TrustedBy />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
