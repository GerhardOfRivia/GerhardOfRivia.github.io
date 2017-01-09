---
layout: default
---

## Part One

### Santa's Twitter

@santawclaus - twitter

What is the secert message?

```python
#!/usr/bin/env python
# encoding: utf-8

import tweepy #https://github.com/tweepy/tweepy
import csv

#Twitter API credentials
consumer_key = ""
consumer_secret = ""
token_key = ""
token_secret = ""


def get_all_tweets(screen_name):
    #Twitter only allows token to a users most recent 3240 tweets with this method

    #authorize twitter, initialize tweepy
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(token_key, token_secret)
    api = tweepy.API(auth)

    #initialize a list to hold all the tweepy Tweets
    alltweets = []

    #make initial request for most recent tweets 
    new_tweets = api.user_timeline(screen_name = screen_name,count=350)

    #save the id of the oldest tweet less one
    oldest = alltweets[-1].id - 1

    #keep grabbing tweets until there are no tweets left to grab
    while len(new_tweets) > 0:
        print("getting tweets before %s" % (oldest))

        #all subsiquent requests use the max_id param to prevent duplicates
        new_tweets = api.user_timeline(screen_name = screen_name,count=350,max_id=oldest)

        #save most recent tweets
        alltweets.extend(new_tweets)

        #update the id of the oldest tweet less one
        oldest = alltweets[-1].id - 1

        print("...%s tweets downloaded so far" % (len(alltweets)))

    #transform the tweepy tweets into a 2D array that will populate the csv
    outtweets = [[tweet.id_str, tweet.created_at, tweet.text.encode("utf-8")] for tweet in alltweets]

    #write the csv
    with open('%s_tweets.csv' % screen_name, 'w') as f:
        writer = csv.writer(f)
        writer.writerow(['id','created_at','text'])
        writer.writerows(outtweets)

    pass


if __name__ == '__main__':
    #pass in the username of the account you want to download
    get_all_tweets("SantaWClaus")
```

### Santa's Instagram

Deep in the picture www.northpolewonderland.com

`dig northpolewonderland.com`

```
;; ANSWER SECTION:
www.northpolewonderland.com. 3600 IN CNAME northpolewonderland.com.
northpolewonderland.com.     887  IN A XXX.XXX.XXX.XXX
```

We then asked Tom in the Tree house. "XXX.XXX.XXX.XXX"

"Tom Hessman - XXX.XXX.XXX.XX is in scope, but only for downloading files. No other attcks against this host, or other deviant wiles!"

`wget http://northpolewonderland.com/SantaGram_v4.2.zip`

`unzip SantaGram_v4.2.zip`

Use the code word from the twitter messages.

## Part Two

`unzip SantaGram_v4.2.apk`

```
1 Audio file with ID3 version 2.3.0
1 JPEG image data
1 Targa image data - RLE 360 x 65536 x 17 +1 +28 ""
1 Targa image data - RLE 528 x 65536 x 24 +1 +28 ""
2 Targa image data - RLE 208 x 65536 x 10 +1 +28 ""
134 Android binary XML
261 PNG image data
```

`apktool d SantaGram_v4.2.apk`

```
I: Using Apktool 2.2.0-dirty on SantaGram_4.2.apk
I: Loading resource table...
I: Decoding AndroidManifest.xml with resources...
I: Loading resource table from file: /root/.local/share/apktool/framework/1.apk
I: Regular manifest package...
I: Decoding file-resources...
I: Decoding values */* XMLs...
I: Baksmaling classes.dex...
I: Copying assets and libs...
I: Copying unknown files...
I: Copying original files...
```

`find . -type f -exec file -b {} \; | cut -d, -f1 | sort | uniq -c | sort -n`

```
1 Audio file with ID3 version 2.3.0
1 JPEG image data
261 PNG image data
262 XML 1.0 document
```

[comment]: <> Given hint about look above and below password lines.

`grep -A 2 -B 2 -n -r password`

