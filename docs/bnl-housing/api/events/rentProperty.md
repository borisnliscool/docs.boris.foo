---
sidebar_position: 6
title: rentProperty
description: Event that gets triggerd when a player rents a property
---

# bnl-housing&#58;on&#58;rentProperty

Event that gets triggerd when a player rents a property.

### Server

```lua
RegisterNetEvent("bnl-housing:on:rentProperty", function(source, propertyId, price)
    print(("player %s rented property %s for %s"):format(source, propertyId, price))
end)
```

- source: `number`
- propertyId: `number`
- price: `number`
