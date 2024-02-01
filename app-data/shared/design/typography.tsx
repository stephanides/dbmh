import styled from 'styled-components';
import { colors } from './colors';

type Props = {
  weight?: string;
  color?: string;
};

export const Heading1 = styled.h1`
  color: ${colors.primary};
`;

export const Heading2 = styled.h2`
  color: ${colors.text};
`;

export const Heading3 = styled.h3`
  color: ${colors.text};
`;

export const Heading4 = styled.h4`
  color: ${colors.text};
`;

export const Heading5 = styled.h5`
  color: ${colors.text};
`;

export const Heading6 = styled.h6`
  color: ${colors.text};
`;

export const Paragraph = styled.p<Props>`
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  color: ${({ color }) => (color ? color : colors.text)};
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: ${colors.text};
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 80px;
  font-weight: 400;
`;

export const FONT_FAMILY_MONO = {
  REGULAR: `Roboto Mono, monospace`,
};

export const FONT_FAMILY_FORMULA = {
  EXTRA_BOLD: `PPFormula-Extrabold`,
  MEDIUM: `PPFormula-Medium`,
  REGULAR: `PPFormula-Regular`,
};