```
--
com/northpolewonderland/santagram/b.smali-415-    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
com/northpolewonderland/santagram/b.smali-416-
com/northpolewonderland/santagram/b.smali:417:    const-string v1, "password"
com/northpolewonderland/santagram/b.smali-418-
com/northpolewonderland/santagram/b.smali-419-    const-string v2, "busyreindeer78"
--
com/northpolewonderland/santagram/SplashScreen.smali-266-    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
com/northpolewonderland/santagram/SplashScreen.smali-267-
com/northpolewonderland/santagram/SplashScreen.smali:268:    const-string v1, "password"
com/northpolewonderland/santagram/SplashScreen.smali-269-
com/northpolewonderland/santagram/SplashScreen.smali-270-    const-string v2, "busyreindeer78"
--
```

`grep -A 2 -B 2 -n -r username`

```
--
smali/com/northpolewonderland/santagram/b.smali-409-
smali/com/northpolewonderland/santagram/b.smali-410-    :try_start_0
smali/com/northpolewonderland/santagram/b.smali:411:    const-string v1, "username"
smali/com/northpolewonderland/santagram/b.smali-412-
smali/com/northpolewonderland/santagram/b.smali-413-    const-string v2, "guest"
--
smali/com/northpolewonderland/santagram/SplashScreen.smali-260-
smali/com/northpolewonderland/santagram/SplashScreen.smali-261-    :try_start_0
smali/com/northpolewonderland/santagram/SplashScreen.smali:262:    const-string v1, "username"
smali/com/northpolewonderland/santagram/SplashScreen.smali-263-
smali/com/northpolewonderland/santagram/SplashScreen.smali-264-    const-string v2, "guest"
--

```

[comment]: <> Not sure if the username is correct.

`find . -i -name "*.mp3`

```
./res/raw/discombobulatedaudio1.mp3
```

## Part Three

### Itchy and Scratchy

`sudo -h`

`sudo -l`

`sudo -u itchy /usr/bin/strings -n 16 -r /out.pcap`

Note: n for length for minium of characters

`sudo -u itchy /usr/bin/strings --encoding=l -r /out.pcap`

Note: l = 16-bit littleendian

### Wumpus

[comment]: <> I would want to know how to cheat.

```
*******************************************************************************
*                                                                             *
* Find the passphrase from the wumpus.  Play fair or cheat; it's up to you.   * 
*                                                                             *
*******************************************************************************
elf@95def3e77585:~$ ./wumpus

```

```
You are in room 17 of the cave, and have 1 arrow left.
*sniff* (I can smell the evil Wumpus nearby!)
There are tunnels to rooms 4, 10, and 15.
Move or shoot? (m-s) s 4
*thwock!* *groan* *crash*

A horrible roar fills the cave, and you realize, with a smile, that you
have slain the evil Wumpus and won the game!  You don't want to tarry for
long, however, because not only is the Wumpus famous, but the stench of
dead Wumpus is also quite well known, a stench plenty enough to slay the
mightiest adventurer at a single whiff!!

Passphrase:
WUMPUS IS MISUNDERSTOOD
```

### Doormat

```
*******************************************************************************
*                                                                             *
* To open the door, find the passphrase file deep in the directories.         * 
*                                                                             *
*******************************************************************************
elf@d3dc3a845642:~$ find . | more
elf@d3dc3a845642:~$ find . -name "*.txt"
./.doormat/. / /\/\\/Don't Look Here!/You are persistent, aren't you?/'/key_for_the_door.txt
elf@d3dc3a845642:~$ find . -name "*.txt" -exec cat {} \;
key: open_sesame
```

### War Games


[comment]: <> " > " From the termianl.

[comment]: <> " < " Input from me.

