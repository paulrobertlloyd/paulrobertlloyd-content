---
date: 2024-05-15T20:15:00+02:00
time_zone: Europe/Berlin
title: IndieWeb principles
summary: When people ask what is the IndieWeb, and who is it for, do its principles hinder more than they help?
category:
  - indieweb
tags:
  - featured
location:
  locality: Somewhere near Passau
  country_name: Germany
accent_color: "#f00"
---

As [mentioned in my last post][1], I was in Düsseldorf last weekend for [IndieWebCamp][2]. Organisation was a little haphazard and attendance was lower than other camps I’ve attended, but it was still a good opportunity to meet and catch-up with other members of the community.

The first day of an IndieWebCamp is used for discussion and for the final session of the day [I proposed a discussion around principles][3]. The IndieWeb has [11 principles][4], but having faced scrutiny and [criticism][5], I wondered if now was the time to review their relevance and composition.

I was curious how they originated and whether they still match the aspirations and goals of the community as it stands in 2024. When people ask what is the IndieWeb, and who is it for, do its principles hinder more than they help?

## First principles

The first principle states:

> **Own your data.** Your content, your metadata, your identity.

There are few issues with this. Firstly, the language (data, metadata, identity) speaks a narrow audience. Furthermore, while owning your identity is mentioned, it could be considered a separate principle, not least because having your own domain name makes owning your data online possible.

The second principle states:

> **Use and publish visible data.** For humans first, machines second.

Again, this addresses a narrow audience, appealing more to spec authors than people who want to publish online. Principles 3 to 10 continue in a similar vein.

It’s only when you get to the final principle that you’ll find something a little more creatively-minded:

> **Above all, have fun.** When the web took off in the 90’s people began designing personal sites with tools such as GeoCities. These spaces had Java applets, garish green background and seventeen animated GIFs. It may have been ugly and badly coded but it was fun. Keep the web weird and interesting.

If the IndieWeb was only about designing a set of standards, then maybe the principles as they currently stand would be fine. Yet there’s a mismatch given the aspiration for the IndieWeb to be a place for all.

At IndieWebCamp Brighton, when somebody mentioned that they still didn’t know what the IndieWeb is, [Jeremy responded][6]:

> It’s having your own website.

There’s a beautiful simplicity in this message, but it can get lost in discussions about adjacent yet totally optional technologies and protocols that are more focused on social networking and the underlying plumbing.

This isn’t an unknown issue. Since 2018, the organisers of IndieWebCamp have [recognised a need to make the principles more accessible and applicable][7] to a broader audience.

Yet at the same time, principles should be opinionated, which means some people will disagree with them. Principles should stand for something (a good rule for a design principle is that, when reversed, it can be applied to a another organisation with different priorities).

## Core principles

I spent the second day at IndieWebCamp looking through the current principles and researching how they came about. Tantek gave me some background about why and how they evolved. I attempted a unilateral rewrite, which is the absolute worst way to design a set of principles, but I wanted to get my head around them and explore some ideas first.

Thinking through the problem a little more over the last few days, I’m forming the opinion that, by moving the more developer-focused principles into a separate list, the core principles could be reduced to 3 that encapsulate the core and more widely applicable themes of identity, agency and creativity:

1. **🥸 Own your identity**
   An independent web presence starts with an online identity you own and control. The most reliable way to do this today is by having your own domain name.

2. **😌 Own your content**
   You should retain control of the things you make, and not be subject to third-parties preventing access to it, deleting it or disappearing entirely. The best way to do this is by publishing content on your own website.

3. **🥳 Have fun!**
   When the web took off in the 90’s people began designing personal sites with garish backgrounds and animated GIFs. It may have been ugly but it was fun. Let’s keep the web weird and interesting.

Every activity, event, technology and protocol supporting the indie web should be in service of these 3 principles. If you have a website at your own domain – and you’re having fun with it – you’re part of the indie web.

If you’re building a service that makes it easy for people to publish content to a website at their own domain while providing them with access and control of their content, you’re part of the indie web.

If you’re designing a protocol to help people authenticate, publish and communicate online using their own domain name, you’re part of the indie web.

