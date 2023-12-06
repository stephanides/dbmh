import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { rem } from 'polished';
import { CustomContainer, SiteLayout } from '../app-data/shared/components';
import { colors, PrimaryLink } from '../app-data/shared/design';
import { Icon404 } from '../app-data/shared/design/icons/Icon404';

const Custom404 = () => {
  const { t } = useTranslation(['common']);
  return (
    <SiteLayout
      withContact={false}
      currentUrl="/kontakt"
      description="Správny partner 
    pre Vašu cestu."
    >
      <CustomContainer>
        <Flex
          pt={{ base: rem(40), xl: rem(210) }}
          pb={{ base: rem(40), xl: rem(244) }}
          flexDirection={{ base: 'column-reverse', xl: 'row' }}
          alignItems="center"
        >
          <Box mr={{ base: 0, xl: rem(117) }} mt={{ base: rem(80), xl: 0 }}>
            <img src="/media/404.svg" />
          </Box>
          <Box maxWidth={rem(666)}>
            <Text fontWeight={700} color={colors.primary}>
              ERROR 404
            </Text>
            <Text
              as="h1"
              fontSize={{ base: rem(40), md: rem(60) }}
              color={colors.text}
              mt={rem(42)}
              mb={rem(82)}
              lineHeight={{ base: rem(60), md: rem(78) }}
            >
              {t('common:page_not_found')}
            </Text>
            <PrimaryLink href="/">{t('common:go_back')}</PrimaryLink>
          </Box>
        </Flex>
      </CustomContainer>
    </SiteLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['layout', 'common', 'footer'])),
    },
  };
}

export default Custom404;
