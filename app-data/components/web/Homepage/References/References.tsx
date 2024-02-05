import { Box, Flex, Text } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import * as ReactDOMServer from 'react-dom/server';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { ReferencesItem } from './ReferencesItem';
import { REFERENCE_ITEMS } from './referencesData';
import { rem } from 'polished';
import { FONT_FAMILY_FORMULA } from '../../../../shared/design';
import styled from 'styled-components';

SwiperCore.use([Pagination]);

export const References = () => {
  return (
    <Element name="references">
      <Box width="100%">
        <Box width="100%" height="100%" position="relative">
          <Swiper
            tag={SwiperWrapper}
            slidesPerView={1}
            centeredSlides
            speed={1200}
            direction="horizontal"
            loop
            pagination={{
              el: `.pagination-bullet-references-main`,
              clickable: true,
              bulletActiveClass: 'pagination-bullet-reference-main-active',
              renderBullet: (index, className) =>
                ReactDOMServer.renderToStaticMarkup(
                  <Bullet className={className}>
                    <Text>{index + 1}</Text>
                  </Bullet>
                ),
            }}
          >
            <SwiperSlide>
              <ReferencesItem {...REFERENCE_ITEMS[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <ReferencesItem {...REFERENCE_ITEMS[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <ReferencesItem {...REFERENCE_ITEMS[2]} />
            </SwiperSlide>
          </Swiper>
          <PaginationWrapper
            position="absolute"
            bottom={{ base: rem(32), lg: '100px' }}
            right={{ base: rem(32), lg: rem(100) }}
            zIndex={1}
            className={`swiper-pagination pagination-bullet-references-main`}
          ></PaginationWrapper>
        </Box>
      </Box>
    </Element>
  );
};

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    align-items: center;
  }
`;

const Bullet = styled(Box)`
  width: auto;
  height: auto;
  padding: 4px;
  background: transparent;
  opacity: 0.5;
  p {
    font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
    font-size: ${rem(16)};
    color: white;
  }
`;

const PaginationWrapper = styled(Flex)`
  .pagination-bullet-reference-main-active {
    opacity: 1;
  }
`;
