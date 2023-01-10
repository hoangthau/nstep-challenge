import '@/styles/globals.css';
import '@/styles/popover.css';
import '@/styles/fruits.css';

import reactLogo from '@/assets/react.svg';
import tailwindLogo from '@/assets/tailwind.svg';
import reactQueryLogo from '@/assets/react-query.svg';

import { Countdown } from '@/features/countdown';
import { NstButton, NstPopover } from '@/components';
import Fruits from '@/components/Fruits/Fruits';

function App() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <header className="flex gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" className="w-16 h-16" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} alt="React logo" className="w-16 h-16" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} alt="Tailwind logo" className="w-16 h-16" />
        </a>
        <a href="https://tanstack.com/query" target="_blank">
          <img src={reactQueryLogo} alt="React Query logo" className="w-16 h-16" />
        </a>
      </header>
      <h1 className="font-bold text-3xl my-8">NStep Frontend Challenge</h1>

      <Countdown />
      <h2 className="mt-20 mb-8 text-xl">Popover</h2>
      <NstPopover element={<NstButton>Hover me</NstButton>} content={<p>Popover content</p>} />

      <h2 className="mt-20 mb-8 text-xl">Focusable</h2>
      <NstButton className="focusable">Button</NstButton>

      <h2 className="mt-20 mb-8 text-xl">Get all fruits</h2>
      <Fruits />

      <p className="mt-8">
        See <code>README.md</code> in each folder.
      </p>
      <p>You can use this page as the final showcase your awesome stuff 🎉</p>
    </main>
  );
}

export default App;
