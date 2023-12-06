import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  PrimaryButton,
  Unmute,
  colors,
} from '../../../../shared/design';
import { Podcast } from './Podcasts';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

type PodcastSlideProps = {
  podcast: Podcast;
  activeSlide: number;
};

export const PodcastSlide = ({ podcast, activeSlide }: PodcastSlideProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const audioRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (navigator.userActivation.hasBeenActive) {
      if (audioRef.current && activeSlide === podcast.index) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [activeSlide]);

  const handleMuteUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <Flex>
      <Box minWidth={rem(315)} width={rem(315)}>
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
          mt={rem(18)}
          dangerouslySetInnerHTML={{ __html: podcast.company }}
        />
      </Box>
      <Box width="100%">
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
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
          <StyledButton onClick={handleMuteUnmute}>
            <Unmute />{' '}
            <Text
              fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
              as="span"
              lineHeight={rem(18)}
              position="relative"
              top={rem(2)}
            >
              UNMUTE
            </Text>
          </StyledButton>
        </Flex>
        <Box width={rem(132)} mt={rem(32)}>
          <img src="/podcasts/wave.gif" alt="Wave" />
        </Box>
        <Box position="relative">
          <Text
            color="white"
            fontSize={rem(24)}
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
              fontSize={rem(24)}
              color={colors.primary}
              textTransform="uppercase"
              textDecoration="underline"
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
`;
