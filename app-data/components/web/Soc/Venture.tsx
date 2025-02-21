import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FONT_FAMILY_FORMULA, FONT_FAMILY_MONO } from '../../../shared/design';
import { rem } from 'polished';

const Title = ({ children }: { children: string }) => (
  <Text
    fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
    fontSize={rem(16)}
    opacity={0.5}
    color="white"
    mb={rem(8)}
  >
    {children}
  </Text>
);

const Item = ({ children }: { children: string }) => (
  <Text
    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
    color="white"
    fontSize={rem(16)}
  >
    {children}
  </Text>
);

export const Venture = () => {
  return (
    <Box position="relative">
      <Box position="relative">
        <Box display={{ base: 'none', lg: 'block' }}>
          <Image
            src="/images/venture-map.svg"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Venture map"
          />
        </Box>
        <Box display={{ base: 'block', lg: 'none' }}>
          <Image
            src="/images/venture-map-mobile.svg"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Venture map"
          />
        </Box>
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          px={{ base: rem(24), md: rem(75) }}
        >
          <Text
            fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
            color="white"
            fontSize={{ base: rem(24), md: rem(32) }}
            mt={{ base: rem(40), md: rem(96) }}
            maxW={rem(700)}
          >
            Our photography and filming ventures spanned across eight countries.
          </Text>
          <Flex width="100%" justifyContent="flex-end" mt={rem(200)}>
            <Box
              position={{ base: 'absolute', lg: 'relative' }}
              bottom={{ base: rem(200), lg: 'unset' }}
            >
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                Germany
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
              >
                SWITZERLAND
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                FRANCE
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                CROATIA
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                ITALY
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                DUBAI
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                UAE
              </Text>
              <Text
                fontFamily={FONT_FAMILY_MONO.REGULAR}
                fontWeight={700}
                color="white"
                fontSize={{
                  base: rem(24),
                  sm: rem(36),
                  lg: rem(24),
                  xl: rem(36),
                }}
                lineHeight={{
                  base: rem(32),
                  sm: rem(45),
                  lg: rem(32),
                  xl: rem(45),
                }}
                textTransform="uppercase"
              >
                UK
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        my={{ base: rem(120), lg: rem(172) }}
        px={{ base: rem(28), lg: rem(72) }}
      >
        <Flex
          justifyContent="space-between"
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          rowGap={rem(80)}
        >
          <Box>
            <Text
              fontFamily={FONT_FAMILY_MONO.REGULAR}
              opacity={0.5}
              color="white"
              fontSize={rem(20)}
              textTransform="uppercase"
            >
              team:
            </Text>
            <Box mt={rem(24)}>
              <Title>Photography</Title>
              <Item>Daniel Minárik</Item>
            </Box>
            <Box mt={rem(24)}>
              <Title>Camera</Title>
              <Item>Martin Porubčanský</Item>
              <Item>Lukáš Holota</Item>
              <Item>Michal Miklovič</Item>
              <Item>Otto Vollmann</Item>
            </Box>
            <Box mt={rem(24)}>
              <Title>Edit</Title>
              <Item>Richard Raymann</Item>
              <Item>Dávid Nemec</Item>
              <Item>Lukáš Kolenič</Item>
              <Item>Martin Porubčanský</Item>
            </Box>
            <Box mt={rem(24)}>
              <Title>Sound</Title>
              <Item>Martin Kubečka</Item>
              <Item>Tomáš Košjar</Item>
              <Item>Tomáš Balák</Item>
            </Box>
            <Box mt={rem(24)}>
              <Title>Production assistant</Title>
              <Item>Denis Mlynek</Item>
            </Box>
            <Box mt={rem(24)}>
              <Title>Producer & Drone op.</Title>
              <Item>Otto Vollmann</Item>
            </Box>
          </Box>
          <Box maxW={{ base: rem(600), '2xl': rem(872) }}>
            <Text
              fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
              fontSize={rem(20)}
              letterSpacing="0.01em"
              color="white"
            >
              Our production team focused on capturing the most crucial and
              awe-inspiring moments from each event. For every SOC event, we
              delivered:
            </Text>
            <Box
              sx={{
                li: {
                  color: 'white',
                  fontSize: rem(20),
                  fontFamily: FONT_FAMILY_FORMULA.EXTRA_BOLD,
                  textTransform: 'uppercase',
                },
                ul: {
                  marginLeft: rem(24),
                },
              }}
              mt={rem(32)}
            >
              <ul>
                <li>Official Long-Form Aftermovies</li>
                <li>Daily Recap Reels</li>
                <li>Short Viral Reels</li>
                <li>Comprehensive Photo Reports</li>
              </ul>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
                fontSize={rem(20)}
                letterSpacing="0.01em"
                color="white"
                mt={rem(32)}
              >
                Depending on the scale of each event, our crew ranged from 3 to
                8 specialists, working tirelessly to deliver unparalleled
                content.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
