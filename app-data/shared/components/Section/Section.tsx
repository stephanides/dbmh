import { ReactNode } from 'react';
import styled from 'styled-components';

type SectionType = {
  children: ReactNode;
};

export const Section = (props: SectionType) => (
  <Wrapper>{props.children}</Wrapper>
);

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 65px;
  @media (max-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
