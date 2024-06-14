import Image from 'next/image';
import { FC } from 'react';

export interface MainProps {}

export const Main: FC<MainProps> = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-zinc-800 px-4">
      <h1 className="text-4xl font-bold capitalize text-zinc-100 sm:text-6xl">
        template next
      </h1>

      <h4 className="text-sm capitalize text-emerald-300 sm:text-xl">
        com typescript, tailwind, storybook, vitest
      </h4>

      <Image
        src="./logo.svg"
        alt="desenvolvedor em frente a um computador"
        width={400}
        height={400}
        priority
      />
    </main>
  );
};
