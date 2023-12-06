import { Checkbox, FormLabel, Input, Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
import { colors } from './colors';
import { FONT_FAMILY_MONO } from './typography';
import { rem } from 'polished';

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
  top: 72px;
  position: relative;
  ::placeholder {
    font-family: ${FONT_FAMILY_MONO.REGULAR};
    font-weight: 700;
    color: white;
    font-size: ${rem(60)};
    line-height: ${rem(60)};
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
`;

export const StyledFormLabel = styled(FormLabel)`
  color: white;
  font-size: 0.75rem !important;
`;
