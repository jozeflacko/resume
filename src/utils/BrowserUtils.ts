const MOBILE_WIDTH_BREAKPOINT = 980;

export function isDesktop() {
  return (getWidth() > MOBILE_WIDTH_BREAKPOINT);
}

function getWidth() {
  return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
  );
}