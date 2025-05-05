# React 19

## 3 Jak React dostat do projektu + vytvoření projektu

### Možnosti integrace React

#### CDN

CDN knihovny: První možností je nalinkovat zbuldované soubory z CDN knihoven React a ReactDOM do hlavičky webové stránky.

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

#### NPM

Instalace přes balíčkovací systémy: Preferovaná cesta je instalace knihoven do projektu pomocí manažerů jako NPM, Yarn, nebo PNPM.
`npm install react react-dom`

#### Připravený projekt s vite

1. naklonujeme si projekt

```
git clone https://github.com/MartinKristof/react-beginners-startup.git
```

2. provedeme instalaci balíčků

#### Development

1. Install deps with `yarn` command
1. Run dev server with `yarn dev`

#### Production

1. Install deps with `yarn` command
1. Run build with `yarn build`
1. Run server with `yarn preview`

#### Scripts:

- dev
- build
- preview
- pretty
- pretty:fix
- lint
- lint:fix
- qa

### Projet

1. .eslintrc.cjs
2. vite.config.ts

## 4-prvni-komponenta

1. popsat ruzné zápisy v reactu
2. upozornit že class se v reactu píše `className`
3. React komponenta mus9 vracet jeden element nebo pole elementu, ale yd emus9 m9t element key
   `export const App = () => [<div key="1">1</div>, <p key="2">2</p>];`
