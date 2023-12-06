export const media = {
  down: {
    xs: '@media(max-width: 320px)',
    sm: '@media(max-width: 576px)',
    md: '@media(max-width: 768px)',
    lg: '@media(max-width: 992px)',
    xl: '@media(max-width: 1200px)',
    xxl: '@media(max-width: 1440px)',
    xxxl: '@media(max-width: 1920px)',
  },
  up: {
    xs: '@media(min-width: 0px)',
    sm: '@media(min-width: 576px)',
    md: '@media(min-width: 768px)',
    lg: '@media(min-width: 992px)',
    xl: '@media(min-width: 1200px)',
    xxl: '@media(min-width: 1440px)',
    xxxl: '@media(max-width: 1920px)',
  },
};

/* USAGE
${media.down.sm} {
    font-size: 14px;
    margin-top: 8px;
  }
*/
