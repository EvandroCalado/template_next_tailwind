import Image from 'next/image';
import { FC } from 'react';

export interface MainProps {
  title?: string;
}

export const Main: FC<MainProps> = ({ title = 'template next' }) => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-100 px-4 md:flex-row lg:gap-20 dark:bg-zinc-800">
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
        <h1 className="text-xl font-bold capitalize text-zinc-800 md:text-4xl lg:text-6xl dark:text-zinc-100">
          {title}
        </h1>

        <Image
          src="./logo.svg"
          alt="desenvolvedor em frente a um computador"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
        <h4 className="text-xl font-bold capitalize text-zinc-800 md:text-4xl lg:text-6xl dark:text-zinc-100">
          tecnologias
        </h4>

        <ul className="text-sm text-zinc-800 md:space-y-2 md:text-base dark:text-zinc-100">
          <li>
            <span className="font-bold text-emerald-300">🐳 Docker: </span>{' '}
            Plataforma para desenvolvimento, envio e execução de aplicações em
            contêineres.
          </li>
          <li>
            <span className="font-bold text-emerald-300">🚀 Next.js:</span>{' '}
            Framework React para desenvolvimento de aplicações web.
          </li>
          <li>
            <span className="font-bold text-emerald-300">⚙️ TypeScript:</span>{' '}
            Superset do JavaScript que adiciona tipagem estática ao código.
          </li>
          <li>
            <span className="font-bold text-emerald-300">💄 Tailwind CSS:</span>{' '}
            Framework de CSS utilitário para estilização rápida e consistente.
          </li>
          <li>
            <span className="font-bold text-emerald-300">📖 Storybook:</span>{' '}
            Ferramenta para desenvolvimento e documentação de componentes de
            interface.
          </li>
          <li>
            <span className="font-bold text-emerald-300">🧪 Vitest:</span>{' '}
            Framework de testes rápidos para projetos modernos de frontend.
          </li>
          <li>
            <span className="font-bold text-emerald-300">🔧 Husky:</span>{' '}
            Ferramenta para adicionar ganchos de Git facilmente.
          </li>
          <li>
            <span className="font-bold text-emerald-300">🛠️ Lint-Staged:</span>{' '}
            Executa linters em arquivos modificados no repositório.
          </li>
          <li>
            <span className="font-bold text-emerald-300">📝 ESLint:</span>{' '}
            Ferramenta de linting para identificar e corrigir problemas no
            código JavaScript.
          </li>
          <li>
            <span className="font-bold text-emerald-300">📑 Prettier:</span>{' '}
            Ferramenta de formatação de código.
          </li>
        </ul>
      </div>
    </main>
  );
};
