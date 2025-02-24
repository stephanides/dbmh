import { Box, Flex, keyframes, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useInView } from 'react-intersection-observer';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  colors,
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  SwipeRight,
  TimelinePoint,
} from '../../../shared/design';
import styled from 'styled-components';
SwiperCore.use([Navigation, Pagination]);

const swipeAnimation = keyframes`
  0% { transform: translateX(0); }
  30% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
`;

const TimelineItem = ({
  year,
  listItems,
}: {
  year: string;
  listItems: string[];
}) => {
  return (
    <Box pt={rem(12)}>
      <Box>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="#FAF7F5"
          fontSize={rem(40)}
          lineHeight={rem(40)}
          opacity={0.2}
        >
          {year}
        </Text>
      </Box>
      <Flex ml={rem(42)}>
        <Box position="relative" top={rem(-20)}>
          <Box>
            <TimelinePoint />
          </Box>
          <Box
            height="100%"
            width="1px"
            background={colors.primary}
            pos="relative"
            left={rem(16)}
          />
        </Box>
        <Box
          sx={{
            li: {
              color: 'white',
              fontSize: { base: rem(12), sm: rem(16) },
              fontFamily: FONT_FAMILY_MONO.REGULAR,
              mt: rem(16),
            },
            ul: {
              marginLeft: rem(24),
            },
          }}
        >
          <Text
            fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
            fontSize={rem(20)}
            color={colors.primary}
            mt={rem(72)}
          >
            {year}
          </Text>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};

export const Timeline = () => {
  const { ref: contentView, inView: contentInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <Box pb={{ base: rem(80), sm: rem(120), lg: rem(172) }} overflowX="hidden">
      <Box px={{ base: rem(28), lg: rem(72) }}>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="white"
          fontSize={rem(32)}
          lineHeight={rem(41)}
        >
          6 years of <br />
          dynamic collaboration
        </Text>
      </Box>
      <Box ref={contentView} mt={rem(100)} position="relative">
        <Box position="absolute" top={rem(42)}>
          <svg
            width="1920"
            height="2"
            viewBox="0 0 1920 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8.74228e-08"
              y1="1"
              x2="1920"
              y2="1.00017"
              stroke="#252525"
              strokeWidth="2"
              strokeDasharray="12 12"
            />
          </svg>
        </Box>
        <Box
          width="100%"
          sx={{
            '.swiper': { overflow: 'visible' },
            '.swiper-slide': { height: 'auto' },
          }}
          mt={{ base: rem(25), md: rem(45) }}
          opacity={contentInView ? 1 : 0}
          transform={contentInView ? 'translateX(0)' : 'translateX(100%)'}
          transition="all 1s ease-out"
        >
          <Swiper
            className="similar-swiper"
            spaceBetween={20}
            slidesPerView={1.8}
            slidesOffsetBefore={28}
            slidesOffsetAfter={28}
            navigation={{
              prevEl: `.swiper-button-prev-timeline`,
              nextEl: `.swiper-button-next-timeline`,
            }}
            breakpoints={{
              992: {
                slidesPerView: 1.5,
                slidesOffsetBefore: 72,
                slidesOffsetAfter: 72,
              },
              1200: {
                slidesPerView: 1.7,
                slidesOffsetBefore: 72,
                slidesOffsetAfter: 72,
              },
              1440: {
                slidesPerView: 4.7,
                slidesOffsetBefore: 72,
                slidesOffsetAfter: 72,
              },
              1920: {
                slidesPerView: 4.7,
                slidesOffsetBefore: 72,
                slidesOffsetAfter: 72,
              },
            }}
          >
            <SwiperSlide>
              <TimelineItem
                year="2018"
                listItems={[
                  'May - Our collaboration started as a support crew during production in Milan, Italy',
                  'June - Month after, we were delivering content from private track day in Goodwood, UK',
                  'September - support crew during the main event in Andermatt, Switzerland',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TimelineItem
                year="2019"
                listItems={[
                  'January - 4 days of producing content during first event in Dubai and Abu Dhabi, UAE ',
                  'August - 4 day long production as a main crew during the main event in Adermatt, Switzerland',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TimelineItem
                year="2020"
                listItems={[
                  'August - 4 day long production as a main crew during the main event in Gstaad, Switzerland',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TimelineItem
                year="2021"
                listItems={[
                  "June - 8 days on road during the world's most beautiful race Mille Miglia with daily recap pictures and reels, Brescia<->Rome, Italy",
                  'July - 4 days during private gathering in Caleberg, Germany',
                  'September - flagship event in Croatia, during this event were managing and leading external content team',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TimelineItem
                year="2022"
                listItems={[
                  'June - private trackday during legendary 24h Le Mans race, France',
                  'September - flagship event in Croatia on road from Zagreb to Šibenik, covering daily content for over 5 days',
                  'September - private roadtrip from Torino to Monaco',
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Flex
        columnGap={rem(8)}
        px={{ base: rem(28), lg: rem(72) }}
        mt={{ base: rem(20), sm: rem(50) }}
        display={{ base: 'none', lg: 'flex' }}
        sx={{
          '.swiper-button-disabled': {
            opacity: 0.3,
          },
        }}
      >
        <SwiperArrow className={`swiper-button-prev-timeline`}>
          <ArrowLeftCircle />
        </SwiperArrow>
        <SwiperArrow className={`swiper-button-next-timeline`}>
          <ArrowRightCircle />
        </SwiperArrow>
      </Flex>
      <Flex
        mt={{ base: rem(20), sm: rem(64) }}
        width="100%"
        justifyContent="center"
      >
        <Box animation={`${swipeAnimation} 3s infinite ease-in-out`}>
          <Box width={rem(40)}>
            <SwipeRight />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const SwiperArrow = styled.div`
  position: relative;
  cursor: pointer;
`;
