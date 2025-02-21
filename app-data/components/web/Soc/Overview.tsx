import { Box, Flex, Text, TextProps } from '@chakra-ui/react';
import { rem } from 'polished';
import {
  Buggati,
  colors,
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  OvMediaLogo,
  Pagani,
  Rimac,
  SocClient,
} from '../../../shared/design';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { AnimatedImageWrapper } from '../../../shared/components';

const Title = ({ children, ...rest }: { children: string } & TextProps) => (
  <Text
    fontFamily={FONT_FAMILY_MONO.REGULAR}
    opacity={0.5}
    color="white"
    fontSize={rem(20)}
    textTransform="uppercase"
    {...rest}
  >
    {children}
  </Text>
);

export const OverView = ({
  setOpenGallery,
  setPhotoIndex,
}: {
  setOpenGallery: (open: boolean) => void;
  setPhotoIndex: (index: number) => void;
}) => {
  const { ref: spotView, inView: spotInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: projectOverviewView, inView: projectOverviewInView } = useInView(
    {
      threshold: 0.5,
      triggerOnce: true,
    }
  );
  const { ref: productionView, inView: productionInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: clientView, inView: clientInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: mainImageView, inView: mainImageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: sideImageView, inView: sideImageInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Box>
      <Box
        px={{ base: rem(28), lg: rem(72) }}
        py={{ base: rem(120), lg: rem(172) }}
      >
        <Flex
          justifyContent="space-between"
          columnGap={rem(40)}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          rowGap={rem(80)}
        >
          <Box>
            <Box ref={spotView}>
              <Title
                opacity={spotInView ? 1 : 0}
                transform={spotInView ? 'translateX(0)' : 'translateX(-60px)'}
                transition="all 1s ease-out"
              >
                On the spot deliveries:
              </Title>
              <Box
                sx={{
                  li: {
                    color: 'white',
                    fontSize: rem(20),
                    fontFamily: FONT_FAMILY_MONO.REGULAR,
                    textTransform: 'uppercase',
                  },
                  ul: {
                    marginLeft: rem(24),
                  },
                }}
                mt={rem(32)}
                opacity={spotInView ? 1 : 0}
                transform={spotInView ? 'translateX(0)' : 'translateX(-60px)'}
                transition="all 1s ease-out"
                transitionDelay="300ms"
              >
                <ul>
                  <li>Official Long-Form Aftermovies</li>
                  <li>Daily Recap Reels</li>
                  <li>Short Viral Reels</li>
                  <li>Comprehensive Photo Reports</li>
                </ul>
              </Box>
            </Box>
            <Box mt={rem(86)} ref={productionView}>
              <Box
                opacity={productionInView ? 1 : 0}
                transform={
                  productionInView ? 'translateX(0)' : 'translateX(-60px)'
                }
                transition="all 1s ease-out"
              >
                <Title>Production:</Title>
                <Box width={{ base: rem(200), lg: rem(220) }} mt={rem(32)}>
                  <OvMediaLogo />
                </Box>
              </Box>
            </Box>
            <Box mt={rem(86)} ref={clientView}>
              <Box
                opacity={clientInView ? 1 : 0}
                transform={clientInView ? 'translateX(0)' : 'translateX(-60px)'}
                transition="all 1s ease-out"
              >
                <Title>Client:</Title>
                <Box mt={rem(32)} width={rem(137)}>
                  <SocClient />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW={{ base: rem(600), '2xl': rem(872) }}
            ref={projectOverviewView}
          >
            <Box
              opacity={projectOverviewInView ? 1 : 0}
              transform={
                projectOverviewInView ? 'translateX(0)' : 'translateX(60px)'
              }
              transition="all 1s ease-out"
              transitionDelay="200ms"
            >
              <Title>Project overview:</Title>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                color="white"
                fontSize={{ base: rem(26), sm: rem(32) }}
                sx={{
                  strong: {
                    color: colors.primary,
                    fontSize: rem(32),
                    fontFamily: FONT_FAMILY_FORMULA.EXTRA_BOLD,
                  },
                }}
                mt={rem(32)}
              >
                OV MEDIA was entrusted with{' '}
                <strong>producing online video and photographic content</strong>{' '}
                for Supercar Owners Circle, recognized by Top Gear as "one of
                the most exclusive car clubs in the world.”
              </Text>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.REGULAR}
                color="white"
                fontSize={rem(20)}
                mt={rem(52)}
              >
                The SOC events we covered continue to attract global attention,
                amplifying the brand’s reputation and creating viral engagement
                across digital platforms. Each video and photo set we produced
                captured the exclusive lifestyle and thrill that SOC represents.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box px={{ base: rem(28), lg: rem(72) }} ref={mainImageView}>
        <Box
          opacity={mainImageInView ? 1 : 0}
          transform={mainImageInView ? 'translateY(0)' : 'translateY(60px)'}
          transition="all 1s ease-out"
        >
          <AnimatedImageWrapper
            onClick={() => {
              setPhotoIndex(18);
              setOpenGallery(true);
            }}
          >
            <Image
              src="/images/soc/ferrari.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Var"
            />
          </AnimatedImageWrapper>
        </Box>
        <Flex
          mt={{ base: rem(16), sm: rem(38) }}
          columnGap={{ base: rem(16), sm: rem(32) }}
          ref={sideImageView}
        >
          <AnimatedImageWrapper
            opacity={sideImageInView ? 1 : 0}
            transform={sideImageInView ? 'translateX(0)' : 'translateX(-60px)'}
            transition="all 1s ease-out"
            width="100%"
            onClick={() => {
              setPhotoIndex(39);
              setOpenGallery(true);
            }}
          >
            <Image
              src="/images/soc/mercedes.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Mercedes"
            />
          </AnimatedImageWrapper>
          <AnimatedImageWrapper
            opacity={sideImageInView ? 1 : 0}
            transform={sideImageInView ? 'translateX(0)' : 'translateX(60px)'}
            transition="all 1s ease-out"
            transitionDelay="200ms"
            width="100%"
            onClick={() => {
              setPhotoIndex(37);
              setOpenGallery(true);
            }}
          >
            <Image
              src="/images/soc/car-2.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Var"
            />
          </AnimatedImageWrapper>
        </Flex>
      </Box>
      <Box
        px={{ base: rem(28), lg: rem(72) }}
        py={{ base: rem(80), sm: rem(120), lg: rem(172) }}
      >
        <Flex
          justifyContent="space-between"
          flexDir={{ base: 'column', lg: 'row' }}
          rowGap={rem(32)}
        >
          <Text
            fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
            color="white"
            fontSize={rem(32)}
            lineHeight={rem(41)}
          >
            Production <br />
            playbook
          </Text>
          <Box maxW={{ base: rem(600), '2xl': rem(872) }}>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
              color="white"
              fontSize={rem(20)}
              lineHeight={rem(28)}
              letterSpacing="0.01em"
            >
              Our journey with SOC began in 2018 in Milan, Italy, where our
              collaboration quickly expanded. As the official content creation
              team, we were tasked with covering SOC’s bespoke events across the
              globe. Capturing the essence of high-speed luxury was no easy task
              - logistical challenges, tight deadlines, and constant travel were
              part of the job. Whether chasing the world’s fastest supercars or
              delivering high-quality content overnight, we thrived on the
              adrenaline of every event.
            </Text>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              color="white"
              fontSize={rem(20)}
              lineHeight={rem(28)}
              letterSpacing="0.01em"
              mt={rem(32)}
            >
              Working under such intense conditions also meant creating on-site
              content for prestigious brands like Bugatti and Rimac or Pagani,
              further elevating the stakes.
            </Text>
            <Flex
              justifyContent="space-between"
              rowGap={rem(20)}
              mt={rem(72)}
              alignItems="center"
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
            >
              <Buggati />
              <Rimac />
              <Pagani />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
