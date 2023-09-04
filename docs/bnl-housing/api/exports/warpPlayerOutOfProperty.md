---
sidebar_position: 5
title: warpPlayerOutOfProperty
description: Warp the player out of a property
---

import PropertyData from '../../types/PropertyData.md';

# warpPlayerOutOfProperty

### Server

```lua
exports["bnl-housing"]:warpPlayerOutOfProperty(playerId, propertyId)
```

#### Parameters

- playerId: `number`
- propertyId?: `number`
  - if not set, the player will be warped out of the current property

#### Returns

- success: `boolean`
