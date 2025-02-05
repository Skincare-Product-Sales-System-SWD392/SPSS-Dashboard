// Popper.tsx
import React, { useEffect } from 'react';
import { createPopper, Instance, Options, Placement } from '@popperjs/core';

interface PopperProps {
  targetRef: React.RefObject<Element>;
  popperRef: React.RefObject<Element>;
  options?: Options;
  placement?: Placement; // Add placement prop
  children: React.ReactNode;
}

const Popper: React.FC<PopperProps> = ({ targetRef, popperRef, options, placement = 'bottom', children }) => {
  let popperInstance: Instance | null = null;

  useEffect(() => {
    const targetElement = targetRef.current;
    const popperElement : any = popperRef.current;

    if (targetElement && popperElement) {
      // Include the placement prop in createPopper
      popperInstance = createPopper(targetElement, popperElement, { ...options, placement });
    }

    return () => {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    };
  }, [options, targetRef, popperRef, placement]); // Include placement in dependencies

  return <>{children}</>;
};

export default Popper;
