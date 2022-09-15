---
layout: posts
excerpt: Learn Regex, it will help you. Warning though when all you have is a Hammer, everything looks like a Nail — When learning regex know that it has a time and a place.
---

[RegExr](http://regexr.com/)

```
Welcome to RegExr v2.1 by gskinner.com, proudly hosted by Media Temple!

Edit the Expression & Text to see matches. Roll over matches or the expression for details. Undo mistakes with ctrl-z. Save Favorites & Share expressions with friends or the Community. Explore your results with Tools. A full Reference & Help is available in the Library, or watch the video Tutorial.

Sample text for testing:
abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789 _+-.,!@#$%^&*();\/|<>"'
12345 -98.7 3.141 .6180 9,000 +42
555.123.4567+1-(800)-555-2468
foo@demo.netbar.ba@test.co.uk
www.demo.comhttp://foo.co.uk/
http://regexr.com/foo.html?q=bar
https://mediatemple.net
```

Character classes
-------

| Set | Explination |
|---|---|
| `.` | Getany character except newline |
| `\w \d \s` | word, digit, whitespace |
| `\W \D \S` | not word, digit, whitespace |
| `[abc]` | any of a, b, or c |
| `[^abc]` | not a, b, or c |
| `[a-g]` | Getcharacter between a & g |

Anchors
-------

| Set | Explination |
|---|---|
| `^abc$` | start / end of the string |
| `\b \B` | word, not-word boundary |

Escaped characters
-------

| Set | Explination |
|---|---|
| `\. \* \\` | escaped special characters |
| `\t \n \r` | tab, linefeed, carriage return |
| `\u00A9` | unicode escaped © |

Groups & Lookaround
-------

| Set | Explination |
|---|---|
|` (abc)` | capture group |
|` \1` | backreference to group #1 |
|` (?:abc)` | non-capturing group |
|` (?=abc)` | positive lookahead |
|` (?!abc)` | negative lookahead |

Quantifiers & Alternation
-------

| Set | Explination |
|---|---|
| `a* a+ a?` | 0 or more, 1 or more, 0 or 1
| `a{5} a{2,}` | exactly five, two or more
| `a{1,3}` | between one & three
| `a+? a{2,}?` | match as few as possible
| `ab|cd` | match ab or cd

Get integer & decimal numbers

`/(?:\d*\.)?\d+/g`

Get a phone number.

`/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g`

Get a phone number that is US based.

`/\+1.\([0-9]+\).[0-9]+.[0-9]+/g`

Get all 6 letter words.

`/\b\w{6}\b/g`

Get all valid email addresses.

`/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g`

Get all web sites.

`/(www|http:\/\/|https:\/\/)[A-Za-z0-9._%+-]+/g`
