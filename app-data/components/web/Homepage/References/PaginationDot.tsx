import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import styled, { keyframes, css } from 'styled-components';
import { media } from '../../../../shared/design';

type CarouselPaginationDotProps = {
  className: string;
  isAutoRotationEnabled?: boolean;
  animationDuration?: number;
  bulletActiveClass?: string;
  slidesCount: number;
};

const progress = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const Bullet = styled(Box)`
  display: block;
  background-color: white;
  width: 100%;
  height: ${rem(2)};
  margin: 0;
  opacity: 0.5;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Progress = styled(Box)`
  position: absolute;
  height: ${rem(2)};
  background: white;
`;

const NAVIGATION_ARROWS_WITH_SPACING = rem(136);
const PAGINATION_COLUMN_GAP = rem(8);

const Wrapper = styled(Flex)<{
  animationDuration: number;
  bulletActiveClass: string;
  slidesCount: number;
}>`
  display: flex;
  position: relative;
  align-items: center;
  width: ${rem(134)};
  max-width: ${rem(134)};
  background-color: transparent !important;
  height: 100%;
  margin: 0 !important;
  border-radius: 0;
  opacity: 1;
  cursor: pointer;
  ${media.down.md} {
    width: ${rem(80)};
  }
  &:hover {
    ${Bullet} {
      opacity: 1;
    }
  }
  ${({ bulletActiveClass, animationDuration }) => css`
    &.${bulletActiveClass} {
      ${Bullet} {
        opacity:  0.5;
      }
      ${Progress} {
        animation: ${progress} ${animationDuration}ms linear};
      }
    }
  `}
`;

export const CarouselPaginationDot: React.VFC<CarouselPaginationDotProps> = ({
  className,
  animationDuration = 5000,
  bulletActiveClass = 'swiper-pagination-bullet-active',
  slidesCount,
}) => (
  <Wrapper
    className={className}
    animationDuration={animationDuration}
    bulletActiveClass={bulletActiveClass}
    slidesCount={slidesCount}
  >
    <Bullet />
    <Progress />
  </Wrapper>
);
