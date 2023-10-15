---
sidebar_position: 3
title: showUI
description: Event that gets triggerd when a new UI page opens.
---

# bnl-housing&#58;on&#58;showUI

Event that gets triggerd when a new UI page opens. Use this event to hide your server's custom UI which is recommended to avoid overlapping.

### Client

```lua
RegisterNetEvent("bnl-housing:on:showUI", function(page)
    print(("showing ui page %s, hiding custom ui"):format(page))
end)
```

- page: `string`