```
> GREETINGS PROFESSOR FALKEN.

< Hello.

> HOW ARE YOU FEELING TODAY?

< I'm fine. How are you?

> EXCELLENT. IT'S BEEN A LONG TIME. CAN YOU EXPLAIN
> THE REMOVAL OF YOUR USER ACCOUNT ON 6/23/73?

< People sometimes make mistakes.

> YES THEY DO. SHALL WE PLAY A GAME?

< Love to. How about Global Thermonuclear War?

> WOULDN'T YOU PREFER A GOOD GAME OF CHESS?

< Later. Let's play Global Thermonuclear War.

> FINE.

> ,------~~v,_         _                     _--^\
> |'          \   ,__/ ||                 _/    /,_ _
> /             \,/     /         ,,  _,,/^         v v-___
> |                    /          |'~^                     \
> \                   |         _/                     _ _/^
>  \                 /         /                   ,~~^/ | 
>   ^~~_       _ _   /          |          __,, _v__\   \/
>       '~~,  , ~ \ \           ^~       /    ~   //
>           \/     \/             \~,  ,/          
>                                    ~~
>    UNITED STATES                   SOVIET UNION
> 
> WHICH SIDE DO YOU WANT?
>      1.    UNITED STATES
>      2.    SOVIET UNION

> PLEASE CHOOSE ONE: 

< 2

> AWAITING FIRST STRIKE COMMAND
> -----------------------------
> PLEASE LIST PRIMARY TARGETS BY
> CITY AND/OR COUNTRY NAME: 

< Las Vegas

> LAUNCH INITIATED, HERE'S THE KEY FOR YOUR TROUBLE: 

> LOOK AT THE PRETTY LIGHTS

> Press Enter To Continue

```

### The Train Game

```

                ==== MAIN MENU ====
STATUS:                         Train Status
BRAKEON:                        Set Brakes
BRAKEOFF:                       Release Brakes
START:                          Start Train
HELP:                           Open the help document
QUIT:                           Exit console
```

`HELP`

```
Help Document for the Train
**STATUS** option will show you the current state of the train (brakes, boiler, boiler
 temp, coal level)
**BRAKEON** option enables the brakes.  Brakes should be enabled at every stop and whi
le the train is not in use.
  
**BRAKEOFF** option disables the brakes.  Brakes must be disabled before the **START**
 command will execute.
**START** option will start the train if the brake is released and the user has the co
rrect password.
**HELP** brings you to this file.  If it's not here, this console cannot do it, unLESS
 you know something I don't.
```

You are now running less.

`! ls`

`! ./ActivateTrain`

```
Help Document for the Train
   MONTH   DAY     YEAR          HOUR   MIN
  +-----+ +----+ +------+  O AM +----+ +----+      DISCONNECT CAPACITOR DRIVE
  | NOV | | 16 | | 1978 |       | 10 |:| 21 |           BEFORE OPENING
  +-----+ +----+ +------+  X PM +----+ +----+     +------------------------+
                DESTINATION TIME                  |                        |
  +-----------------------------------------+     |    +XX         XX+     |
  +-----------------------------------------+     |    |XXX       XXX|     |
                                                  |  +-+ XXX     XXX +-+   |
   MONTH   DAY     YEAR          HOUR   MIN       |       XXX   XXX        |
  +-----+ +----+ +------+  O AM +----+ +----+     |         XXXXX          |
  | JAN | | 04 | | 2017 |       | 09 |:| 02 |     |          XXX           |
  +-----+ +----+ +------+  X PM +----+ +----+     |          XXX           |
                  PRESENT TIME                    |          XXX           |
  +-----------------------------------------+     | SHIELD EYES FROM LIGHT |
  +-----------------------------------------+     |          XXX           |
                                                  |          XX+-+         |
   MONTH   DAY     YEAR          HOUR   MIN       |                        |
  +-----+ +----+ +------+  O AM +----+ +----+     +------------------------+
  | NOV | | 16 | | 1978 |       | 10 |:| 21 |            +---------+
  +-----+ +----+ +------+  X PM +----+ +----+            |ACTIVATE!|
                LAST TIME DEPARTED                       +---------+

Press Enter to initiate time travel sequence.
```

```
--->Activating TIME TRAVEL sequence NOW.....


--->Activating TIME TRAVEL sequence NOW.....
***** TIME TRAVEL TO 1978 SUCCESSFUL! *****
```

[comment]: <> I found SANTA behind the Wumpus Door in 1978!

## Part Four

[comment]: <> Inside the APK file.

`grep -n http strings.xml`

