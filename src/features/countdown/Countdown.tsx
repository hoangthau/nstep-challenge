import React from 'react';

/** This is kinda ugly, isn't it, maybe make it absolute import? */
import { NstButton } from '@/components/Button';
import { CountdownMenu } from '@/features/countdownMenu';

/**
 * Counter is an example of a simple business logic of a click-up counter.
 * ```
 * Click > increments counter.
 * ```
 *
 * Requirements:
 * - Make the counter countdown from 30s by default.
 * - The countdown starts/pauses on click.
 * - Persist the current count in local so that it stays after refreshes.
 * - Redesign it in a user-friendly way so that it can reset when paused/finished.
 *
 * **BONUS POINT 🎁**: Make this default countdown customisable.
 *
 * **BONUS BONUS POINT 🏎**: Add a little animation for the count down, to your liking.
 */

type CountdownProps = {
  countdown?: number;
};

let interval: number | undefined;
const countKey = 'count';

export const Countdown = ({ countdown = 30 }: CountdownProps) => {
  const [count, setCount] = React.useState<number>(() => {
    const value = localStorage.getItem(countKey) || '';
    const initialCount = parseInt(value, 10);
    return initialCount || countdown;
  });

  const startCountdown = () => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  React.useEffect(() => {
    startCountdown();
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(countKey, count?.toString());
  }, [count]);

  const handleToggle = () => {
    if (interval) {
      clearInterval(interval);
      interval = 0;
      return;
    }
    startCountdown();
  };

  const handleReset = () => {
    setCount(countdown);
    startCountdown();
  };

  const hanldeDouble = () => {
    setCount(count * 2);
  };

  const actions = [
    {
      text: 'Start/pause',
      onClick: handleToggle,
    },
    {
      text: 'Reset',
      onClick: handleReset,
    },
    {
      text: 'Double',
      onClick: hanldeDouble,
    },
  ];

  return (
    /** How to make this button accept all <button />-related props. */
    <>
      <NstButton type="button" onClick={handleToggle}>
        count is {count}
      </NstButton>
      <br />
      <CountdownMenu actions={actions} />
    </>
  );
};
