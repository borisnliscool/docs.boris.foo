---
sidebar_position: 2
description: Information about configuring different parts of bnl-housing
---

# Configuration

### Framework

```lua
Config.framework = "auto"
```

**Auto** should be fine, otherwise use one of the frameworks specified a couple of lines above.

### Interact Mode

```lua
Config.interactMode = "keypress"
```

Determins how menus open. Either "**keypress**" or "**walk**".

### Player Tag

```lua
Config.playerTag = "both"
```

The way players get listed in menus. Either "**name**", "**id**" or "**both**"

### Invite Expire

```lua
Config.inviteExpire = 15
```

Time in seconds for property invites to expire.

### Invite Range

```lua
Config.inviteRange = 10.0
```

Range for being able to invite players into properties.

### Paid Decoration

```lua
Config.paidDecoration = true
```

If the player needs to pay to place decoration in their property.

### Unload on Empty

```lua
Config.unloadOnEmpty = true
```

Do you want to remove the property entities when all players leave? This does cause slower property entries but is recommended for larger servers to ensure the entity limit isn't reached. This should also use less ram on the server.

### Keybinds

Keybinds are tables with three options.

- `padIndex` 0 is mostly fine, only change if you know what you're doing.
- `control` The control index as found [here](https://docs.fivem.net/docs/game-references/controls/#controls)
- `name` The control name as found [here](https://docs.fivem.net/docs/game-references/controls/#controls)

#### Invite

```lua
Config.Keybinds.invite = {
    padIndex = 0,
    control = 58,
    name = "INPUT_THROW_GRENADE"
}
```

The keybind that can be used to enter a property once invited.

#### Exit Garage

```lua
Config.Keybinds.exitGarage = {
    padIndex = 0,
    control = 87,
    name = "INPUT_VEH_FLY_THROTTLE_UP"
}
```

The key to press to exit a garage in a vehicle.

#### Interact

```lua
Config.Keybinds.interact = {
    padIndex = 0,
    control = 38,
    name = "INPUT_PICKUP"
}
```

Key to interact with most things like property entrance or exit, or special props.

### Vehicle Blacklist

Blacklist vehicles in properties.

#### Classes

```lua
Config.VehicleBlacklist.classes = {
    10, 11, 14, 15, 16, 17, 18, 19, 20, 21
}
```

A list of [vehicle classes](https://docs.fivem.net/natives/?_0x29439776AAA00A62) that are disallowed in properties.

#### Models

```lua
Config.VehicleBlacklist.models = {
    2069146067, -- Oppressor MK2
    -845961253, -- Liberator
}
```

A list of [vehicle models](https://docs.fivem.net/natives/?_0x9F47B058362C84B5) that are banned.

### Points

#### Entrance

```lua
Config.points.entrance = {
    viewDistance = 5.0,
    -- this is only used if Config.interactMode is set to "keypress"
    interact = Config.Keybinds.interact,
    marker = {
        type = 1,
        size = vec3(.8, .8, 1.0),
        vehicleSize = 3,
        offset = vec3(0, 0, -1),
        rotation = vec3(0, 0, 0),
        color = {
            r = 0,
            g = 192,
            b = 255,
            a = 100
        },
        bob = false,
        faceCamera = false
    }
}
```

The point displayed at the entrance of a property.

#### Property

```lua
Config.points.property = {
    viewDistance = 5.0,
    -- this is only used if Config.interactMode is set to "keypress"
    interact = Config.Keybinds.interact,
    marker = {
        type = 1,
        size = vec3(.8, .8, 1.0),
        vehicleSize = 3,
        offset = vec3(0, 0, -1),
        rotation = vec3(0, 0, 0),
        color = {
            r = 0,
            g = 192,
            b = 255,
            a = 100
        },
        bob = false,
        faceCamera = false
    }
}
```

The point displayed inside a property.

### Blips

Should be pretty self explanitory

#### House

```lua
Config.blips.house = {
    owner = {
        sprite = 40,
        color = 2,
    },
    member = {
        sprite = 40,
        color = 3,
        short = true
    },
    renter = {
        sprite = 40,
        color = 5,
    },
    sale = {
        sprite = 350,
        color = 0,
        short = true
    },
}
```

Blips for the property type "house"

#### Warehouse

```lua
Config.blips.warehouse = {
    owner = {
        sprite = 473,
        color = 2,
    },
    member = {
        sprite = 473,
        color = 3,
        short = true
    },
    renter = {
        sprite = 473,
        color = 5,
    },
    sale = {
        sprite = 474,
        color = 0,
        short = true
    },
}
```

Blips for the property type "warehouse"

#### Office

```lua
Config.blips.office = {
    owner = {
        sprite = 475,
        color = 2,
    },
    member = {
        sprite = 475,
        color = 3,
        short = true
    },
    renter = {
        sprite = 475,
        color = 5,
    },
    sale = {
        sprite = 476,
        color = 0,
        short = true
    },
}
```

Blips for the property type "office"

#### Garage

```lua
Config.blips.garage = {
    owner = {
        sprite = 357,
        color = 2,
    },
    member = {
        sprite = 357,
        color = 3,
        short = true
    },
    renter = {
        sprite = 357,
        color = 5,
    },
    sale = {
        sprite = 369,
        color = 0,
        short = true
    },
}
```

Blips for the property type "garage"
