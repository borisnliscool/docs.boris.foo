---
sidebar_position: 5
title: buyProperty
description: Event that gets triggerd when a player buys a property
---

# bnl-housing&#58;on&#58;buyProperty

Event that gets triggerd when a player buys a property.

### Server

```lua
RegisterNetEvent("bnl-housing:on:buyProperty", function(source, propertyId, price)
    print(("player %s bought property %s for %s"):format(source, propertyId, price))
end)
```

- source: `number`
- propertyId: `number`
- price: `number`
