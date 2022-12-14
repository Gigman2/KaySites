import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../theme/constants';

const handleScroll = (e, isTablet: boolean) => {
  const onScrollBar = 'on-scrollbar';
  if (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    e.target &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    e.target.classList &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.target.classList.contains(onScrollBar) === false &&
    !isTablet
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.target.classList.add(onScrollBar);
  }

  const timer = setTimeout(() => {
    if (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      e.target &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      e.target.classList &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      e.target.classList.contains(onScrollBar) === true
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      e.target.classList.remove(onScrollBar);
    }
  }, 12000);

  return () => {
    clearTimeout(timer);
  };
};

export default function useAutoRemoveScrollBar() {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });
  const isTablet = useMediaQuery({ maxWidth: breakpoints.TABLET });
  React.useEffect(() => {
    window.addEventListener(
      'scroll',
      (e) => handleScroll(e, isMobile || isTablet),
      true
    );
    return () =>
      window.removeEventListener(
        'scroll',
        (e) => handleScroll(e, isMobile || isTablet),
        true
      );
  }, [isMobile, isTablet]);
  return null;
}
