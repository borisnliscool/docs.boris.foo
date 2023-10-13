---
sidebar_position: 1
---

# Usage

Using Ding is straightforward, simply follow these steps:

1. Download the latest release from the [Github](https://github.com/borisnliscool/ding) page.

2. Make sure to start the Ding resource before all other resources in your server configuration. This ensures that Ding is available for other resources to use.

   ```bash
   ensure ding
   ```

3. In every script you want to protect, ensure that the `shared_script "@ding/import.lua"` line is the first script imported in your fxmanifest. This is crucial for Ding to overwrite default methods correctly.

   Here's how you should structure your `fxmanifest.lua`:

   ```lua
   fx_version '...'
   game '...'

   -- Ensure that Ding is loaded first
   shared_script '@ding/import.lua'

   shared_scripts { ... }

   client_scripts { ... }

   server_scripts { ... }
   ```
