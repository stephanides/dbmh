import { Box, Text } from '@chakra-ui/react';
import { FONT_FAMILY_FORMULA } from '../../../../shared/design';
import { rem } from 'polished';

type ReferenceLabelType = {
  title: string;
};

export const ReferenceLabel = ({ title }: ReferenceLabelType) => {
  return (
    <Box
      backgroundColor="rgba(255,255,255,.1)"
      borderRadius={rem(4)}
      p={rem(8)}
    >
      <Text
        fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
        fontSize={rem(12)}
        color="white"
      >
        {title}
      </Text>
    </Box>
  );
};
