import { Box, BoxProps } from '@chakra-ui/react';
import { rem } from 'polished';
import { useInView } from 'react-intersection-observer';

export const AnimatedWrapper = ({
  index,
  ...rest
}: { index: number } & BoxProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Box ref={ref}>
      <Box
        transform={inView ? 'scale(1)' : 'scale(0)'}
        transition="all .5s ease-out"
        transitionDelay={`${200 * (index + 1)}ms`}
        {...rest}
        backgroundImage="none"
        opacity={1}
      >
        <Box
          key={index}
          overflow="hidden"
          borderRadius={rem(20)}
          position="relative"
          cursor="pointer"
          transition="all .5s ease-out"
          sx={{
            _hover: {
              opacity: 1,
              transform: 'scale(1.15)',
            },
          }}
          {...rest}
          left={0}
          top={0}
        />
      </Box>
    </Box>
  );
};
