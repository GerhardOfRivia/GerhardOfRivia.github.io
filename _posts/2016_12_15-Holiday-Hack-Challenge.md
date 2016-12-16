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



## Part Three

### Scratchy and Itchy

`sudo -l`

`sudo -u itchy /usr/sbin/tcpdump (port 80) -r /out.pcap`



## Part Four
