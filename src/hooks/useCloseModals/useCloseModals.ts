import React, { SetStateAction, useEffect } from 'react';

export const useCloseModal = (
  isActive: boolean,
  setter: React.Dispatch<SetStateAction<boolean>>,
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  const outsideOnClickHandle = (e: MouseEvent) => {
    if (containerRef && !containerRef.current!.contains(e.target as HTMLElement)) setter(false);
  };

  const escapeKeypressHandle = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setter(false);
  };

  useEffect(() => {
    if (isActive) {
      document.body.addEventListener('click', outsideOnClickHandle);
      document.body.addEventListener('keydown', escapeKeypressHandle);
    }

    return () => {
      document.body.removeEventListener('click', outsideOnClickHandle);
      document.body.removeEventListener('keydown', escapeKeypressHandle);
    };
  }, [isActive]);
};
