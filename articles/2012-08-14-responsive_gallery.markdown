---
date: 2012-08-14T12:00:00+01:00
typeIndex: 2
title: Responsive Gallery – September 2012
canonical:
  issn: 1355-7602
  edition: Issue 232
summary: Fresh responsive thinking from O Music Awards, BBC TV and Passenger Focus.
category:
  - responsive_design
  - web
tags:
  - responsive_gallery
color: "#d8127e"
---

## Passenger Focus

![Passenger Focus homepage on a mobile phone with a screenshot of the desktop layout behind.](/media/2012/227/a2/passenger_focus.png)

![Responsive site of the month](/media/2012/143/a2/site_of_the_month.svg) [Passenger Focus][1] is a consumer watchdog that protects the interests of rail and bus passengers in the UK. They will no doubt appreciate a new site which adapts to whichever device they Happen to be using, be it on the go, or at their desk.

While the site, designed by [Browser][2], is a little utilitarian and includes a header that quite crowded at its fullest width, the underlying layout is incredibly smart and fluid.

Like many adopting a responsive approach, images were a particular concern. David Bushell: <q>We could have easily thrown together a full-width rotating hero full of dynamic train photography and smiling commuters. Instead we created a design that doesn’t rely on raster graphics. They’re part of the supporting cast</q>. This, in addition to SVG vector images used for logos and icons, means the site shines on high resolution displays.

Homepage requests/size
: 19/389kB mobile, 29/483kB desktop

## O Music Awards

![O Music Awards homepage on a mobile phone with a screenshot of the desktop layout behind.](/media/2012/227/a2/o_music_awards.png)

The [O Music Awards][3] is an ongoing awards show presented by Viacom, that honours the intersections of music and technology. The most recent event took place during a 24-hour cross-country, record-breaking road trip with the Flaming Lips.

‘Offbeat and outrageous’, the [Happy Cog][4] designed site features an eclectic collection of grunge imagery and illustration. Much of this features on page backgrounds, where an intriguing parallax effect can be seen as you scroll down the page. This is possibly the most beautiful site featured in this gallery, so I was tempted to award it Responsive Site of the Month.

But, and this is a big, unfortunate but. When I visited the site on my phone, I endured a painful wait as the page slowly downloaded all these images (some almost 2 MB in size). Compressing and reducing the number of assets, use of image sprites and conditional loading techniques would have improved the performance massively, yet without such optimisations, the responsive layout is of little consequence.

Homepage requests/size
: 128/5.05 MB mobile, 176/5.67 MB desktop

## BBC TV

![BBC One homepage on a mobile phone with a screenshot of the desktop layout behind.](/media/2012/227/a2/bbc_tv.png)

Following the launch of the responsive news site earlier this year ([featured in issue 230][5]), the BBC continues to make more of its sites responsive. This includes the most recent update to its four main TV channel sites (for example [bbc.co.uk/bbcone/][6]).

Ste Everington is one of the designers working on this project: <q>We wanted to design an experience that is consistent across the thousands of different devices available, so that you can begin to ignore the device you’re viewing it on and focus more on the content<q>.

While each channel retains its individual branding, all use a common design framework that adapts itself around video content. This framework uses breakpoints based on common screen sizes. <q>We knew that our framework would ultimately have to work across any screen size. However, these six breakpoints provided us a great starting point and gave us something substantial to design and test against</q>.

Even with such device-centred breakpoints, the site still provides a number of different layouts. Indeed, this is one of the few sites I’ve seen that makes use of height-based media queries.

Homepage requests/size
: 76/516 kB mobile, 94/1.13 MB desktop

[1]: passengerfocus.org.uk
[2]: browserlondon.com
[3]: omusicawards.com
[4]: happycog.com
[5]: /2012/214/a1/responsive_gallery/#bbc-news-mobile
[6]: https://bbc.co.uk/bbcone/

*[BBC]: British Broadcasting Corporation
