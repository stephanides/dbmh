import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
type ReferencesImageProps = {
  images: {
    src: string;
    alt: string;
  }[];
  mobileImages: {
    src: string;
    alt: string;
  }[];
  activeIndex: number;
};

export const ReferencesImage = ({
  images,
  mobileImages,
  activeIndex,
}: ReferencesImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Update the text here
      const newIndex = (currentIndex + 1) % images.length;

      setCurrentIndex(newIndex);
    }, 4000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, images, activeIndex]);

  return (
    <Box width="100vw" height="100%" position="relative">
      <Box display={{ base: 'none', md: 'block' }}>
        <Box
          backgroundColor=" rgba(0, 0, 0, 0.6)"
          width="100%"
          height="100%"
          top={0}
          left={0}
          position="absolute"
          zIndex={2}
        />
        {images.map((image, i) => (
          <StyledImage
            backgroundImage={`url(${image.src})`}
            isActive={currentIndex === i}
            key={i}
            width="100%"
            height="100%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
        ))}
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <Box
          backgroundColor=" rgba(0, 0, 0, 0.6)"
          width="100%"
          height="100%"
          top={0}
          left={0}
          position="absolute"
          zIndex={2}
        />
        {mobileImages.map((image, i) => (
          <StyledImage
            backgroundImage={`url(${image.src})`}
            isActive={currentIndex === i}
            key={i}
            width="100%"
            height="100%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
        ))}
      </Box>
    </Box>
  );
};

type StyledImageProps = {
  isActive: boolean;
};

const StyledImage = styled(Box)<StyledImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: all 0.8s ease-out;
`;
