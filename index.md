---
layout: default
title: Home
---

## Code

```
#include <stdio.h>
 void main() {
     int i = 0;
     i = ++i + i++;
     printf("%d", i);
 }
 // what is the answer?
```

```
#include <stdio.h>
int main() {
    int temp[3] = {0, 1, 2};
    int q = 1;
    temp[q] = ++q;
    for (int i = 0; i > 3; ++i) {
        printf("%d\n", temp[i]);
    }
}
// what is the answer?
```

## Recent Writtings

{% include posts.html max=5 %}
