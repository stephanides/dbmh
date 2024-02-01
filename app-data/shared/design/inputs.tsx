import { Checkbox, FormLabel, Input, Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
import { FONT_FAMILY_FORMULA, FONT_FAMILY_MONO } from './typography';
import { rem } from 'polished';
import { media } from './media';

export const StyledInput = styled(Input)`
  width: 100%;
  height: 100% !important;
  background-color: transparent !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
  color: black !important;
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  font-weight: 700;
  font-size: ${rem(60)} !important;
  position: relative;
  ::placeholder {
    font-family: ${FONT_FAMILY_MONO.REGULAR};
    font-weight: 700;
    color: white;
    font-size: ${rem(60)};
    line-height: ${rem(60)};
    ${media.down.md} {
      font-size: ${rem(32)} !important;
      line-height: ${rem(32)} !important;
    }
    ${media.down.sm} {
      font-size: ${rem(24)} !important;
      line-height: ${rem(24)} !important;
    }
  }
  &[aria-invalid='true'] {
    border-color: transparent !important;
  }
  &:focus {
    background-color: transparent !important;
    color: black !important;
  }
  &:not(:placeholder-shown) {
    color: black !important;
  }
  ${media.down.sm} {
    font-size: ${rem(32)} !important;
  }
  ${media.down.sm} {
    font-size: ${rem(24)} !important;
  }
`;

export const StyledTextArea = styled(Textarea)`
  width: 100%;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: #b2b2b2 !important;
  border-radius: 0 !important;
  color: black !important;
  font-family: ${FONT_FAMILY_MONO.REGULAR};
  font-weight: 700;
  font-size: ${rem(60)} !important;
  top: 30px;
  position: relative;
  ::placeholder {
    font-family: ${FONT_FAMILY_MONO.REGULAR};
    font-weight: 700;
    color: white;
    font-size: ${rem(60)};
    line-height: ${rem(60)};
    ${media.down.md} {
      font-size: ${rem(32)} !important;
      line-height: ${rem(32)} !important;
    }
    ${media.down.sm} {
      font-size: ${rem(24)} !important;
      line-height: ${rem(24)} !important;
    }
  }
  &[aria-invalid='true'] {
    border-color: transparent !important;
  }
  &:focus {
    background-color: transparent !important;
    color: black !important;
  }
  &:not(:placeholder-shown) {
    color: black !important;
  }
  ${media.down.lg} {
    top: 12px;
  }
  ${media.down.md} {
    font-size: ${rem(32)} !important;
    top: 24px;
  }
  ${media.down.sm} {
    font-size: ${rem(24)} !important;
    top: 6px;
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  color: white;
  font-size: 0.75rem !important;
`;

export const StyledCheckbox = styled(Checkbox)`
  .chakra-checkbox__control {
    width: 41px !important;
    height: 41px !important;
    background: #ff7e82 !important;
    border: none !important;
    svg {
      width: 24px !important;
      height: 24px !important;
      stroke: white !important;
      stroke-width: 3 !important;
    }
  }
  .chakra-checkbox__label {
    font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
    font-size: ${rem(16)};
  }
`;
