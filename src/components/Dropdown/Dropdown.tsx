/**
 * Dropdown presents a list of items that users can choose to trigger a specific action with.
 * It is an organism that should be built on top of Popover as a molecule 🧱.
 *
 * Requirements:
 * - It must have all the functionalities of a Popover
 * - It must display a list of similarly-designed items, with each item individually capable of triggering
 * at least its own `onClick` independently
 * - Clicking/tapping on the item closes the dropdown automatically, but make this feature turn-off-able.
 *
 * **BONUS POINT 🍓**: Add a way to make multi-level dropdown, where a dropdown item also shows a dropdown on hover.
 *
 * **BONUS BONUS POINT 🥑**: Make it WCAG compliant.
 * > Good place to start: https://a11y-guidelines.orange.com/en/web/components-examples/dropdown-menu/
 */

import React from 'react';
import { Placement } from '@popperjs/core';
import { twMerge } from 'tailwind-merge';

import { NstPopover } from '@/components/Popover';

type IOption = {
  text: string;
  onClick: () => void;
};

type Props = {
  element: React.ReactNode;
  options: IOption[];
  className?: string;
  placement?: Placement;
  buttonText?: string;
  offsetTop?: number;
  isClickTrigger?: boolean;
  showArrow?: boolean;
};

export const NstDropdown = ({
  element,
  options,
  className,
  placement = 'bottom-start',
  offsetTop = 0,
  buttonText,
  isClickTrigger = true,
  showArrow = false,
}: Props) => {
  const handleClick = (event: React.MouseEvent, item: IOption) => {
    item.onClick();
  };

  const content = React.useMemo(() => {
    return (
      <ul>
        {options?.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer py-2 hover:text-gray-500"
            onClick={(event) => handleClick(event, item)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    );
  }, [options]);

  const classNameMerge = twMerge(
    'px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm min-w-[180px]',
    className,
  );

  return (
    <NstPopover
      className={classNameMerge}
      element={element}
      content={content}
      placement={placement}
      isClickTrigger={isClickTrigger}
      showArrow={showArrow}
      offsetTop={offsetTop}
      buttonText={buttonText}
    />
  );
};
