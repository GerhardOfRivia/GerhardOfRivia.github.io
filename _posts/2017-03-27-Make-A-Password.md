---
layout: posts
excerpt: When you need a password but want to autogenerate it use this simple bash password generator
---

# What Password

`cat ./mkpasswd`

```sh
#!/bin/sh

LEN=${1:-50}

</dev/urandom tr -cd ${CHAR:-'a-zA-Z0-9!@#%^*'} | fold -w ${LEN} | sed 1q
```

## Example

```sh
$ chmod 700 ./mkpasswd
$ ./mkpasswd
ztVT%K6rG2uGiDMbtQN5bPlyZzmjwk Ur^%A!d98iSbu4i*iLl
```

Use with [Warded](https://github.com/hexid/warded). A minimal passphrase manager using Chacha20-Poly1305
