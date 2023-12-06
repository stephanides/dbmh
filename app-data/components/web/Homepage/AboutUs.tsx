import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';
import Link from 'next/link';
import Image from 'next/image';

export const AboutUs = () => {
  const { t } = useTranslation('aboutUs');
  return (
    <Box py={rem(272)} backgroundColor={colors.pageBackground} px={rem(225)}>
      <Box maxW={rem(1322)} position="relative">
        <Box position="absolute" right={0} top={rem(-116)} zIndex={2}>
          <Image
            src={'/images/about_us_2.jpg'}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '173px', height: 'auto' }}
            alt={'O nas'}
          />
        </Box>
        <Box position="absolute" left={rem(-148)} top={rem(660)} zIndex={2}>
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
          fontSize={rem(64)}
          lineHeight={rem(72)}
          position="relative"
          zIndex={3}
        >
          {t('aboutUs:text_1')}
        </Text>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="white"
          fontSize={rem(64)}
          lineHeight={rem(72)}
          mt={rem(64)}
          position="relative"
          zIndex={3}
        >
          {t('aboutUs:text_2')}
          {t('aboutUs:text_3')}{' '}
          <Link href="#references">
            <Text
              as="span"
              color={colors.primary}
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              fontSize={rem(48)}
              lineHeight={rem(54)}
            >
              (view references)
            </Text>
          </Link>{' '}
          {t('aboutUs:text_4')}
        </Text>
      </Box>
    </Box>
  );
};
