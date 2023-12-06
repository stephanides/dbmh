import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FONT_FAMILY_MONO } from '../../design';
import { rem } from 'polished';
import { Text } from '@chakra-ui/react';

const HEADING_TEXT_VALUES = [
  'MARKETING',
  'INFLUENCER',
  'PRODUCTION',
  'CONTENT',
  'ADVERTISING',
];

export const HeadingText = () => {
  const [displayText, setDisplayText] = useState(HEADING_TEXT_VALUES[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text here
      const newIndex = (currentIndex + 1) % HEADING_TEXT_VALUES.length;
      setDisplayText(HEADING_TEXT_VALUES[newIndex]);
      setCurrentIndex(newIndex);
    }, 1000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, HEADING_TEXT_VALUES]);
  return <StyledHeadingText>{displayText}</StyledHeadingText>;
};

const StyledHeadingText = styled(Text)`
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  color: white;
  font-size: ${rem(20)};
  line-height: ${rem(22)};
`;
