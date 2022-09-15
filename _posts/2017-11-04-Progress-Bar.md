---
layout: posts
excerpt: I think at this point I have started working and when writing code for more people then me they sometimes expect output when the task is completing. So I realized using loading bars can help show that is it working.
---

**Please wait while we do something**

*Bash*

```bash
#!/bin/bash

# Author: Dotan Barak (very minor revisions by ABS Guide author).

BAR_WIDTH=50
BAR_CHAR_START="["
BAR_CHAR_END="]"
BAR_CHAR_EMPTY="."
BAR_CHAR_FULL="="
BRACKET_CHARS=2
LIMIT=100

function print_progress_bar() {
        # Calculate how many characters will be full.
        let "full_limit = ((($1 - $BRACKET_CHARS) * $2) / $LIMIT)"

        # Calculate how many characters will be empty.
        let "empty_limit = ($1 - $BRACKET_CHARS) - ${full_limit}"

        # Prepare the bar.
        bar_line="${BAR_CHAR_START}"
        for ((j=0; j&lt;full_limit; j++)); do
                bar_line="${bar_line}${BAR_CHAR_FULL}"
        done

        for ((j=0; j&lt;empty_limit; j++)); do
                bar_line="${bar_line}${BAR_CHAR_EMPTY}"
        done

        bar_line="${bar_line}${BAR_CHAR_END}"

        printf "%3d%% %s" $2 ${bar_line}
}


exit
```

**Example**:

```bash
# Here is a sample that waits for 5 minutes
MAX_PERCENT=100
for ((i=0; i<=MAX_PERCENT; i++)); do
        print_progress_bar ${BAR_WIDTH} ${i}
        echo -en "\r"
        sleep 3
done
echo ""

```

*Python*

```python
#!/usr/bin/env python3
import sys

def progressbar(it, prefix="", size=60):
    count = len(it)
    def _show(_i):
        x = int(size*_i/count)
        sys.stdout.write("%s[%s%s] %i/%i\r" % (prefix, "#"*x, "."*(size-x), _i, count))
        sys.stdout.flush()

    _show(0)
    for i, item in enumerate(it):
        yield item
        _show(i+1)
    sys.stdout.write("\n")
    sys.stdout.flush()
```

**Example**:

```python
#!/usr/bin/env python3
import time

for i in progressbar(range(15), "Processing: ", 60):
    time.sleep(1) 
```
