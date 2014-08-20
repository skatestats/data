# Trickipedia Stats

The raw data behind [Trickipedia Stats](http://projects.jonchretien.com/trickipedia/).

## CSV Sample

skater | trick | date | url | stance | status
---|---------|---------|---------|---------|---------
boo johnson | frontside shuvit nosegrind  | 08-19-2014 | http://theberrics.com/trickipedia/frontside-shuvit-nosegrind.html | goofy | am
jon nguyen | nollie 180 switch crooked grind | 08-12-2014 | http://theberrics.com/trickipedia/jon-nguyen-nollie-180-switch-crooked-grind.html | regular | am
trevor colden | nollie heelflip noseslide  | 08-05-2014 | http://theberrics.com/trickipedia/trevor-colden-nollie-heelflip-noseslide.html | regular | pro
tommy fynn | backside 180 nosegrind  | 07-29-2014 | http://theberrics.com/trickipedia/tommy-fynn-backside-180-nosegrind.html | goofy | pro
tj rogers | switch frontside 360 ollie  | 07-22-2014 | http://theberrics.com/trickipedia/tj-rogers-switch-frontside-360-ollie.html | regular | am

## JSON Sample

```json
[
    {
        "skater": "boo johnson",
        "trick": "frontside shuvit nosegrind ",
        "date": "08-19-2014",
        "url": "http://theberrics.com/trickipedia/frontside-shuvit-nosegrind.html",
        "stance": "goofy",
        "status": "am"
    },
    {
        "skater": "jon nguyen",
        "trick": "nollie 180 switch crooked grind",
        "date": "08-12-2014",
        "url": "http://theberrics.com/trickipedia/jon-nguyen-nollie-180-switch-crooked-grind.html",
        "stance": "regular",
        "status": "am"
    },
    {
        "skater": "trevor colden",
        "trick": "nollie heelflip noseslide ",
        "date": "08-05-2014",
        "url": "http://theberrics.com/trickipedia/trevor-colden-nollie-heelflip-noseslide.html",
        "stance": "regular",
        "status": "pro"
    },
    {
        "skater": "tommy fynn",
        "trick": "backside 180 nosegrind ",
        "date": "07-29-2014",
        "url": "http://theberrics.com/trickipedia/tommy-fynn-backside-180-nosegrind.html",
        "stance": "goofy",
        "status": "pro"
    },
    {
        "skater": "tj rogers",
        "trick": "switch frontside 360 ollie ",
        "date": "07-22-2014",
        "url": "http://theberrics.com/trickipedia/tj-rogers-switch-frontside-360-ollie.html",
        "stance": "regular",
        "status": "am"
    }
]
```

## Data Source

All data comes from [The Berrics](theberrics.com/trickipedia).