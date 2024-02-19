import { useLayoutEffect, useState } from 'react';

export const useScrollY = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isHidden, setIsHidden] = useState(false);

  const calculateScrollY = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 74) {
      setIsHidden(false);
      return;
    }
    setLastScrollY(currentScrollY);
    setIsHidden(currentScrollY > lastScrollY);
  };

  interface DebounceContext {
    prevCall: number;
    callTimerID?: ReturnType<typeof setTimeout>;
  }

  const debounce = (callback: () => void, ms: number) => {
    const context: DebounceContext = {
      prevCall: 0,
    };

    return function (this: DebounceContext) {
      const currentCall = Date.now();
      context.prevCall = currentCall;

      if (context.prevCall && currentCall - context.prevCall <= ms) {
        clearTimeout(context.callTimerID!);
      }

      context.callTimerID = setTimeout(() => {
        callback();
      }, ms);
    };
  };

  const debouncedCalculateScrollY = debounce(calculateScrollY, 100);

  useLayoutEffect(() => {
    window.addEventListener('scroll', debouncedCalculateScrollY);

    return () => {
      window.removeEventListener('scroll', debouncedCalculateScrollY);
    };
  }, [lastScrollY]);

  return { isHidden };
};
