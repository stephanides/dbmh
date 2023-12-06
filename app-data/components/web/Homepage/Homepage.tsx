import { Box } from '@chakra-ui/react';
import { rem } from 'polished';
import { useState } from 'react';
import { HeadingCarousel } from './HeadingCarousel';

export const Homepage = () => {
  return (
    <Box mt={{ base: rem(108), lg: 0 }}>
      <HeadingCarousel />
    </Box>
  );
};
