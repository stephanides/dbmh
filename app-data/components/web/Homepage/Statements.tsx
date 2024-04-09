import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Element } from 'react-scroll';
import { Box, Flex, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  FONT_FAMILY_FORMULA,
  media,
} from '../../../shared/design';

const CLASS_NAMES = ['slide-first', 'slide-third', 'slide-second'];

const StatementItem = ({
  activeSlide,
  imageUrl,
  preTitle,
  title,
  text,
  isActive,
  index,
  onNext,
  onPrevious,
}: {
  activeSlide: number;
  imageUrl: string;
  preTitle: string;
  title: {
    en: string;
    sk: string;
  };
  text: {
    en: string;
    sk: string;
  };
  isActive: boolean;
  index: number;
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  return (
    <Item
      backgroundImage={`url(${imageUrl})`}
      backgroundColor="black"
      className={CLASS_NAMES[activeSlide % CLASS_NAMES.length]}
    >
      <Flex
        pb={{ base: rem(60), lg: rem(120) }}
        height="100%"
        justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
        flexDir="column"
        pt={rem(40)}
        opacity={isActive ? '1' : '0'}
        transform={isActive ? 'translateX(0)' : 'translateX(40%)'}
        transition="all 1s ease-out"
        position="relative"
      >
        <Text
          maxW={rem(1600)}
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          color="white"
          fontSize={{ base: rem(32), lg: rem(64), '3xl': rem(82) }}
          lineHeight={{ base: rem(33), lg: rem(72), '3xl': rem(92) }}
          px={{ base: rem(32), lg: rem(147) }}
        >
          {title[lang]}
        </Text>
        <Text
          maxW={rem(1300)}
          fontFamily={FONT_FAMILY_FORMULA.REGULAR}
          color="white"
          fontSize={{ base: rem(12), lg: rem(22) }}
          lineHeight={{ base: rem(16), lg: rem(32) }}
          mt={rem(24)}
          mb={rem(62)}
          px={{ base: rem(32), lg: rem(147) }}
        >
          {text[lang]}
        </Text>
        <ControlsWrapper
          position="absolute"
          bottom={rem(62)}
          width="100%"
          px={{ base: rem(32), lg: rem(147) }}
        >
          <PaginationWrapper>
            <Box
              className={
                index === 0
                  ? 'swiper-pagination-bullet-active swiper-pagination-bullet'
                  : 'swiper-pagination-bullet'
              }
            />
            <Box
              className={
                index === 2
                  ? 'swiper-pagination-bullet-active swiper-pagination-bullet'
                  : 'swiper-pagination-bullet'
              }
            />
            <Box
              className={
                index === 1
                  ? 'swiper-pagination-bullet-active swiper-pagination-bullet'
                  : 'swiper-pagination-bullet'
              }
            />
          </PaginationWrapper>
          <Flex columnGap={rem(8)}>
            <SwiperArrow onClick={onPrevious}>
              <ArrowLeftCircle />
            </SwiperArrow>
            <SwiperArrow onClick={onNext}>
              <ArrowRightCircle />
            </SwiperArrow>
          </Flex>
        </ControlsWrapper>
      </Flex>
    </Item>
  );
};

export const Statements = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text here
      const newIndex = (activeSlide + 1) % CLASS_NAMES.length;
      setActiveSlide(newIndex);
    }, 5000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeSlide, CLASS_NAMES]);

  const handleNext = () => {
    const newIndex = (activeSlide + 1) % CLASS_NAMES.length;
    setActiveSlide(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (activeSlide + 2) % CLASS_NAMES.length;
    setActiveSlide(newIndex);
  };

  return (
    <Element name="highlights">
      <Box
        pt={{ base: rem(100), lg: rem(300) }}
        pr={{ base: rem(40), lg: rem(72) }}
        pl={{ base: 0, lg: rem(72) }}
      >
        <Wrapper
          p={rem(40)}
          pb={rem(30)}
          width={{ base: '95%', lg: '100%' }}
          position="relative"
          height={{ base: '460px', lg: '823px' }}
        >
          <StatementItem
            isActive={activeSlide === 0}
            imageUrl="/images/statements/statement_1.png"
            activeSlide={activeSlide}
            preTitle="HOT NEWS"
            title={{
              sk: 'Priniesli sme na Slovensko meme marketing a microinfluencer marketing',
              en: 'We were the first to introduce meme and microinfluencer marketing to Slovakia',
            }}
            text={{
              sk: '...a o ich efektivite sme presvedčili už desiatky značiek. Od ČSOB, cez Unilever až po Telekom',
              en: '...and we have successfully campaigned dozens of brands from banks, FMCG to mobile operators ever since.',
            }}
            index={0}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
          <StatementItem
            isActive={activeSlide === 2}
            imageUrl="/images/statements/statement_3.png"
            activeSlide={activeSlide + 1}
            preTitle="PR STATEMENT"
            title={{
              sk: 'Organicky sme nazbierali viac ako 1 milión sledovateľov na sociálnych sieťach',
              en: 'We reached 1 million followers on social media, organically',
            }}
            text={{
              sk: 'Dnes nosím, Dnes jem či Dnes cestujem sa stali #1 československým lifestyle trendom. Kumulatívny 1 milión sledovateľov na našich účtoch nás nestál ani jediné euro.',
              en: `Dnes nosím, Dnes jem or Dnes cestujem became #1 in lifestyle trends among young people in Slovakia and Czech Republic. And we didn't spend a dime for advertisement.`,
            }}
            index={1}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
          <StatementItem
            isActive={activeSlide === 1}
            imageUrl="/images/statements/statement_2.png"
            activeSlide={activeSlide + 2}
            preTitle="PR STATEMENT"
            title={{
              sk: 'Sme hrdými spoluzakladateľmi charity Rally Radosti',
              en: 'We are proud co-founders of the Rally Radosti charity',
            }}
            text={{
              sk: 'Stáli sme pri zrode a vývoji charitatívnej organizácie, ktorá za 5 rokov svojej existencie odovzdala viac ako 200 tisíc EUR slovenským nemocniciam a každoročne vyčarováva nespočet detských úsmevov. Sme aktívnymi organizátormi a partnermi.',
              en: 'After 5 years of its existence and donating over 200k EUR to hospitals in Slovakia, we are proud to say we were among the founders of the Rally Radosti. To this day, we are active members and partners.',
            }}
            index={2}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </Wrapper>
      </Box>
    </Element>
  );
};

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    width: 1;
  }
`;

const Item = styled(Box)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: all 1s ease-out;
  border-radius: ${rem(20)};
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${rem(20)};
`;

const Wrapper = styled(Box)`
  .slide-first {
    transform: translateY(0px);
    z-index: 3;
    ${media.down.lg} {
      transform: translateX(0px);
    }
  }
  .slide-second {
    transform: translateY(-80px) scale(0.9);
    z-index: 2;
    animation: ${opacity} 1000ms linear;
    ${media.down.lg} {
      transform: translate(20px, 20px);
    }
  }
  .slide-third {
    transform: translateY(-160px) scale(0.8);
    z-index: 1;
    animation: ${opacity} 1000ms linear;
    ${media.down.lg} {
      transform: translate(40px, 40px);
    }
  }
`;

const ControlsWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  .swiper-button-disabled {
    svg {
      path {
        stroke: #767676;
      }
    }
  }
`;

const PaginationWrapper = styled.div`
  position: relative;
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: rgba(217, 217, 217, 0.2);
  }
  .swiper-pagination-bullet-active {
    background-color: rgba(217, 217, 217, 1);
    transform: scale(1);
  }
`;

const SwiperArrow = styled.div`
  position: relative;
  cursor: pointer;
`;
