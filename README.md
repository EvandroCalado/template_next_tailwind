# Template Next com Tailwind

Este projeto é um template configurado para o desenvolvimento rápido de aplicações modernas utilizando Next.js com TypeScript. Ele inclui uma série de ferramentas e bibliotecas essenciais para garantir a produtividade e a qualidade do código.

## Tecnologias e Ferramentas

- **🚀 Next.js**: Framework React para desenvolvimento de aplicações web.
- **⚙️ TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **💄 Tailwind CSS**: Framework de CSS utilitário para estilização rápida e consistente.
- *📖 *Storybook**: Ferramenta para desenvolvimento e documentação de componentes de interface.
- **🧪 Vitest**: Framework de testes rápidos para projetos modernos de frontend.
- **🔧 Husky**: Ferramenta para adicionar ganchos de Git facilmente.
- **🛠️ Lint-Staged**: Executa linters em arquivos modificados no repositório.
- **📝 ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript.
- **📑 Prettier**: Ferramenta de formatação de código.
- **🐳 Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.

## Estrutura do Projeto

```plaintext
template_next_tailwind/
├── .github/
├── └── dependabot.yml
│   └── workflows/
│       ├── ci.yml     
├── .husky/
│   └── pre-commit
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── styles/
├── .dockerignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.mjs
```

## Configuração e Uso

### Pré-requisitos

- Node.js 20.x
- Docker

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/EvandroCalado/template_next_tailwind.git
   cd template_next_tailwind
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

### Linting

Para rodar o ESLint:

```bash
npm run lint
```

### Testes

Para rodar os testes:

```bash
npm run test
```

### Storybook

Para iniciar o Storybook:

```bash
npm run storybook
```

### Docker

Para construir e rodar a aplicação em um contêiner Docker:

```bash
docker-compose up --build -d
```

Isto rodará a aplicação na porta 3000 do localhost.

### GitHub Actions para dependabot

O projeto está configurado com Dependabot para manter as dependências atualizadas.

#### GitHub Actions CI Pipeline

Pipeline CI para rodar testes em cada pull request criado pelo Dependabot:

## Possíveis Problemas com Husky

### Erro: `husky - pre-commit script failed (code 1)`

Se você encontrar o erro `husky - pre-commit script failed (code 1)`, pode ser necessário instalar o Husky manualmente e ativar os hooks.

#### Solução

1. Remova a pasta .husky e rode o comando:
   ```bash
   npx husky init
   ```

2. Verifique se os hooks estão configurados corretamente no arquivo `.husky/pre-commit`:
   ```bash
   npm run lint-staged
   ```

Se o problema persistir, você pode tentar reinstalar as dependências do projeto:

```bash
npm install
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
