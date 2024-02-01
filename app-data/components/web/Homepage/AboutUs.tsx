import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';
import Image from 'next/image';

export const AboutUs = () => {
  const { t } = useTranslation('aboutUs');
  return (
    <Element name="aboutUs">
      <Box
        position="relative"
        pb={{ base: rem(120), '2xl': rem(140), '3xl': rem(272) }}
        pt={{ base: rem(120), lg: rem(220), '2xl': rem(272), '3xl': rem(272) }}
      >
        <Box
          backgroundColor={colors.pageBackground}
          mx={{ base: rem(20), md: rem(80), '2xl': rem(225) }}
          position="relative"
        >
          <Box maxW={rem(1322)} position="relative">
            <Box
              position={{ base: 'relative', xl: 'absolute' }}
              right={0}
              top={{ base: rem(40), xl: rem(-116) }}
              zIndex={2}
              display={{ base: 'flex', xl: 'block' }}
              justifyContent={{ base: 'flex-end', xl: 'center' }}
            >
              <Image
                src={'/images/about_us_2.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '173px', height: 'auto' }}
                alt={'O nas'}
              />
            </Box>
            <Box
              position="absolute"
              left={rem(-148)}
              top={rem(660)}
              zIndex={2}
              display={{ base: 'none', xl: 'block' }}
            >
              <Image
                src={'/images/about_us_1.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '173px', height: 'auto' }}
                alt={'Otto Vollman'}
              />
            </Box>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              color="white"
              fontSize={{ base: rem(26), md: rem(42), xl: rem(64) }}
              lineHeight={{ base: rem(30), md: rem(48), xl: rem(72) }}
              position="relative"
              zIndex={3}
            >
              {t('aboutUs:text_1')}
            </Text>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              color="white"
              fontSize={{ base: rem(26), md: rem(42), xl: rem(64) }}
              lineHeight={{ base: rem(30), md: rem(48), xl: rem(72) }}
              mt={rem(64)}
              position="relative"
              zIndex={3}
            >
              {t('aboutUs:text_2')}
            </Text>
          </Box>
        </Box>

        <Box
          position="relative"
          left={0}
          top={rem(-40)}
          zIndex={2}
          display={{ base: 'block', xl: 'none' }}
        >
          <Image
            src={'/images/about_us_1.jpg'}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '173px', height: 'auto' }}
            alt={'Otto Vollman'}
          />
        </Box>
      </Box>
    </Element>
  );
};
