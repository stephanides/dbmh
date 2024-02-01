import { Box, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element } from 'react-scroll';
import { Trans, useTranslation } from 'react-i18next';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';
import styled from 'styled-components';

const ServicesItem = ({
  title,
  text,
  links,
}: {
  title: string;
  text: string;
  links: string[];
}) => (
  <Flex
    flexDirection="column"
    width={{ base: '100%', lg: '33.3%' }}
    justifyContent="space-between"
    background={{ base: colors.backgroundDark, lg: 'transparent' }}
    py={{ base: rem(32), lg: 0 }}
    px={{ base: rem(24), lg: 0 }}
    height={{ base: '100%', lg: 'auto' }}
    borderRadius={{ base: rem(20), lg: 0 }}
  >
    <Box>
      <Text
        fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
        fontSize={{ base: rem(36), xl: rem(52) }}
        lineHeight={{ base: rem(40), xl: rem(72) }}
        color={colors.primary}
        textTransform="capitalize"
      >
        <Trans i18nKey={title} />
      </Text>
      <Text
        color="rgba(255,255,255,.5)"
        fontSize={{ base: rem(16), xl: rem(22) }}
        fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
        mt={rem(22)}
        mb={{ base: rem(56), lg: rem(75) }}
        maxWidth={rem(332)}
      >
        <Trans i18nKey={text} />
      </Text>
    </Box>
    <Box>
      {links.map((link, index) => (
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={{ base: rem(16), xl: rem(18) }}
          color="white"
          textTransform="capitalize"
          mb={{ base: rem(24), lg: rem(52) }}
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
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  return (
    <Element name="services">
      <Box
        backgroundColor={colors.pageBackground}
        py={rem(90)}
        px={{ base: rem(28), lg: rem(72), '3xl': rem(220) }}
        display={{ base: 'none', lg: 'block' }}
      >
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={rem(14)}
          color="white"
          textTransform="uppercase"
        >
          {t('services:our_services')}
        </Text>
        <Flex mt={rem(90)} columnGap={rem(32)}>
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
              'services:animations',
              'services:graphic_design',
            ]}
          />
          <ServicesItem
            title="services:distribution"
            text="services:services_item_3_text"
            links={[
              'services:social_media',
              'services:influencer_management',
              'services:performance_campaigns',
            ]}
          />
        </Flex>
      </Box>
      <Box px={rem(28)} py={rem(90)} display={{ base: 'block', lg: 'none' }}>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={rem(12)}
          color="white"
          textTransform="uppercase"
          mb={rem(24)}
        >
          {t('services:our_services')}
        </Text>
        <Box>
          <Swiper
            observer
            tag={SwiperWrapper}
            slidesPerView={1.3}
            spaceBetween={20}
            direction="horizontal"
            speed={1200}
            key={`services-${lang}`}
          >
            <SwiperSlide tag={StyledSwiperSlide}>
              <ServicesItem
                title="services:idea"
                text="services:services_item_1_text"
                links={[
                  'services:ideamaking',
                  'services:branding',
                  'services:strategy',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide tag={StyledSwiperSlide}>
              <ServicesItem
                title="services:content"
                text="services:services_item_2_text"
                links={[
                  'services:photo_production',
                  'services:animations',
                  'services:graphic_design',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide tag={StyledSwiperSlide}>
              <ServicesItem
                title="services:distribution"
                text="services:services_item_3_text"
                links={[
                  'services:social_media',
                  'services:influencer_management',
                  'services:performance_campaigns',
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Element>
  );
};

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto !important;
`;
