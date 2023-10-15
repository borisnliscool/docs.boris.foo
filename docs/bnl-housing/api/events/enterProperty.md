---
sidebar_position: 1
title: enterProperty
description: Event that gets triggered when a player enters a property.
---

# bnl-housing&#58;on&#58;enterProperty

Event that gets triggered when a player enters a property.

### Server

```lua
RegisterNetEvent("bnl-housing:on:enterProperty", function(source, propertyId, vehicle)
    print(("player %s entered property %s %s"):format(source, propertyId, vehicle and "in a vehicle" or "on foot"))
end)
```

- source: `number`
- propertyId: `number`
- vehicle: `boolean | number`

### Client

```lua
RegisterNetEvent("bnl-housing:on:enterProperty", function(propertyId, vehicle)
    print(("entered property %s %s"):format(propertyId, vehicle and "in a vehicle" or "on foot"))
end)
```

- propertyId: `number`
- vehicle: `boolean | number`
