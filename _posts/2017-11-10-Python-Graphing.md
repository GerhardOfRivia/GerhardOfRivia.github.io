---
layout: posts
---

### Python Matplotlib on a remote system

http://matplotlib.org/faq/howto_faq.html#matplotlib-in-a-web-application-server

> Many users report initial problems trying to use maptlotlib in web application servers, because by default Matplotlib ships configured to work with a graphical user interface which may require an X11 connection. Since many barebones application servers do not have X11 enabled, you may get errors if you don’t configure Matplotlib for use in these environments. Most importantly, you need to decide what kinds of images you want to generate (PNG, PDF, SVG) and configure the appropriate default backend. For 99% of users, this will be the Agg backend, which uses the C++ antigrain rendering engine to make nice PNGs. The Agg backend is also configured to recognize requests to generate other output formats (PDF, PS, EPS, SVG). The easiest way to configure Matplotlib to use Agg is to call:

```
# do this before importing pylab or pyplot
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
```

You can either generate hardcopy on the filesystem by calling savefig:

```
# do this before importing pylab or pyplot
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

plt.style.use('seaborn-whitegrid')
fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)
ax.plot([1, 2, 3])
fig.savefig('test.png')
```

or use an IObuffer cause why use the filesystem?

```
import matplotlib.pyplot as plt
plt.style.use('seaborn-whitegrid')
fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)
ax.plot([1, 2, 3])
buffer = io.BytesIO()
# make a buffer
plt.savefig(buffer, format='png', bbox_inches='tight', figsize=(5, 15))
# save fig to the buffer
buffer.seek(0)
# reset the buffer to the start to read the buffer
img = buffer.read()
buffer.close()
# img now contains the plot
```
