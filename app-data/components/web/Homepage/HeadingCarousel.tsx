import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { media } from '../../../shared/design';
import { MainCarousel } from './MainCarousel';

export const HeadingCarousel = () => {
  return (
    <Wrapper>
      <MainCarousel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 1920/660;
  @media (max-width: 992px) {
    aspect-ratio: 390/260;
  }
`;
