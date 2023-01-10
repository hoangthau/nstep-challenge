import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface NstButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Children is required on a button, at least either an icon or text.
   */
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * This is a simple example of a button 🖱. Let's try to make it satisfy all the requirements we stated in the design system.
 *
 * You likely will run into a classic Tailwind problem here 😑.
 * >Feel free to use 3rd party library like [tailwind-merge](https://github.com/dcastil/tailwind-merge) if you want.
 */
export const NstButton = React.forwardRef(
  (props: NstButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const className = twMerge(
      'text-white px-4 py-2 bg-rose-500 hover:bg-rose-700 shadow-sm border-rose-500 rounded-lg',
      props.className,
    );
    return (
      <button ref={ref} {...props} className={className}>
        {props.children}
      </button>
    );
  },
);