```
strings.xml:24:    <string name="analytics_launch_url">https://analytics.northpolewonderland.com/report.php?type=launch</string>
strings.xml:25:    <string name="analytics_usage_url">https://analytics.northpolewonderland.com/report.php?type=usage</string>
strings.xml:29:    <string name="banner_ad_url">http://ads.northpolewonderland.com/affiliate/C9E380C8-2244-41E3-93A3-D6C6700156A5</string>
strings.xml:32:    <string name="debug_data_collection_url">http://dev.northpolewonderland.com/index.php</string>
strings.xml:34:    <string name="dungeon_url">http://dungeon.northpolewonderland.com/</string>
strings.xml:35:    <string name="exhandler_url">http://ex.northpolewonderland.com/exception.php</string>
```
---


`dig analytics.northpolewonderland.com`

```
;; ANSWER SECTION:
analytics.northpolewonderland.com. 1426IN API XXX.XXX.XXX.XXX

```

[comment]: <> Inside the game.... At Tom Hessman

> Yes! XXX.XXX.XXX.XXX is in scope! Just make sure you don't launch denial of service attacks, or interfere with the host's production processing. Dirbuster will not help you.

`nmap -sC analytics.northpolewonderland.com`

```
Starting Nmap 7.40 ( https://nmap.org ) at 2017-01-04 16:57 MST
Nmap scan report for analytics.northpolewonderland.com (104.198.252.157)
Host is up (0.013s latency).
rDNS record for 104.198.252.157: 157.252.198.104.bc.googleusercontent.com
Not shown: 998 filtered ports
PORT    STATE SERVICE
22/tcp  open  ssh
| ssh-hostkey: 
|   1024 5d:5c:37:9c:67:c2:40:94:b0:0c:80:63:d4:ea:80:ae (DSA)
|   2048 f2:25:e1:9f:ff:fd:e3:6e:94:c6:76:fb:71:01:e3:eb (RSA)
|_  256 4c:04:e4:25:7f:a1:0b:8c:12:3c:58:32:0f:dc:51:bd (ECDSA)
443/tcp open  https
| http-git: 
|   104.198.252.157:443/.git/
|     Git repository found!
|     Repository description: Unnamed repository; edit this file 'description' to name the...
|_    Last commit message: Finishing touches (style, css, etc) 
| http-title: Sprusage Usage Reporter!
|_Requested resource was login.php
| ssl-cert: Subject: commonName=analytics.northpolewonderland.com
| Subject Alternative Name: DNS:analytics.northpolewonderland.com
| Not valid before: 2016-12-07T17:35:00
|_Not valid after:  2017-03-07T17:35:00
|_ssl-date: TLS randomness does not represent time
| tls-nextprotoneg: 
|_  http/1.1

Nmap done: 1 IP address (1 host up) scanned in 5.82 seconds
```

[comment]: <> On the terminal

`curl https://analytics.northpolewonderland.com/report.php?type=launch`

> Only application/json POSTs are accepted!

`curl -H "Content-Type: application/json" -X POST -d '{"username":"guest","password":"busyreindeer78"}' https://analytics.northpolewonderland.com/report.php?type=launch`

> {"result":200,"msg":"Success!"}

`curl -H "Content-Type: application/json" -X POST -d '{"username":"guest","password":"busyreindeer78"}' https://analytics.northpolewonderland.com/report.php?type=php

> {"result":500,"msg":"<em>type<\/em> parameter must be either launch or usage"}

`curl -H "Content-Type: application/json" -X POST -d '{"username":"guest","password":"busyreindeer78"}' https://analytics.northpolewonderland.com/report.php?type=usage

> {"result":200,"msg":"Success!"}

[comment]: <> On a web browser.

`https://analytics.northpolewonderland.com/`

[comment]: <> Login in and up at the top nav bar [mp3]

---


`dig ads.northpolewonderland.com`

[comment]: <> Inside the game.... At Tom Hessman

> Yes! XXX.XXX.XXX.XXX is in scope! Just make sure you don't launch denial of service attacks, or interfere with the host's production processing. Dirbuster will not help you.

`nmap -sC ads.northpolewonderland.com`

