---
layout: default
---

# DWM - window manager

DWM (dynamic window manager, http://dwm.suckless.org/) is an extremely lightweight tiling window manager written in C which saves screen space and works pretty well as long as you enjoy simple programs doing only a few tasks.

Download the source coe.

### tar

`wget http://dl.suckless.org/dwm/dwm-6.X.tar.gz`
`tar xvzf dwm-6.X.tar.gz`

### git

`git clone http://git.suckless.org/dwm`

### apt-source

`apt-get source dwm`

### Step One

Now `cd dwm` here we can edit the config file.

`make` 

To make sure we have all of dwm's dependencies.

On a Debian / Ubuntu distro you may have to install.

+ build-essential 
+ libx11-dev 
+ libxinerama-dev 
+ sharutils 
+ suckless-tools

### Step Two

Customizing dwm can be done by making changes to config.h and recompiling the window manager.

`vim config.h`

Lets first change the fonts. You can find a list of fonts by doing. `fc-list`

```
8,9c8,9
< static const char *fonts[]          = { "monospace:size=10" };
< static const char dmenufont[]       = "monospace:size=10";
---
> static const char *fonts[]          = { "DejaVu Sans Mono:size=10" };
> static const char dmenufont[]       = "DejaVu Sans Mono:size=10";
```

I enjoy changing the top tags.

```
22c22
< static const char *tags[] = { "1", "2", "3", "4", "5", "6", "7", "8", "9" };
---
> static const char *tags[] = { "-", "-", "-", "-", "-" };
```

Adding the super or windows key for quick command.

```
/* key definitions */
#define MODKEY Mod1Mask
> #define SUPKEY Mod4Mask
#define TAGKEYS(KEY,TAG) \
	{ MODKEY,                       KEY,      view,           {.ui = 1 << TAG} }, \
>	{ SUPKEY,                       KEY,      view,           {.ui = 1 << TAG} }, \
```


```
> static const char *lockcmd[]  = { "slock", NULL };
> static const char *inetcmd[]  = { "surf", NULL };
64a69,70
> 	{ SUPKEY,                       XK_l,      spawn,          {.v = lockcmd } },
> 	{ SUPKEY,                       XK_i,      spawn,          {.v = inetcmd } },
```

### Once installed.

The default keyboard shortcuts are listed at `man dwm`

```
Alt+Shift+Enter
  Launch st
Alt+Shift+C
   Kill a client (a window, if you must insist)
Alt+t
   Switch to tile layout
Alt+m
   Switch to monocle layout
Alt+f
   Switch to floating layout
Alt+b
   Show/hide bar
Alt+p
   Launch dmenu
Alt+[num]
   Switch to tag [num]
Alt+Tab
   Switch back to previous tab
Alt+Shift+Q
   Quit dwm
```
