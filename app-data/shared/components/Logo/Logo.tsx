import React, { ForwardedRef, ReactNode } from 'react';
import styled from 'styled-components';

type LogoSVGProps = {
  children?: ReactNode;
  className?: string;
};

const LogoSvg = React.forwardRef(
  (props: LogoSVGProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={props.className}>
      <svg
        width="26"
        height="36"
        viewBox="0 0 26 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.359999L5.06 0.359999C7.78 0.359999 9.7 2.02 9.7 5.36L9.7 9C9.7 12.34 7.78 14 5.06 14L0.5 14L0.5 0.359999ZM7.48 9L7.48 5.36C7.48 3.08 6.72 2.42 5.06 2.42L2.72 2.42L2.72 11.94L5.06 11.94C6.72 11.94 7.48 11.26 7.48 9ZM23.5722 6.84V7.08C25.0722 7.44 25.9722 8.44 25.9722 10.16V10.3C25.9722 12.68 24.4322 14 21.8122 14H16.8122L16.8122 0.359999L21.3122 0.359999C23.9722 0.359999 25.4722 1.68 25.4722 3.92V4.08C25.4722 5.52 24.7922 6.42 23.5722 6.84ZM21.3522 2.42L18.9922 2.42V6.06H21.3522C22.7922 6.06 23.2722 5.54 23.2722 4.22V4.14C23.2722 2.9 22.7922 2.42 21.3522 2.42ZM23.7722 10.06V9.96C23.7722 8.62 23.2722 8.1 21.8522 8.1H18.9922L18.9922 11.94H21.8522C23.2722 11.94 23.7722 11.42 23.7722 10.06ZM2.36 36H0.26L0.26 22.36H2.76L4.9 27.84H5.1L7.24 22.36H9.74L9.74 36H7.64L7.64 26.12H7.42L5.5 30.9H4.48L2.58 26.12H2.36L2.36 36ZM23.8322 28.52V22.36H25.3122L25.3122 36H23.8322L23.8322 29.9H18.1522L18.1522 36H16.6722L16.6722 22.36H18.1522V28.52H23.8322Z"
          fill="white"
        />
      </svg>
    </div>
  )
);

export const Logo = styled(LogoSvg)``;
