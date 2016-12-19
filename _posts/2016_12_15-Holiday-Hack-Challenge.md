----
-layout: post
-title: "Holiday Hack Challenge"
-date: 2016-12-15
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

## Part Three

### Itchy and Scratchy

`sudo -h`

`sudo -l`

`sudo -u itchy /usr/bin/strings -n 16 -r /out.pcap`

Note: n for length for minium of characters

`sudo -u itchy /usr/bin/strings --encoding=l -r /out.pcap`

Note: l = 16-bit littleendian

## Part Four
