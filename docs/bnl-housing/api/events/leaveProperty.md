---
title: leaveProperty
description: Event that gets triggered when a player leaves a property.
---

# bnl-housing&#58;on&#58;leaveProperty

Event that gets triggered when a player leaves a property.

### Server

```lua
AddEventHandler("bnl-housing:on:leaveProperty", function(source, propertyId, vehicle)
    print(("player %s left property %s %s"):format(source, propertyId, vehicle and "in a vehicle" or "on foot"))
end)
```

- source: `number`
- propertyId: `number`
- vehicle: `boolean | number`

### Client

```lua
AddEventHandler("bnl-housing:on:leaveProperty", function(propertyId, vehicle)
    print(("left property %s %s"):format(propertyId, vehicle and "in a vehicle" or "on foot"))
end)
```

- propertyId: `number`
- vehicle: `boolean | number`
