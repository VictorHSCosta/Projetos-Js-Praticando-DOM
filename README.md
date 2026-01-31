# 🎯 Projetos JS - Praticando DOM

Repositório com projetos práticos para treinar manipulação de DOM com JavaScript vanilla.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **JavaScript (ES6+)** - Lógica e manipulação do DOM
- **Tailwind CSS** - Estilização moderna e responsiva
- **Vite** - Build tool moderna e rápida

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# ou
npm install
```

## 🛠️ Comandos

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📁 Estrutura do Projeto

```
src/
├── index.html              # Página principal
├── styles/
│   └── main.css           # Estilos globais com Tailwind
├── js/
│   ├── main.js            # JavaScript principal
│   └── utils/
│       ├── dom.js         # Utilitários para manipulação do DOM
│       └── events.js      # Utilitários para eventos
└── pages/
    └── jogo_da_velha/
        ├── index.html     # HTML do projeto
        └── app.js         # Lógica do projeto
```

## 🎮 Projetos

### 1. Jogo da Velha
- Jogo clássico da velha (tic-tac-toe)
- Sistema de pontuação com localStorage
- Interface responsiva e animada
- Lógica de vitória e empate

## 🎨 Recursos

- **Arquitetura Modular**: Código organizado em módulos ES6
- **Utilitários Reutilizáveis**: Funções helper para DOM e eventos
- **Tailwind CSS**: Classes utilitárias customizadas
- **Event Delegation**: Padrão eficiente para eventos
- **LocalStorage**: Persistência de dados no navegador
- **Vite HMR**: Hot Module Replacement para desenvolvimento rápido

## 📚 Como Adicionar Novos Projetos

1. Crie uma pasta em `src/pages/seu-projeto/`
2. Adicione `index.html` e `app.js`
3. Importe os utilitários necessários:
```javascript
import { $, $$ } from '../../js/utils/dom.js';
import { on, delegate } from '../../js/utils/events.js';
```
4. Adicione um card na página principal (`src/index.html`)
5. Configure a rota no `vite.config.js` se necessário

## 💡 Exemplos de Uso dos Utilitários

### DOM Utilities
```javascript
import { $, $$, createElement } from './js/utils/dom.js';

// Selecionar elementos
const button = $('#myButton');
const items = $$('.item');

// Criar elementos
const div = createElement('div', 'my-class', 'Hello');
```

### Event Utilities
```javascript
import { on, delegate } from './js/utils/events.js';

// Event listener simples
on(button, 'click', handleClick);

// Event delegation
delegate(container, '.item', 'click', handleItemClick);
```

## 🤝 Contribuindo

Este é um projeto pessoal para prática, mas sugestões são bem-vindas!

## 📄 Licença

MIT
