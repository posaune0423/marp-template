---
marp: true
theme: eth
paginate: true
style: @import url('https://unpkg.com/tailwindcss@^2/dist/utilities.min.css');
footer: '@Sample Inc.'
---

# Web3 Development with Solidity

## Best Practices & Examples

Asuma Yamada

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

1. Smart Contract Development
2. Security Best Practices
3. Testing & Deployment
4. Real-world Examples

---

<!-- header: Smart Contract Development -->

## Basic Smart Contract Structure

<div class="code-block">

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private value;

    event ValueChanged(uint256 newValue);

    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
```

</div>

---

## Advanced Pattern: Diamond Pattern

<div class="grid grid-cols-2 gap-4">
<div>

### Key Points

- Modular contract design
- Upgradeable components
- Gas efficient
- EIP-2535 standard

</div>
<div class="code-block">

```solidity
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

<!-- header: Security Best Practices -->

## Common Security Patterns

<div class="grid grid-cols-2 gap-4">
<div>

### Checks-Effects-Interactions

1. Check preconditions
2. Update state
3. Interact with other contracts

### Re-entrancy Guard

```solidity
modifier nonReentrant() {
    require(!locked, "Reentrant call");
    locked = true;
    _;
    locked = false;
}
```

</div>
<div>

### Access Control

```solidity
contract Ownable {
    address private _owner;

    modifier onlyOwner() {
        require(msg.sender == _owner,
            "Caller is not owner");
        _;
    }

    function transferOwnership(
        address newOwner
    ) public onlyOwner {
        require(newOwner != address(0));
        _owner = newOwner;
    }
}
```

</div>
</div>

---

<!-- header: Testing & Deployment -->

## Testing with Hardhat

<div class="code-block">

```typescript
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('SimpleStorage', function () {
  it('Should store and retrieve value', async function () {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage')
    const storage = await SimpleStorage.deploy()
    await storage.deployed()

    await storage.setValue(42)
    expect(await storage.getValue()).to.equal(42)
  })
})
```

</div>

---

## Real-world Examples

<div class="grid grid-cols-2 gap-4">
<div>

### VWBL Protocol

- NFT Access Control
- Encryption/Decryption
- On-chain Verification

</div>
<div>

### PixeLAW

- Autonomous World
- Game Logic
- State Management

</div>
</div>

---

<!-- header: '' -->

<div class="text-center px-32">

# Thank you!

GitHub: [@posaune0423](https://github.com/posaune0423)
𝕏: [@0xasuma](https://x.com/0xasuma)

</div>
