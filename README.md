# Marp Template

## Prerequisites

- [Bun](https://bun.sh) v1.3 or later
- A text editor with Markdown support

## Installation

```bash
git clone https://github.com/posaune0423/marp-template.git
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

## Support drawio AWS diagrams

Install AWS icons from [here](https://github.com/m-radzikowski/diagrams-aws-icons) 
and add to `~/.vscode-drawio/AWS Architecture Icons 20240206.xml`

and then you will see the AWS icons in the drawio palette.

![AWS Icons](https://github.com/m-radzikowski/diagrams-aws-icons/blob/master/diagrams.net-screenshot.png?raw=true)


### How to add custom syntax highligt for the specific language

see [src/lib/highlight-sol.js](./src/lib/highlight-sol.js)

### How to add custom theme

see [src/themes/eth.css#L111](./src/themes/eth.css#L111)

## References

- [Marp](https://marp.app/)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marp Core](https://github.com/marp-team/marp-core)
