import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FONT_FAMILY_MONO } from '../../../../shared/design';
type HeadingImageProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export const HeadingImage = ({ images }: HeadingImageProps) => {
  const [displayImage, setDisplayImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text here
      const newIndex = (currentIndex + 1) % images.length;
      setDisplayImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }, 3000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);
  return (
    <Image
      src={displayImage.src}
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: '173px',
        height: '100%',
        opacity: 0.5,
        transition: 'all .3s ease-out',
      }}
      alt={displayImage.alt}
    />
  );
};

const StyledHeadingText = styled(Text)`
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  color: white;
  font-size: ${rem(20)};
  line-height: ${rem(22)};
`;
