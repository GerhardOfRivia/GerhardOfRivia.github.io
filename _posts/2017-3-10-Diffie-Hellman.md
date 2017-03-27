---
layout: default
---

# Diffie–Hellman key exchange

A specific method of securely exchanging cryptographic keys over a public channel and was one of the first public-key protocols as originally conceptualized by Ralph Merkle and named after Whitfield Diffie and Martin Hellman. This is one of the earliest practical examples of public key exchange implemented within the field of cryptography.

### General overview

Illustration of the Diffie–Hellman Key Exchange
Diffie–Hellman Key Exchange establishes a shared secret between two parties that can be used for secret communication for exchanging data over a public network. The following conceptual diagram illustrates the general idea of the key exchange by using colors instead of very large numbers.

The process begins by having the two parties, Alice and Bob, agree on an arbitrary starting color that does not need to be kept secret (but should be different every time[8]); in this example the color is yellow. Each of them selects a secret color–red and aqua respectively–that they keep to themselves. The crucial part of the process is that Alice and Bob now mix their secret color together with their mutually shared color, resulting in orange and blue mixtures respectively, then publicly exchange the two mixed colors. Finally, each of the two mix together the color they received from the partner with their own private color. The result is a final color mixture (brown) that is identical to the partner's color mixture.

If Eve had been listening in on the exchange, it would be computationally difficult for that person to determine the common secret color; in fact, when using large numbers rather than colors, this action is likely very difficult for modern supercomputers to do in a reasonable amount of time.

![Diffie-Hellman](/img/Diffie-Hellman.png)
