----
-layout: post
-title: "Holiday Hack Challenge 2016"
-date: 2017-1-1
----

# 2016 Holiday Hack Challenge

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

Deep in the picture northpolewonderland.com

```
;; ANSWER SECTION:
www.northpolewonderland.com. 3600 IN CNAME northpolewonderland.com.
northpolewonderland.com.     887  IN A 130.211.124.143
```

We then asked Tom in the Tree house. "130.211.124.143"

"Tom Hessman - 130.211.124.143 is in scope, but only for downloading files. No other attcks against this host, or other deviant wiles!"

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


[comment]: <> I don't know where to start this.
