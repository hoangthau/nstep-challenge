import React from 'react';

export const useClickOutside = (element: HTMLElement | null, handler: () => void) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (!element) {
        return;
      }
      if (!element.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    }
  }, [element]);

}