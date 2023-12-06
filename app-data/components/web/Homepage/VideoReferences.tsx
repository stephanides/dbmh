import { Box, Flex } from '@chakra-ui/react';
import { colors } from '../../../shared/design';
import { rem } from 'polished';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';

type VideoReferenceProps = {
  logo?: ReactNode;
  title?: string;
  text?: string;
  videoUrl: string;
};

const VideoReference = ({
  logo,
  title,
  text,
  videoUrl,
}: VideoReferenceProps) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <StyledBox
      width="100%"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      borderRadius={rem(12)}
      overflow="hidden"
      cursor="pointer"
      position="relative"
    >
      <Shadow />
      <video
        ref={videoRef}
        autoPlay={false}
        muted
        loop
        src={videoUrl}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </StyledBox>
  );
};

export const VideoReferences = () => {
  return (
    <Box backgroundColor={colors.pageBackground} py={rem(180)} px={rem(72)}>
      <Flex columnGap={rem(32)}>
        <Box width="25%" position="relative">
          <VideoReference videoUrl="/video/video_1.mp4" />
        </Box>
        <Box top={rem(-50)} width="25%" position="relative">
          <VideoReference videoUrl="/video/video_1.mp4" />
        </Box>
        <Box width="25%" position="relative" top={rem(128)}>
          <VideoReference videoUrl="/video/video_1.mp4" />
        </Box>
        <Box width="25%" position="relative">
          <VideoReference videoUrl="/video/video_1.mp4" />
        </Box>
      </Flex>
    </Box>
  );
};

const Shadow = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  transition: transform 0.5s ease-in-out;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  height: 35%;
  width: 100%;
`;

const StyledBox = styled(Box)`
  position: relative;
  &:hover {
    ${Shadow} {
      transform: translateY(100%);
    }
  }
`;
