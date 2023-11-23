---
sidebar_position: 1
title: createProperty
description: Get all data for a property
---

import NewPropertyData from '../../types/NewPropertyData.md';
import PropertyData from '../../types/PropertyData.md';

# createProperty

### Server

```lua
exports["bnl-housing"]:createProperty(location, model, propertyType, zipcode, streetName, buildingNumber)
```

#### Parameters

<NewPropertyData />

#### Returns

- PropertyData?:
  <PropertyData />
