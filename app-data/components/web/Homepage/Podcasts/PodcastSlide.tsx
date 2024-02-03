import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  Mute,
  Unmute,
  colors,
  media,
} from '../../../../shared/design';
import { Podcast } from './Podcasts';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

type PodcastSlideProps = {
  podcast: Podcast;
  activeSlide: number;
  isActive: boolean;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
};

export const PodcastSlide = ({
  podcast,
  isActive,
  isMuted,
  setIsMuted,
}: PodcastSlideProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const audioRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (audioRef) {
      if (audioRef.current && isActive) {
        audioRef.current.play();

        audioRef.current.muted = isMuted;
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isActive, isMuted]);

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      backgroundColor="#151515"
      borderRadius={rem(20)}
      py={{ base: rem(24), lg: rem(64) }}
      px={{ base: rem(32), lg: rem(75) }}
    >
      <Flex
        minWidth={{ lg: rem(200), xl: rem(315) }}
        width={{ base: '100%', lg: rem(200), xl: rem(315) }}
        flexDir={{ base: 'row', lg: 'column' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        mt={rem(18)}
        mb={{ base: rem(60), lg: 0 }}
      >
        <Image
          src={podcast.logo}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: 'auto',
            height: '85px',
            borderRadius: rem(6),
          }}
          alt={podcast.company}
        />
        <Box display="none">
          <audio ref={audioRef} controls muted>
            <source src={podcast.podcast_example} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </Box>
        <Text
          fontSize={rem(16)}
          color="white"
          fontFamily={FONT_FAMILY_MONO}
          fontWeight={500}
          ml={{ base: rem(14), lg: 0 }}
          mt={{ base: 0, lg: rem(16) }}
          dangerouslySetInnerHTML={{ __html: podcast.company }}
        />
      </Flex>
      <Box width="100%">
        <Flex
          justifyContent="space-between"
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'center' }}
          mb={{ base: rem(42), lg: 0 }}
        >
          <Flex
            alignItems="center"
            mt={{ base: rem(24), lg: 0 }}
            minW={{ base: '100%', lg: rem(400) }}
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Image
              src={podcast.avatar}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: 'auto',
                height: '52px',
                borderRadius: '100%',
              }}
              alt={podcast.name}
            />
            <Text
              ml={rem(32)}
              color="white"
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              fontSize={rem(20)}
            >
              {podcast.name}
            </Text>
          </Flex>
          <Flex alignItems="center" width="100%" justifyContent="flex-end">
            <Box
              width={rem(100)}
              ml="calc(50% - 50px)"
              display={{ base: 'block', lg: 'none' }}
            >
              <img src="/podcasts/wave.gif" alt="Wave" />
            </Box>
            <StyledButton onClick={handleMuteUnmute}>
              {isMuted ? <Unmute /> : <Mute />}
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                as="span"
                lineHeight={rem(18)}
                position="relative"
                top={rem(2)}
                display={{ base: 'none', lg: 'block' }}
                ml={rem(8)}
              >
                {isMuted ? 'UNMUTE' : 'MUTE'}
              </Text>
            </StyledButton>
          </Flex>
        </Flex>
        <Box
          width={rem(132)}
          mt={rem(32)}
          display={{ base: 'none', lg: 'block' }}
        >
          <img src="/podcasts/wave.gif" alt="Wave" />
        </Box>
        <Box position="relative">
          <Text
            color="white"
            fontSize={{ base: rem(18), lg: rem(24) }}
            fontFamily={FONT_FAMILY_FORMULA.REGULAR}
            pt={rem(30)}
            maxW={rem(1000)}
          >
            {podcast.description[lang]}
          </Text>
          <Box
            position="absolute"
            width="100%"
            height={rem(132)}
            bottom={0}
            left={0}
            background={
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(21,21,21,1) 100%)'
            }
          />
        </Box>

        <Box mt={rem(38)}>
          <a href={podcast.href} target="_blank">
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              fontSize={{ base: rem(20), lg: rem(24) }}
              color={colors.primary}
              textTransform="uppercase"
              textDecoration="underline"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              {lang === 'en'
                ? 'Listen full podcast'
                : 'vypočujte si celý podcast'}
            </Text>
          </a>
        </Box>
      </Box>
    </Flex>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: ${rem(6)};
  color: white;
  padding: 10px 16px;
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  border: 1px solid ${colors.primary};
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 1px solid ${colors.primary};
  }
  &:focus {
    background: transparent;
    border: 1px solid ${colors.primary};
  }
  ${media.down.lg} {
    margin-left: auto;
  }
`;
