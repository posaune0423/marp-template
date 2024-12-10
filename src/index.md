---
marp: true
theme: eth
paginate: true
style: @import url('https://unpkg.com/tailwindcss@^2/dist/utilities.min.css');
  
footer: '@Sample Inc.'
---

# Marp Presentation Guide

A comprehensive template for creating beautiful slides

---

## Profile

<div class="grid grid-cols-2 gap-4">
<div>

### Asuma Yamada

#### Sample Inc.

<div class="text-sm">

GitHub: [@posaune0423](https://github.com/posaune0423)
𝕏: [@0xasuma](https://x.com/0xasuma)

</div>

<div class="text-sm mt-14">

- 📆 2024 - Present 🌏 **PixeLAW**
  - Autonomous World on Starknet
- 📆 2023 -2024 💎 **Unikura**
  - RWA NFT Marketplace
- 📆 2021 - 2023 👀 **VWBL Protocol**
  - Decentralized Access Control Protocol

</div>
</div>

<div class="flex justify-center items-center">
<img src="./images/laghing-man.jpg" width="200" height="200" class="rounded-full" />
</div>
</div>

---

## Table of Contents

1. Overview
2. Layout Examples
3. Code Examples

---

<!-- _class: title -->

## Overview

<div class="grid grid-cols-2 gap-4">
<div>

### What is Marp?

Markdown Presentation Ecosystem that allows you to create beautiful slides using:

- Simple Markdown syntax
- Custom CSS themes
- HTML and CSS integration
- Various layout options

</div>

<div class="flex justify-center items-center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKokeVcAuyCSayNArOvGODdH38xlLWkDGBMg&s"  class="rounded-lg shadow-lg" />
</div>
</div>

---

<!-- header: '' -->

# Layout Examples

---

<!-- header: Layout Examples -->

## Multi-column Layout

<div class="grid grid-cols-3 gap-4">
<div class="bg-blue-400 p-4 rounded-lg">

### Column 1

- Basic Markdown
- Simple lists
- Code blocks

</div>
<div class="bg-green-400 p-4 rounded-lg">

### Column 2

- Images
- Tables
- Quotes

</div>
<div class="bg-yellow-400 p-4 rounded-lg">

### Column 3

- Custom CSS
- Themes
- Directives

</div>
</div>

---

<!-- header: '' -->

# Code Examples

---

<!-- header: Code Examples -->

## Syntax Highlighting

<div class="grid grid-cols-2 gap-4">
<div>

### Multiple Languages

Marp supports various programming languages:

- JavaScript/TypeScript
- Python
- CSS
- You can add more languages by customizing the engine

</div>
<div class="code-block">

```solidity
// Solidity
contract Diamond {
    bytes32 constant DIAMOND_STORAGE_POSITION =
        keccak256("diamond.storage");

    struct DiamondStorage {
        mapping(bytes4 => address) facets;
    }

    function diamondStorage() internal pure
        returns (DiamondStorage storage ds) {
        bytes32 position = DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }
}
```

</div>
</div>

---

<!-- header: '' -->

<div class="text-center px-32">

# Thank you!

GitHub: [@posaune0423](https://github.com/posaune0423)
𝕏: [@0xasuma](https://x.com/0xasuma)

</div>
