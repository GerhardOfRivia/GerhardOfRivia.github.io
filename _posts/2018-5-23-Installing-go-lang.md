---
layout: posts
---

## Pick your download

Now download the Go language binary archive file. [DOWNLOAD][https://golang.org/dl/] 

```
wget https://dl.google.com/go/go1.10.2.linux-amd64.tar.gz
sudo tar -xf go1.10.2.linux-amd64.tar.gz -C /usr/local/
export GOROOT=/usr/local/go
export GOPATH=$HOME/workspace/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

### Validate the install

```
go version

go env
```

### Project design

```
To give you an idea of how a workspace looks in practice, here's an example:

bin/
    hello                          # command executable
    outyet                         # command executable
pkg/
    linux_amd64/
        github.com/golang/example/
            stringutil.a           # package object
src/
    github.com/golang/example/
        .git/                      # Git repository metadata
	hello/
	    hello.go               # command source
	outyet/
	    main.go                # command source
	    main_test.go           # test source
	stringutil/
	    reverse.go             # package source
	    reverse_test.go        # test source
    golang.org/x/image/
        .git/                      # Git repository metadata
	bmp/
	    reader.go              # package source
	    writer.go              # package source
    ... (many more repositories and packages omitted) ...

```

Source: [How to Write Go Code][https://golang.org/doc/code.html]