```
Starting Nmap 7.40 ( https://nmap.org ) at 2017-01-04 17:10 MST
Nmap scan report for ads.northpolewonderland.com (104.198.221.240)
Host is up (0.013s latency).
rDNS record for 104.198.221.240: 240.221.198.104.bc.googleusercontent.com
Not shown: 998 filtered ports
PORT   STATE SERVICE
22/tcp open  ssh
| ssh-hostkey: 
|   1024 cf:4c:e0:20:6d:e7:c6:b1:6b:9f:ac:75:45:16:b1:93 (DSA)
|   2048 b9:a4:df:1e:34:0f:58:3e:2c:b7:e6:c6:77:0f:f5:3b (RSA)
|_  256 02:ec:fc:80:c0:fc:76:b3:cd:d2:64:39:af:3c:13:b3 (ECDSA)
80/tcp open  http
|_http-title: Ad Nauseam - Stupid Ads for Stupid People

Nmap done: 1 IP address (1 host up) scanned in 4.90 seconds

```

[comment]: <> .... Yes I did read that.

[comment]: <> And now I don't know what to do.

---

`dig dev.northpolewonderland.com`

[comment]: <> Inside the game.... At Tom Hessman

> Yes! XXX.XXX.XXX.XXX is in scope! Just make sure you don't launch denial of service attacks, or interfere with the host's production processing. Dirbuster will not help you.

`nmap -sC dev.northpolewonderland.com`

```
Starting Nmap 7.40 ( https://nmap.org ) at 2017-01-04 16:55 MST
Nmap scan report for dev.northpolewonderland.com (35.184.63.245)
Host is up (0.013s latency).
rDNS record for 35.184.63.245: 245.63.184.35.bc.googleusercontent.com
Not shown: 998 filtered ports
PORT   STATE SERVICE
22/tcp open  ssh
| ssh-hostkey: 
|   1024 79:a9:ac:53:73:c7:87:69:61:c8:6f:7c:cd:e4:5d:f2 (DSA)
|   2048 f2:fb:1c:aa:92:78:ae:04:7d:19:f9:74:e8:91:00:b6 (RSA)
|_  256 5e:05:a6:1b:76:72:74:2b:9f:a5:e5:06:f8:fa:4f:39 (ECDSA)
80/tcp open  http
|_http-title: Site doesn't have a title (application/json).

Nmap done: 1 IP address (1 host up) scanned in 5.28 seconds
```

`curl -H "Content-Type: application/json" -X POST -d '{"username":"guest","password":"busyreindeer78"}' http://dev.northpolewonderland.com`


---

`dig dungeon.northpolewonderland.com`

[comment]: <> Inside the game.... At Tom Hessman

> Yes! XXX.XXX.XXX.XXX is in scope! Just make sure you don't launch denial of service attacks, or interfere with the host's production processing. Dirbuster will not help you.

`nmap -sC dungeon.northpolewonderland.com`

```
Starting Nmap 7.40 ( https://nmap.org ) at 2017-01-04 17:11 MST
Nmap scan report for dungeon.northpolewonderland.com (35.184.47.139)
Host is up (0.013s latency).
rDNS record for 35.184.47.139: 139.47.184.35.bc.googleusercontent.com
Not shown: 983 closed ports
PORT      STATE    SERVICE
1/tcp     filtered tcpmux
3/tcp     filtered compressnet
4/tcp     filtered unknown
6/tcp     filtered unknown
7/tcp     filtered echo
9/tcp     filtered discard
13/tcp    filtered daytime
17/tcp    filtered qotd
19/tcp    filtered chargen
22/tcp    open     ssh
| ssh-hostkey:
|   1024 c0:5a:84:94:cf:6f:b9:23:c8:23:32:66:2d:e2:e7:6e (DSA)
|   2048 c4:cf:f2:c3:c5:63:26:bb:34:ab:b6:fe:a0:73:91:49 (RSA)
|_  256 78:4a:3e:2f:24:d1:14:eb:6e:53:7d:5a:6c:0a:42:af (ECDSA)
25/tcp    filtered smtp
37/tcp    filtered time
80/tcp    open     http
|_http-title: About Dungeon
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
11111/tcp open     vce

Nmap done: 1 IP address (1 host up) scanned in 2.33 seconds
```

### Epilogue

I had fun and want to thank the Sans Team for the hours of enjoyment. I didn't finish but next year maybe I will have more time.


