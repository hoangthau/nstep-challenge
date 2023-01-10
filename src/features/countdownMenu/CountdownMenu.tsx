import React from 'react';

import { NstButton, NstDropdown } from '@/components';

/**
 * This dropdown menu should opens up a dropdown with 3 options:
 * - Start/pause the countdown.
 * - Reset the countdown to the default number.
 * - Double the current countdown.
 *
 * It should have all the features of a basic dropdown & allow user to interact meaningfully with the countdown counter.
 *
 * **BONUS POINT 🙌**: Add an input in the dropdown that allows user to set the counter to whatever number they want.
 */

type IAction = {
  text: string;
  onClick: () => void;
};

type Props = {
  actions: IAction[];
};

export const CountdownMenu = ({ actions }: Props) => {
  return <NstDropdown element={<NstButton>Countdown Actions</NstButton>} options={actions} />;
};
