---
sidebar_position: 4
title: hideUI
description: Event that gets triggerd when the UI gets hidden.
---

# bnl-housing&#58;on&#58;hideUI

Event that gets triggerd when the UI gets hidden. Use this event to show your server's custom UI that was hidden for [showUI](showUI).

### Client

```lua
AddEventHandler("bnl-housing:on:hideUI", function()
    print("ui was hidden, showing custom ui")
end)
```
