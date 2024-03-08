import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';
import Image from 'next/image';
import { HeadingImage } from './Heading/HeadingImage';

export const AboutUs = () => {
  const { t } = useTranslation('aboutUs');
  return (
    <Element name="aboutUs">
      <Box
        position="relative"
        pb={{ base: rem(240), lg: rem(120), '2xl': rem(140), '3xl': rem(200) }}
        pt={{ base: rem(120), lg: rem(220), '2xl': rem(272), '3xl': rem(272) }}
      >
        <Box
          backgroundColor={colors.pageBackground}
          mx={{ base: rem(20), md: rem(80), '2xl': rem(225) }}
          position="relative"
        >
          <Box
            maxW={rem(1322)}
            position="relative"
            mt={{ base: rem(160), lg: 0 }}
          >
            <Box position="relative">
              <Box
                position="absolute"
                top={rem(-120)}
                left="50%"
                display={{ base: 'none', lg: 'block' }}
              >
                <Image
                  src={'/images/team/daniel_cacala.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '173px', height: 'auto', opacity: 0.5 }}
                  alt={'Daniel Čačala'}
                />
              </Box>
              <Box
                position="absolute"
                top="50%"
                right={{ base: rem(-40), '2xl': rem(-200) }}
                display={{ base: 'none', lg: 'block' }}
              >
                <Image
                  src={'/images/team/denis_mlynek.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '173px', height: 'auto', opacity: 0.5 }}
                  alt={'Denis Mlynek'}
                />
              </Box>
              <Box
                position="absolute"
                top={rem(-120)}
                right="0"
                display={{ base: 'block', lg: 'none' }}
              >
                <HeadingImage
                  images={[
                    {
                      alt: 'Denis Mlynek',
                      src: '/images/team/denis_mlynek.jpg',
                    },
                    {
                      alt: 'Daniel Čačala',
                      src: '/images/team/daniel_cacala.jpg',
                    },
                  ]}
                />
              </Box>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                color="white"
                fontSize={{
                  base: rem(26),
                  md: rem(42),
                  xl: rem(48),
                  '3xl': rem(64),
                }}
                lineHeight={{
                  base: rem(30),
                  md: rem(48),
                  xl: rem(54),
                  '3xl': rem(72),
                }}
                position="relative"
                zIndex={3}
              >
                {t('aboutUs:text_1')}
              </Text>
              <Box
                position="absolute"
                bottom={rem(-170)}
                left={{ base: rem(-40), '2xl': rem(-170) }}
              >
                <Image
                  src={'/images/team/otto_vollman.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '173px', height: 'auto', opacity: 0.5 }}
                  alt={'Otto Vollman'}
                />
              </Box>
            </Box>
            <Box position="relative" mt={{ base: rem(100), md: rem(160) }}>
              <Box
                position="absolute"
                bottom="60px"
                right={rem(-60)}
                display={{ base: 'none', lg: 'block' }}
              >
                <Image
                  src={'/images/team/denisa_moravcikova.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '173px', height: 'auto', opacity: 0.5 }}
                  alt={'Denisa Moravčíková'}
                />
              </Box>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                color="white"
                fontSize={{
                  base: rem(26),
                  md: rem(42),
                  xl: rem(48),
                  '3xl': rem(64),
                }}
                lineHeight={{
                  base: rem(30),
                  md: rem(48),
                  xl: rem(54),
                  '3xl': rem(72),
                }}
                mt={rem(48)}
                position="relative"
                zIndex={3}
              >
                {t('aboutUs:text_2')}
              </Text>
              <Box
                position="absolute"
                left="40%"
                bottom="-120px"
                display={{ base: 'none', lg: 'block' }}
              >
                <Image
                  src={'/images/team/daniel_minarik.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '173px', height: 'auto', opacity: 0.5 }}
                  alt={'Daniel Minarik'}
                />
              </Box>
              <Box
                position="absolute"
                right="0"
                bottom="-120px"
                display={{ base: 'block', lg: 'none' }}
              >
                <HeadingImage
                  images={[
                    {
                      alt: 'Denisa Moravčíková',
                      src: '/images/team/denisa_moravcikova.jpg',
                    },
                    {
                      alt: 'Daniel Minarik',
                      src: '/images/team/daniel_minarik.jpg',
                    },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};
