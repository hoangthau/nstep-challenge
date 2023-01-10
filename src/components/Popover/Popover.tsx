import React from 'react';
import { Placement } from '@popperjs/core';

import { NstExtendable } from '../Extendable';
import { NstButton } from '../Button';
import { twMerge } from 'tailwind-merge';

/**
 * Popover is a component display a *popper*, a small piece of info, when a user clicks or taps on what usually is a button.
 *
 * Let's make one that uses the Extendable as an atom ⚛️.
 *
 * Requirements:
 * - It must have all the functionalities of an Extendable
 * - It must be positioned **NEXT** to the triggering element, and the positioning could be customised.
 * - It must be mounted/unmounted from DOM completely instead of being visually hidden.
 * - Clicking/tapping on the trigger displays the popover.
 * - Clicking anywhere *outside* the popover closes it.
 * - It could be used standalone or controlled (*with/without external useState()*).
 * - The default trigger is a NstButton.
 *
 * **BONUS POINT 🎨**: Add a little transition where it fades in & out, and expand & shrink on mount/unmount (both from 90% -> 100%).
 *
 * **BONUS BONUS POINT 🦮**: Make it WCAG compliant.
 * > Good place to start: https://yale-a11y.gitlab.io/ui-component-library/tooltips-popovers
 *
 * Hint if you are not a11y-familiar: focus management is important to accessible users.
 */

type Props = {
  content: string | React.ReactNode;
  element?: React.ReactNode;
  placement?: Placement;
  buttonText?: string;
  offsetTop?: number;
  className?: string;
  isClickTrigger?: boolean;
  showArrow?: boolean;
};

export const NstPopover = ({
  element,
  content,
  placement = 'right',
  offsetTop = 8,
  buttonText,
  className,
  isClickTrigger,
  showArrow = true,
}: Props) => {
  const classNameMerge = twMerge(
    'px-3 py-2 text-sm font-medium text-white bg-black border border-gray-200 rounded-lg shadow-sm',
    className,
  );
  return (
    <NstExtendable
      element={element ? element : <NstButton>{buttonText}</NstButton>}
      content={<div className={classNameMerge}>{content}</div>}
      placement={placement}
      offsetTop={offsetTop}
      isClickTrigger={isClickTrigger}
      showArrow={showArrow}
    />
  );
};
