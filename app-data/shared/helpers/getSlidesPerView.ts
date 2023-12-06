export function getSlidesPerView(width: number) {
  if (width > 1200) {
    return 4;
  }
  if (width > 992) {
    return 3;
  }
  if (width > 768) {
    return 2;
  }
  return 1;
}
