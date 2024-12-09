# Marp Template

## Prerequisites

- [Bun](https://bun.sh) v1.1.7 or later
- A text editor with Markdown support

## Installation

```bash
git clone https://github.com/your-repo/marp-template.git
cd marp-template
```

```bash
bun install
```

## Preview current slides

```bash
bun run preview
```

## Build slides and generate pptx and pdf

```bash
bun run build:pptx
bun run build:pdf
```

## Customize

### How to add custom syntax highligt for the specific language

see [src/lib/highlight-sol.js](./src/lib/highlight-sol.js)

### How to add custom theme

see [src/themes/eth.css](./src/themes/eth.css) Line: 111

## References

- [Marp](https://marp.app/)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marp Core](https://github.com/marp-team/marp-core)