## Development principles

The simplicity and broader applicability of these core principles allow for a separate set to be aimed squarely at those designing and building IndieWeb software, protocols and formats:

1. **🍩 Make it user-centred**
   Usability is more important than protocols, formats, data models, schema etc. Start with user needs, and figure out how to build the simplest, easiest and most minimal solution that can address them.

2. **🥪 Make what you need**
   Don’t design for a hypothetical user as they may not exist. Make something that satisfies your own needs, first.

3. **🍽️ Use what you make**
   Personal use can help you uncover problems and areas for improvement more quickly. Focus on solving real problems instead of theoretical ones.

4. **🍭 Make it your way**
   We can innovate faster if everyone builds what works for them and we figure out how to interoperate between different approaches later. Having a plurality of projects makes the indie web more inclusive than other open source efforts.

5. **🌮 Make it open**
   Building software collectively and in the open instead of privately and in the abstract means it is more likely to be used. Making your code open source means other people can build upon what you’ve made.

6. **🍱 Make it modular**
   The more modular your code is, the less dependent you’ll be on a particular device, interface, API, programming language, storage model or platform. Modularity increases the chances that parts of it will be re-used and improved, changes which you can reincorporate later.

7. **📖 Document what you make**
   Document your process, ideas, designs and code. Help others benefit from your journey — including your future self!

8. **🥫 Make it last**
   If society can preserve ancient papyrus, Victorian photographs and dinosaur bones, we should be able to build durable web technology that doesn’t require destroying everything every few years in the name of progress.

This is a slight reworking of the remaining principles, updating titles to include ‘make’ so they work as a cohesive set and help identify their target audience[^1]. They could be expanded upon or possibly even condensed.

A way to summarise these might be to say that IndieWeb software should address the needs set out in the core principles by being user centred, interoperable, modular, open, documented and durable.

## Putting these principles to the test

Is a profile on Mastodon part of the IndieWeb? No. What if you’re using your domain name in your username? Still no; you don’t have control of your own data, even though there’s a degree of portability. What if you’re running your own ActivityPub server? Maybe in this case, yes – though I doubt you’ll be having much fun!

Is ActivityPub an IndieWeb technology? Maybe? It’s an open standard. Whether it’s interoperable, modular and durable, I’ll let others be the judge. It’s also difficult to implement, but building a Webmention endpoint is no walk in the park, either.

Is a website on Squarespace part of the IndieWeb? If it’s at your own domain, I guess so. But what if Squarespace were to disappear tomorrow (who knows what horrors lie in store [now that it’s set to go private][8]). Are you able to export your content, and can it be hosted elsewhere? Possibly, but it all feels very proprietary, with a good deal of lock-in (but that’s true of every CMS).

Is Squarespace an IndieWeb technology? Absolutely not. It’s closed-sourced, not interoperable or modular, and if you look at the code it generates, hardly built to last.

## Feedback

What do you think? Does separating the principles this way help make the purpose and goals of the IndieWeb more easily understood? Does reducing them to only 3 mean something gets missed out?

Add your thoughts to [the principles page on the IndieWeb wiki][4] or [join the discussion][9]. There’s also a page for evolving [developer-focused principles][10].

[^1]: I’m using food related emoji because they relate to the principle of eating what you cook, align well to each principle, and they’re more fun!

[1]: /2024/135/a1/conferences/
[2]: https://indieweb.org/2024/Düsseldorf
[3]: https://indieweb.org/2024/Düsseldorf/Principles
[4]: https://indieweb.org/principles
[5]: https://darthmall.net/weblog/2024/indieweb-is-for-devs/
[6]: https://adactio.com/journal/20968
[7]: https://indieweb.org/2018/Organizers#IndieWeb_principles_split_and_reorg
[8]: https://investors.squarespace.com/news-events-financials/investor-news/news-details/2024/Squarespace-to-Go-Private-in-6.9B-All-Cash-Transaction-with-Permira/default.aspx
[9]: https://indieweb.org/discuss
[10]: https://indieweb.org/developer-principles
