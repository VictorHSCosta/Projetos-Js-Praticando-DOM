# Projetos JS - Praticando DOM

Repositório com projetos práticos para treinar manipulação de DOM com JavaScript vanilla.

## Tecnologias

- HTML5
- JavaScript
- Tailwind CSS
- Vite

## Instalação

```bash
pnpm install
```

## Comandos

```bash
pnpm dev
pnpm build
pnpm preview
```

## Estrutura

```
src/
├── index.html
├── js/
│   └── main.js
├── styles/
│   └── main.css
└── pages/
    ├── draw/
    │   ├── index.html
    │   └── index.js
    ├── jogoDaVelha/
    │   ├── index.html
    │   └── index.js
    ├── piano/
    │   ├── index.html
    │   └── index.js
    └── question/
        ├── index.html
        └── index.js
```

## Como funciona

Este projeto usa o Vite como servidor e build, mas as paginas continuam sendo HTML e JavaScript puro.

Cada pagina deve ficar em uma pasta propria dentro de `src/pages/`:

1. `index.html` para a estrutura da pagina.
2. `index.js` para o JavaScript daquela pagina.
3. Um link no array `projects` em `src/js/main.js`.

Exemplo de URL no dev server:

```text
http://localhost:3000/draw
http://localhost:3000/piano
http://localhost:3000/jogoDaVelha
http://localhost:3000/question
```

## Projetos

- Draw: canvas para desenhar.
- Piano: notas com teclado, clique e input.
- Jogo da Velha: base para praticar eventos e estado.
- Question: quiz simples criado pelo DOM.

## Como adicionar uma pagina

1. Crie uma pasta em `src/pages/seu-projeto/`
2. Adicione `index.html` e `index.js`
3. No HTML, use `<script type="module" src="./index.js"></script>`
4. Adicione o link em `src/js/main.js`

O `vite.config.js` encontra automaticamente os `index.html` dentro de `src/pages`.
