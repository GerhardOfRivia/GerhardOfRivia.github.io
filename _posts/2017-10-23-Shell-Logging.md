---
layout: posts
excerpt: Logging, Bash and Python
---

**Bash Logging made easy**

Ideally we would like the following:

- log messages sent to syslog
- stdout and stderr kept separate
- stdout and stderr message order preserved

**1. Logging with functions**

```
#!/bin/bash

readonly SCRIPT_NAME=$(basename $0)

function log() {
  echo "$@"
  logger -p user.notice -t $SCRIPT_NAME "$@"
}

function err() {
  echo "$@" >&2
  logger -p user.error -t $SCRIPT_NAME "$@"
}

log "writing to stdout"
err "writing to stderr"
```

**Design an Expected format**

```
TimeStamp    LogLevel   Message
```

```
readonly SCRIPT_NAME=$(basename $0)
readonly SCRIPT_LOG=/tmp/${SCRIPT_NAME}
touch $SCRIPT_LOG

function SCRIPT_ENTRY(){
    time_info=$(date)
    script_name="${SCRIPT_NAME%.*}"
    echo "[${time_info}] [DEBUG]  > $script_name $FUNCNAME" >> $SCRIPT_LOG
}

function SCRIPT_EXIT(){
    time_info=$(date)
    script_name="${SCRIPT_NAME%.*}"
    echo "[${time_info}] [DEBUG]  < $script_name $FUNCNAME" >> $SCRIPT_LOG
}

function INFO(){
    local function_name="${FUNCNAME[1]}"
    local msg="$1"
    time_info=$(date)
    echo "[${time_info}] [INFO]  $msg" >> $SCRIPT_LOG
}

function DEBUG(){
    local function_name="${FUNCNAME[1]}"
    local msg="$1"
    time_info=$(date)
    echo "[${time_info}] [DEBUG]  $msg" >> $SCRIPT_LOG
}

function ERROR(){
    local function_name="${FUNCNAME[1]}"
    local msg="$1"
    time_info=$(date)
    echo "[${time_info}] [ERROR]  $msg" >> $SCRIPT_LOG
}
```

**Ideally we want to keep things simple**

What ended the search for simple logging in bash.

NON-POSIX:
```
    exec 1> >(logger -s -t $(basename $0)) 2>&1
```

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Pretty much the best thing ever you could put at the top of your bash script:<br><br>exec 1&gt; &gt;(logger -s -t $(basename $0)) 2&gt;&amp;1</p>&mdash; Eric Lindvall (@lindvall) <a href="https://twitter.com/lindvall/status/509054237267853312?ref_src=twsrc%5Etfw">September 8, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
