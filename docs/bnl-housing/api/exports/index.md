# Exports

import DocCardList from '@theme/DocCardList';

When using a lot of exports from bnl-housing, I recommend to make a variable named `Housing` or something similar and set it to `exports["bnl-housing"]`.
This way, you can use `Housing:method` to write cleaner code.

```lua
Housing = exports["bnl-housing"]
```

<br/>

<DocCardList />
