# lit-ts-sass-template

> A LitElement template using TypeScript, SASS, WebPack, Prettier and ESLint. It helps you build standardized web components.

## ✨ Features

- 👕 TypeScript enabled.
- 💅 SASS styles could be imported without error. (Declarations for .scss and .css files are provided)
- 📦 Using WebPack for bundling. (terser, sourcemap and HMR are supported)
- ✏️ ESLint and Prettier help fix and format your code.
- 🐶 Triggering Husky before 'git commit' to ensure code quality.

## 🔨 Usage

Download the template & install dependencies:

```bash
git clone https://github.com/mozwell/lit-ts-sass-template.git
cd lit-ts-sass-template
npm install
```

Development mode (HMR and inline-sourcemap enabled):

```bash
npm run dev
```

Build (No terser, with inline-sourcemap):

```bash
npm run build
```

Build for production (No sourcemap, with terser):

```bash
npm run build:prod
```

Lint & autofix bugs:

```bash
npm run lint
```

## ℹ️ Info

The original template is forked from [webpack4-typescript-lit-element](https://github.com/Santosh8055/webpack4-typescript-lit-element), which is written by Santosh8055. I modify it and add some useful features to improve the development experience.

## ©️ License

MIT © [mozwell](https://github.com/mozwell)

## 🙏 Contribution

All kinds of contribution are welcomed, please submit PRs if you've got any good idea. Issues are also kindly appreciated.
