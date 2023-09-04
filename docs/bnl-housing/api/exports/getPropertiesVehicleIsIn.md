---
sidebar_position: 3
title: getPropertiesVehicleIsIn
description: Get all the properties a vehicle is in
---

# getPropertiesVehicleIsIn

Get all the properties a vehicle is in. Please note that the plate must exactly match the one in the property. If the plate contains any spaces, those must also be passed.

### Server

```lua
exports["bnl-housing"]:getPropertiesVehicleIsIn(vehiclePlate)
```

#### Parameters

- vehiclePlate: `string`

#### Returns

- propertyIds: `number[]`
