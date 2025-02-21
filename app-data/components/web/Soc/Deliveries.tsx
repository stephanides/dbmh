import { Box, Flex, Text } from '@chakra-ui/react';
import {
  colors,
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  Quote,
  SocClient,
  SocViews,
  SocViewsMobile,
} from '../../../shared/design';
import { Element } from 'react-scroll';
import { rem } from 'polished';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { getVimeoEmbedUrl } from '../../../shared/helpers/getVimeoEmbedUrl';
import { ReelsSwiper } from './ReelsSwiper';
import { AnimatedImageWrapper } from '../../../shared/components';

const SectionTitle = ({ children }: { children: string }) => (
  <Text
    color={colors.primary}
    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
    fontSize={rem(36)}
  >
    {children}
  </Text>
);

export const Deliveries = ({
  setOpenGallery,
  setPhotoIndex,
}: {
  setOpenGallery: (open: boolean) => void;
  setPhotoIndex: (index: number) => void;
}) => {
  const { ref: mainImageView, inView: mainImageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: sideImageView, inView: sideImageInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: bottomImageView, inView: bottomImageInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: numbersImageView, inView: numbersImageInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: reelsView, inView: reelsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Element id="deliveries" name="deliveries">
      <Box px={{ base: rem(28), lg: rem(72) }}>
        <Text
          fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
          fontSize={{ base: rem(48), sm: rem(72) }}
          color="white"
        >
          Deliveries
        </Text>
        <Box mt={rem(80)}>
          <SectionTitle>Aftermovies</SectionTitle>
          <Text
            fontFamily={FONT_FAMILY_MONO.REGULAR}
            color="white"
            fontSize={rem(20)}
            mt={rem(64)}
            mb={rem(32)}
          >
            SOC Croatia 2022 - aftermovie
          </Text>
          <Box
            position="relative"
            paddingTop="56.25%"
            overflow="hidden"
            width="100%"
            height="0"
          >
            <iframe
              src={getVimeoEmbedUrl(`https://vimeo.com/832153910`)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </Box>
          <Text
            fontFamily={FONT_FAMILY_MONO.REGULAR}
            color="white"
            fontSize={rem(20)}
            mt={rem(64)}
            mb={rem(32)}
          >
            SOC Mille Miglia 2021 - aftermovie
          </Text>
          <Box
            position="relative"
            paddingTop="48%"
            overflow="hidden"
            width="100%"
            height="0"
          >
            <iframe
              src={getVimeoEmbedUrl(`https://vimeo.com/660415579`)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
        <Box mt={{ base: rem(120), lg: rem(172) }}>
          <Flex
            columnGap={rem(100)}
            flexDir={{ base: 'column', lg: 'row' }}
            rowGap={rem(80)}
          >
            <Box flex={1}>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                color="white"
                fontSize={rem(20)}
                mb={rem(32)}
                opacity={0.5}
              >
                Words from the crew:
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color="white"
                fontSize={{ base: rem(16), sm: rem(18) }}
                sx={{
                  strong: {
                    fontSize: rem(18),
                    fontFamily: FONT_FAMILY_FORMULA.EXTRA_BOLD,
                  },
                }}
              >
                <strong>
                  "Collaborating with Paolo and the entire SOC team was a truly
                  extraordinary passion project.
                </strong>{' '}
                Our mutual dedication to the world of supercars made every
                challenge feel purposeful, even when the demands were intense.
                There were countless sleepless nights and, quite literally, more
                coffee than fuel in the cars we were chasing. Yet, the
                opportunity to create content for some of the most prestigious
                automotive brands in the world brought out the best in us.{' '}
                <strong>
                  The fast pace of the events didn’t just push us —it inspired a
                  higher level of creativity and attention to detail.
                </strong>
                In the end, watching the content resonate with SOC’s global
                community of car collectors, sponsors, and members was the most
                rewarding part of the journey.”
              </Text>
              <Box position="relative" mt={rem(100)}>
                <Box
                  position="absolute"
                  width={rem(120)}
                  transform="translateY(-40%)"
                >
                  <Quote />
                </Box>
                <Text
                  fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                  color={colors.primary}
                  fontSize={{ base: rem(16), sm: rem(20) }}
                  letterSpacing="0.01em"
                >
                  Otto Vollmann, producer
                </Text>
              </Box>
            </Box>
            <Box flex={1}>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                color="white"
                fontSize={rem(20)}
                mb={rem(32)}
                opacity={0.5}
              >
                Words from the crew:
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                color="white"
                fontSize={{ base: rem(16), sm: rem(18) }}
                sx={{
                  strong: {
                    fontSize: rem(18),
                    fontFamily: FONT_FAMILY_FORMULA.EXTRA_BOLD,
                  },
                }}
              >
                <strong>
                  "Collaborating with Paolo and the entire SOC team was a truly
                  extraordinary passion project.
                </strong>{' '}
                Our mutual dedication to the world of supercars made every
                challenge feel purposeful, even when the demands were intense.
                There were countless sleepless nights and, quite literally, more
                coffee than fuel in the cars we were chasing. Yet, the
                opportunity to create content for some of the most prestigious
                automotive brands in the world brought out the best in us.{' '}
                <strong>
                  The fast pace of the events didn’t just push us —it inspired a
                  higher level of creativity and attention to detail.
                </strong>
                In the end, watching the content resonate with SOC’s global
                community of car collectors, sponsors, and members was the most
                rewarding part of the journey.”
              </Text>
              <Flex
                alignItems="center"
                mt={rem(100)}
                justifyContent="space-between"
              >
                <Box position="relative">
                  <Box
                    position="absolute"
                    width={rem(120)}
                    transform="translateY(-40%)"
                  >
                    <Quote />
                  </Box>
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    color={colors.primary}
                    fontSize={{ base: rem(16), sm: rem(20) }}
                    letterSpacing="0.01em"
                  >
                    Paolo Balladore, CEO of Supercar Owners Circle
                  </Text>
                </Box>
                <Box width={rem(83)}>
                  <SocClient />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box mt={rem(80)} ref={reelsView} overflowX="hidden">
        <Box px={{ base: rem(28), lg: rem(72) }}>
          <SectionTitle>Reels</SectionTitle>
        </Box>
        <ReelsSwiper reelsInView={reelsInView} />
      </Box>
      <Box px={{ base: rem(28), lg: rem(72) }} mt={rem(100)}>
        <Box
          position="relative"
          py={{ base: rem(120), md: rem(200), xl: rem(280) }}
          ref={numbersImageView}
        >
          <Box display={{ base: 'none', lg: 'block' }}>
            <SocViews />
          </Box>
          <Box display={{ base: 'block', lg: 'none' }}>
            <SocViewsMobile />
          </Box>
          <Box
            position="absolute"
            maxW={{ base: rem(260), sm: rem(400), xl: rem(570) }}
            width="100%"
            right={{ base: 0, md: rem(80), xl: rem(200) }}
            top={{ base: rem(60), sm: 0 }}
            opacity={numbersImageInView ? 1 : 0}
            transform={
              numbersImageInView ? 'translateY(0)' : 'translateY(60px)'
            }
            transition="all 1s ease-out"
          >
            <Image
              src="/images/soc/mobile.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Mobile"
            />
          </Box>
        </Box>
        <Box mt={rem(80)}>
          <SectionTitle>Photos</SectionTitle>
          <Box
            ref={mainImageView}
            mt={rem(64)}
            display={{ base: 'none', md: 'block' }}
          >
            <AnimatedImageWrapper
              opacity={mainImageInView ? 1 : 0}
              transform={mainImageInView ? 'translateY(0)' : 'translateY(60px)'}
              transition="all 1s ease-out"
              onClick={() => {
                setPhotoIndex(10);
                setOpenGallery(true);
              }}
            >
              <Image
                src="/images/soc/photos/1.jpg"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
                alt="Var"
              />
            </AnimatedImageWrapper>
            <Flex mt={rem(38)} columnGap={rem(32)} ref={sideImageView}>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(-60px)'
                }
                transition="all 1s ease-out"
                width="100%"
                onClick={() => {
                  setPhotoIndex(54);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/2.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Ferrari 2"
                />
              </AnimatedImageWrapper>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="100%"
                onClick={() => {
                  setPhotoIndex(55);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/3.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Bugatti"
                />
              </AnimatedImageWrapper>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="100%"
                onClick={() => {
                  setPhotoIndex(56);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/4.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Supercar"
                />
              </AnimatedImageWrapper>
            </Flex>
            <Flex mt={rem(38)} columnGap={rem(32)} ref={bottomImageView}>
              <AnimatedImageWrapper
                opacity={bottomImageInView ? 1 : 0}
                transform={
                  bottomImageInView ? 'translateX(0)' : 'translateX(-60px)'
                }
                transition="all 1s ease-out"
                width="69%"
                onClick={() => {
                  setPhotoIndex(27);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/7.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Var"
                />
              </AnimatedImageWrapper>
              <AnimatedImageWrapper
                opacity={bottomImageInView ? 1 : 0}
                transform={
                  bottomImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="33.34%"
                onClick={() => {
                  setPhotoIndex(30);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/6.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Supercar 6"
                />
              </AnimatedImageWrapper>
            </Flex>
          </Box>
          <Box
            ref={mainImageView}
            mt={rem(64)}
            display={{ base: 'block', md: 'none' }}
          >
            <AnimatedImageWrapper
              opacity={mainImageInView ? 1 : 0}
              transform={mainImageInView ? 'translateY(0)' : 'translateY(60px)'}
              transition="all 1s ease-out"
              onClick={() => {
                setPhotoIndex(10);
                setOpenGallery(true);
              }}
            >
              <Image
                src="/images/soc/photos/1.jpg"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
                alt="Var"
              />
            </AnimatedImageWrapper>
            <Flex mt={rem(38)} columnGap={rem(32)} ref={sideImageView}>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(-60px)'
                }
                transition="all 1s ease-out"
                width="100%"
                onClick={() => {
                  setPhotoIndex(54);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/2.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Ferrari 2"
                />
              </AnimatedImageWrapper>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="100%"
                onClick={() => {
                  setPhotoIndex(55);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/3.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Bugatti"
                />
              </AnimatedImageWrapper>
            </Flex>

            <AnimatedImageWrapper
              opacity={bottomImageInView ? 1 : 0}
              transform={
                bottomImageInView ? 'translateX(0)' : 'translateX(-60px)'
              }
              transition="all 1s ease-out"
              onClick={() => {
                setPhotoIndex(27);
                setOpenGallery(true);
              }}
              mt={rem(32)}
            >
              <Image
                src="/images/soc/photos/7.jpg"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: rem(20),
                }}
                alt="Var"
              />
            </AnimatedImageWrapper>
            <Flex mt={rem(38)} columnGap={rem(32)} ref={bottomImageView}>
              <AnimatedImageWrapper
                opacity={sideImageInView ? 1 : 0}
                transform={
                  sideImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="50%"
                onClick={() => {
                  setPhotoIndex(56);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/4.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Supercar"
                />
              </AnimatedImageWrapper>
              <AnimatedImageWrapper
                opacity={bottomImageInView ? 1 : 0}
                transform={
                  bottomImageInView ? 'translateX(0)' : 'translateX(60px)'
                }
                transition="all 1s ease-out"
                transitionDelay="200ms"
                width="50%"
                onClick={() => {
                  setPhotoIndex(30);
                  setOpenGallery(true);
                }}
              >
                <Image
                  src="/images/soc/photos/6.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: rem(20),
                  }}
                  alt="Supercar 6"
                />
              </AnimatedImageWrapper>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};
