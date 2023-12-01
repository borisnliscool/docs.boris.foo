---
sidebar_position: 8
title: registerSpecialProp
description: Register a "Special Prop"
---

# registerSpecialProp

### Shared

```lua
exports["bnl-housing"]:registerSpecialProp(options)
```

#### Parameters

- options: `table`
  - model: `string`
  - interact?:
    - interactMode `"keypress" | "target"`
    - range: `number`
    - helpText?: `string`
    - keybind?:
      - padIndex: `number`,
      - control: `number`,
      - name: `string`,
    - target?: [`OxTargetOptions[]`](https://overextended.dev/ox_target/Options)
    - marker?:
      - type: [`number`](https://docs.fivem.net/docs/game-references/markers/),
      - offset: `vector3`,
      - size?: `vector3`,
      - rotation?: `vector3`,
      - color?:
        - r?: `number`,
        - g?: `number`,
        - b?: `number`,
        - a?: `number`
      - bob?: `boolean`,
      - faceCamera?: `boolean`
    - outline?:
      - color?:
        - r?: `number`,
        - g?: `number`,
        - b?: `number`,
        - a?: `number`
      - shader?: [`number`](https://docs.fivem.net/natives/?_0x5261A01A)
  - handlers?:
    - client?:
      - interact?: `string` | `string[]` | `function`
      - spawn?: `string` | `string[]` | `function`
      - destroy?: `string` | `string[]` | `function`
    - server?:
      - interact?: `string` | `string[]` | `function`
      - spawn?: `string` | `string[]` | `function`
      - destroy?: `string` | `string[]` | `function`

### Examples

Special prop with target

```lua
exports["bnl-housing"]:registerSpecialProp({
    model = 'prop_generator_01a',

    interact = {
        interactMode = "target",
        range = 2.0,

        target = {
            {
                label = "Open generator",
                icon = "fa-solid fa-eye",
                onSelect = function(_, prop)
                    print("Interacting with", prop.id)
                end
            }
        },

        marker = {
            type = 2,
            offset = vector3(0.0, 0.0, 1.25),
            size = vector3(0.25, 0.25, 0.25),
            rotation = vector3(180.0, 0.0, 0.0),
            color = {
                r = 255,
                g = 255,
                b = 255,
                a = 200
            },
            bob = false,
            faceCamera = true
        },
    },

    handlers = {
        client = {
            interact = "export.bnl-housing-utils:interact"
        },
        server = {
            spawn = {
                "event.bnl-housing-utils:spawn-generator",
                "export.bnl-housing-utils:spawn-generator",
            },
            interact = "export.bnl-housing-utils:interact"
        }
    }
})
```

Special prop with keypress

```lua
exports["bnl-housing"]:registerSpecialProp({
    model = 'prop_generator_01a',

    interact = {
        interactMode = "keypress",
        range = 2.0,
        helpText = "~INPUT_PICKUP~ Open generator",

        keybind = {
            padIndex = 0,
            control = 38,
            name = "INPUT_PICKUP"
        },

        outline = {
            color = {
                r = 255,
                g = 255,
                b = 255,
                a = 255
            },
            shader = 1
        },
    },

    handlers = {
        client = {
            interact = "export.bnl-housing-utils:interact"
        },
        server = {
            spawn = {
                "event.bnl-housing-utils:spawn-generator",
                "export.bnl-housing-utils:spawn-generator",
            },
            interact = "export.bnl-housing-utils:interact"
        }
    }
})
```
