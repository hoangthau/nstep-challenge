import React from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

import { useClickOutside } from '@/hooks/useClickOutside';

/**
 * Popovers & Dropdowns are in a family of dynamic components whose position depends on the elements that *trigger* them,
 * since they are usually absolutely/fixed positioned *right next* to where the user just interacts 🎆.
 *
 * Positioning these dynamic elements is not trivial. Luckily, [popperJS](https://popper.js.org) takes care of that for you
 * quite easily 👍.
 *
 * Let's make a reusable component called Extendable that will takes care of popper-js integrations that will be the
 * atom for both Popover & Dropdown to build on top of 🎩.
 *
 * Requirements:
 * - It could be attached to any element.
 * - It stays on top of all other elements on the page to ensure that its content is visible.
 *
 * **BONUS POINT 💤**: Don't use z-index, z-index war is no fun for anyone.
 *
 * **BONUS BONUS POINT 💗**: Popper-js already takes care of 90% of a11y & responsiveness for you, except for one case:
 * - If the size of the trigger changes, what happens?
 */

type Props = {
  element: React.ReactNode;
  content: string | React.ReactNode;
  placement?: Placement;
  isClickTrigger?: boolean;
  showArrow?: boolean;
  offsetTop?: number;
};

export const NstExtendable = ({
  element,
  content,
  placement,
  offsetTop,
  isClickTrigger,
  showArrow,
}: Props) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(null);
  const [showPopover, setShowPopover] = React.useState<boolean>(false);
  useClickOutside(referenceElement, () => {
    setShowPopover(false);
  });

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || 'top',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, offsetTop],
        },
      },
    ],
  });

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={isClickTrigger ? undefined : togglePopover}
        onMouseLeave={isClickTrigger ? undefined : togglePopover}
        onClick={isClickTrigger ? togglePopover : undefined}
      >
        {element}
      </div>
      {showPopover &&
        ReactDOM.createPortal(
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="popper"
          >
            {content}
            {showArrow && (
              <div ref={setArrowElement} style={styles.arrow} className="popper__arrow" />
            )}
          </div>,
          document.querySelector('#portal')!,
        )}
    </>
  );
};
