import { Box, Flex, Text } from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';

const ServicesItem = ({
  title,
  text,
  links,
}: {
  title: string;
  text: string;
  links: string[];
}) => (
  <Flex flexDirection="column" width="33.3%" justifyContent="space-between">
    <Box>
      <Text
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        fontSize={rem(52)}
        lineHeight={rem(72)}
        color={colors.primary}
        textTransform="capitalize"
      >
        <Trans i18nKey={title} />
      </Text>
      <Text
        color="rgba(255,255,255,.5)"
        fontSize={rem(22)}
        fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
        mt={rem(22)}
        mb={rem(75)}
        maxWidth={rem(332)}
      >
        <Trans i18nKey={text} />
      </Text>
    </Box>
    <Box>
      {links.map((link, index) => (
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={rem(18)}
          color="white"
          textTransform="capitalize"
          mb={rem(52)}
          key={index}
        >
          <Trans i18nKey={link} />
        </Text>
      ))}
    </Box>
  </Flex>
);

export const Services = () => {
  const { t } = useTranslation('services');
  return (
    <Box
      backgroundColor={colors.pageBackground}
      py={rem(90)}
      px={{ base: rem(72), '3xl': rem(220) }}
    >
      <Text
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        fontSize={rem(14)}
        color="white"
        textTransform="uppercase"
      >
        {t('services:our_services')}
      </Text>
      <Flex mt={rem(90)}>
        <ServicesItem
          title="services:idea"
          text="services:services_item_1_text"
          links={[
            'services:ideamaking',
            'services:branding',
            'services:strategy',
          ]}
        />
        <ServicesItem
          title="services:content"
          text="services:services_item_2_text"
          links={[
            'services:photo_production',
            'services:video_production',
            'services:graphic_design',
          ]}
        />
        <ServicesItem
          title="services:distribution"
          text="services:services_item_3_text"
          links={['services:social_media', 'services:ppc', 'services:pr']}
        />
      </Flex>
    </Box>
  );
};
