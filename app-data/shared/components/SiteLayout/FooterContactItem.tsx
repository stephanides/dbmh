import styled from 'styled-components';
import { colors, Paragraph } from '../../../shared/design';
import { Trans } from 'next-i18next';
import { Box, Flex, Text } from '@chakra-ui/react';
import { rem } from 'polished';

type FooterContactItemProps = {
  title: string;
  name?: string;
  phone: string;
  email: string;
};

export const FooterContactItem = ({
  title,
  name = '',
  phone,
  email,
}: FooterContactItemProps) => {
  return (
    <Wrapper
      px={{ base: rem(30), lg: rem(40), '3xl': rem(65) }}
      py={{ base: rem(36), lg: rem(46), '3xl': rem(78) }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text mb={{ base: rem(20), lg: rem(60) }}>
        <Trans i18nKey={title} />
      </Text>

      <Box>
        <Text
          fontWeight={700}
          fontSize={{ base: rem(18), '3xl': rem(20) }}
          mb={rem(8)}
        >
          {name}
        </Text>
        <a href={`tel:${phone}`}>
          <Text
            fontWeight={300}
            color={colors.primary}
            textDecoration="underline"
          >
            {phone}
          </Text>
        </a>
        <a href={`mailto:${email}`}>
          <Text
            fontWeight={300}
            color={colors.primary}
            textDecoration="underline"
          >
            {email}
          </Text>
        </a>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled(Flex)`
  position: relative;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-left: none;
  cursor: pointer;
  transition: all 0.6s ease-out;
  &:not-first {
    border-left: 1px solid #e0e0e0;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 6px;
    top: 0;
    display: block;
    transform-origin: left;
    background-color: ${colors.primary};
    transition: all 0.6s ease-out;
    transform: scaleX(0);
  }
  &:hover {
    box-shadow: 30px 0px 50px rgba(0, 0, 0, 0.08);
    &:before {
      transform: scaleX(1);
    }
  }
`;
