# Ding

> not a doorbell script

Ding is a utility for protecting FiveM events by utilizing random nonces to prevent replay attacks, thereby stopping cheaters from triggering your server events.

**Important Note:** While Ding provides protection against most cheating attempts, it is not a fix-all solution. Very experienced cheaters may still find ways to pass its security measures. That said, it's way better than not using it, and it'll stop pretty much any skid.

### Explanation

Ding overwrites the default `TriggerServerEvent`, `AddEventHandler` and `RegisterServerEvent` functions to implement nonces.
A nonce is a partially random number generated through a function that relies on a seed and the previous nonce. The server generates the seed and shares it with the client upon connection. Each time an event is triggered, it requires a nonce. Both the server and the client independently compute this nonce using the seed and the previous nonce to ensure they arrive at the same value. If the calculated nonces match, the event proceeds as expected. If there's a mismatch, the event is canceled because an incorrect nonce was provided.
