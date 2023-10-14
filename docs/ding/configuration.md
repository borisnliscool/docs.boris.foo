---
sidebar_position: 2
---

# Configuration

To configure Ding you use convars in your server config.

### invalidNonceExports

This convar specifies which exports should be triggered when an invalid nonce is provided during an event. The data passed to this export is of the following structure:

```lua
{
    source = 1,
    event = "testevent",
    clientNonce = "anything"
}
```

#### Example:

```bash
setr ding:invalidNonceExports ["anticheat:banPlayer", "foo:bar"]
```

In this example, when an invalid nonce is detected, the `anticheat:banPlayer` and `foo:bar` exports will be executed as specified in the configuration.

### warnUnused

This convar controls whether Ding should display errors when server scripts attempt to use Ding events incorrectly. While not essential, enabling this option can be helpful for debugging purposes.

#### Example:

```bash
setr ding:warnUnused true
```

In this example, setting ding:warnUnused to true will enable error warnings for incorrect usage of Ding events in server scripts.

### whitelistedEvents

This convar controls which events Ding should ignore and not overwrite.

#### Example:

```bash
setr ding:whitelistedEvents ["resource:event"]
```
