import { Box, BoxProps } from '@chakra-ui/react';
import { rem } from 'polished';

export const AnimatedImageWrapper = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & BoxProps) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={rem(20)}
      cursor="pointer"
      sx={{
        img: { transition: 'all .5s ease-out' },
        _hover: { img: { transform: 'scale(1.15)' } },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
