import styled from 'styled-components';

type SwiperArrowRightProps = {
  className: string;
  arrowColor?: string;
};

export const SwiperArrowRight = ({
  className,
  arrowColor = '#fff',
}: SwiperArrowRightProps) => (
  <Wrapper className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
    >
      <g
        id="Right_Arrow"
        data-name="Right Arrow"
        transform="translate(-1587 -703)"
      >
        <g
          id="Rectangle_1581"
          data-name="Rectangle 1581"
          transform="translate(1587 703)"
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="1"
        >
          <rect width="70" height="70" stroke="none" />
          <rect x="0.5" y="0.5" width="69" height="69" fill="none" />
        </g>
        <g
          id="Component_3"
          data-name="Component 3"
          transform="translate(1612.118 731.451)"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M6.091,0,4.9,1.191,9.408,5.7H-7.123V7.4H9.408L4.9,11.908,6.091,13.1,12.64,6.549Z"
            transform="translate(7.123)"
            fill={arrowColor}
            stroke={arrowColor}
            strokeWidth="0.5"
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 70px;
  min-width: 70px;
  height: 70px;
  background: transparent;
  position: relative;
  margin-top: 0;
  right: 0;
  border-left: none;
  &:after {
    content: '' !important;
  }
  svg {
  }
`;
