import Link from 'next/link';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { colors } from './colors';
import { rem } from 'polished';
import { FONT_FAMILY_FORMULA } from './typography';

type ButtonProps = {
  size?: 'small' | 'big';
};

export const PrimaryButton = styled(Button)<ButtonProps>`
  padding: 10px 16px;
  font-size: ${({ size }) => (size === 'big' ? '1.25rem' : '0.875rem')};
  color: ${colors.textInverted};
  background-color: ${colors.primary};
  transition: background-color 0.3s ease-out;
  border-radius: 25px;
  border: none;
  box-shadow: none !important;
  font-weight: 400;
  &:hover {
    background-color: ${colors.primaryHover};
  }
  &:focus {
    background-color: ${colors.primaryHover};
  }
  &:active {
    background-color: ${colors.primaryHover} !important;
  }
  &:disabled {
    background-color: #8dd2ff;
  }
`;

export const SecondaryButton = styled(Button)<ButtonProps>`
  padding: 0;
  font-size: ${rem(32)};
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  background: transparent;
  color: black;
  transition: background-color 0.3s ease-out;
  border-radius: 0px;
  border: none;
  box-shadow: none !important;
  font-weight: 400;
  display: inline;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0;
    background: #000;
    height: 4px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover {
    background: none;
    color: black !important;
    &:after {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
  &:focus {
    background: none;
    color: black !important;
  }
  &:active {
    color: black !important;
    color: black !important;
    background: none;
  }
  &:disabled {
    background-color: transparent;
    color: black !important;
    pointer-events: none;
    opacity: 0.6;
  }
`;

export const PrimaryLink = styled(Link)`
  padding: 30px 60px;
  font-size: 1rem;
  color: ${colors.text};
  background-color: white !important;
  transition: background-color 0.3s ease-out;
  border: 1px solid ${colors.border};
  outline: 1px solid white;
  cursor: pointer;
  text-decoration: none !important;
  font-weight: 400;
  transition: all 0.3s ease-out;
  &:hover {
    border: 1px solid ${colors.primary};
    outline: 1px solid ${colors.primary};
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.04);
  }
  @media (max-width: 992px) {
    width: 320px;
    text-align: center;
  }
`;
