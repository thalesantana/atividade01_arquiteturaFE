# Blog Pessoal

Este é um projeto de blog pessoal desenvolvido com React, TypeScript, Vite, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- pnpm (versão 7 ou superior)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://seu-repositorio/blog.git
cd blog
```

2. Instale as dependências:
```bash
# Instalar dependências base do projeto
pnpm install

# Instalar e configurar Tailwind CSS
pnpm install -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p

# Instalar dependências do shadcn/ui
pnpm install @radix-ui/react-slot
pnpm install tailwindcss-animate class-variance-authority clsx tailwind-merge
pnpm add -D @types/node

# Instalar CLI do shadcn-ui
pnpm install shadcn-ui

# Inicializar shadcn-ui (Selecione as opções padrão quando solicitado)
pnpm dlx shadcn-ui init

# Instalar componentes necessários
pnpm dlx shadcn-ui add card
pnpm dlx shadcn-ui add button
```

## ⚙️ Configuração

1. Certifique-se de que seu `tsconfig.json` inclui as seguintes configurações:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2. Verifique se o `tailwind.config.js` está configurado corretamente com as configurações do shadcn/ui

3. Certifique-se de que o arquivo `src/index.css` contém as variáveis CSS necessárias para o tema

## 🏃‍♂️ Rodando o projeto

1. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

2. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── ui/          # Componentes do shadcn-ui
  │   ├── Header.tsx   # Componente de navegação
  │   ├── Hero.tsx     # Seção de biografia
  │   ├── BlogPost.tsx # Card de post individual
  │   └── LatestPosts.tsx # Seção de posts recentes
  ├── App.tsx          # Componente principal
  ├── main.tsx         # Entrada da aplicação
  └── index.css        # Estilos globais
```

## 🛠️ Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento
- `pnpm build`: Cria a versão de produção
- `pnpm preview`: Visualiza a versão de produção localmente
- `pnpm lint`: Executa o linter no código

## 🎨 Personalização

### Mudando o Tema

Você pode personalizar as cores e outros aspectos do tema editando as variáveis CSS em `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... outras variáveis ... */
}
```

### Adicionando Novos Componentes

Para adicionar novos componentes do shadcn/ui:

```bash
pnpm dlx shadcn-ui add [nome-do-componente]
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request