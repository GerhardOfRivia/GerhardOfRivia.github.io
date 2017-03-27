---
layout: posts
---

### Define Undefined Behavior

Code, we think to know what it will do.

```
#include <limits.h>
#include <stdio.h>

void main () {
	printf("%d\n", (INT_MIN-1) < 0);
}
```

What will this print?

```
#include <limits.h>
#include <stdio.h>

void main () {
	for(int i = 0; i < INT_MAX+1; i++);
	printf("%d\n", (INT_MAX+1) < 0);
}
```

What about this? What will this print?

### Why Is Undefined Behavior Good?

Undefined behavior simplifies the compiler’s job, making it possible to generate very efficient code in certain situations.

```
#include <limits.h>
#include <stdio.h>

void add(int i, int p) {
	printf("%d\n", i+p);
}

void main () {
	int i = 0;
	add(++i, ++i);
}
```

### Why Is Undefined Behavior Bad?

When programmers cannot be trusted to reliably avoid undefined behavior, we end up with programs that silently misbehave.

```
#include <limits.h>
#include <stdio.h>

void main () {
	for(int i = 0; i < INT_MAX+1; i++);
	printf("%d\n", (INT_MAX+1) < 0);
}
```
