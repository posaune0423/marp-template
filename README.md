# Marp Template

## Prerequisites

- [Node.js](https://nodejs.org) v23.3.0 or later
- A text editor with Markdown support

## Installation

```bash
git clone https://github.com/posaune0423/marp-template.git
cd marp-template
```

```bash
npm install
```

## Preview current slides

```bash
npm run preview
```

## Build slides and generate pptx and pdf

```bash
npm run build:pptx
npm run build:pdf
```

## Customize

### How to add custom syntax highligt for the specific language

see [src/lib/highlight-sol.js](./src/lib/highlight-sol.js)

### How to add custom theme

see [src/themes/eth.css#L111](./src/themes/eth.css#L111)

## References

- [Marp](https://marp.app/)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marp Core](https://github.com/marp-team/marp-core)
