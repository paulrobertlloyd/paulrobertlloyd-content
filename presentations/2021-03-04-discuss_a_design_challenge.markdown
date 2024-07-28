---
date: 2021-03-04T14:00:00Z
title: Using a design history to document your work
summary: How documenting design decisions can help your team keep track of how a service has developed over time.
featured:
  url: /media/2021/063/s1/image.jpg
  alt: A collection of spiral bound notebooks.
accent_color: "#1d70b8"
slides:
  - url: /media/2021/063/s1/1.png
    caption: |
      Hi! I’m Paul, and I’m an interaction designer working for the Department of Education in the Becoming a teacher team. Fun fact: today is the 2 year anniversary of me joining the team.
  - url: /media/2021/063/s1/2.png
    caption: |
      Our team works on a family of services. These allow perspective candidates to find teacher training courses before submit an application, and enable training providers to publish courses and then make decisions on the applications they receive.
  - url: /media/2021/063/s1/3.png
    caption: |
      We have been keeping a design history since 2018.

      We use this tool to document and share design decisions and to maintain a permanent record of how our services have developed over time.
  - url: /media/2021/063/s1/4.png
    caption: |
      As of March 2021, our design history covers 6 services (the 5 public-facing services plus an internal service used by support agents), and includes over 450 posts from 22 contributors.
  - url: /media/2021/063/s1/5.png
    caption: |
      So what exactly is a design history?
  - url: /media/2021/063/s1/6.png
    caption: |
      A design history looks both forwards and backwards. New posts show the team where a service is going, while older posts tell the story of how we got to where we are now.
  - url: /media/2021/063/s1/7.png
    caption: |
      That’s a fancy description. The simpler answer is that a design history is a blog with a design team committed to regularly posting about their work.
  - url: /media/2021/063/s1/8.png
    caption: |
      Why keep a design history?
  - url: /media/2021/063/s1/9.png
    caption: |
      Firstly, things change. Be that policy, members of the team or our understanding of the problem space and a service’s users etc.
  - url: /media/2021/063/s1/10.png
    caption: |
      This is particularly true when working in an agile environment, where things are constantly iterated. It can be hard to remember what things looked like, how they worked or why – and when – they changed.
  - url: /media/2021/063/s1/11.png
    caption: |
      Our team wanted a way to keep a record of our designs, and also a way to share them. We looked at a few different options.
  - url: /media/2021/063/s1/12.png
    caption: |
      One option would be to [create different versions of our prototype](https://designnotes.blog.gov.uk/2016/05/13/archiving-versions-of-a-prototype/).

      But when should we create a new version? How and when would we document smaller changes?

      There’s also the overhead of maintaining a prototype that’s ever growing in size.
  - url: /media/2021/063/s1/13.png
    caption: |
      For a while we tried to document design decisions on a Confluence wiki. However, as this was private it was difficult to share documents more widely. It was also quite limiting in terms of formatting options.
  - url: /media/2021/063/s1/14.png
    caption: |
      The first iteration of our design history was powered by the Prototype Kit. But the kit was not designed around the needs of content creation and curation. For example, it was hard to incorporate Markdown, tag posts and create an RSS feed.
  - url: /media/2021/063/s1/15.png
    caption: |
      In the end, we built our own tool using:

      * [Eleventy](https://www.11ty.dev) for content management
      * [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) for the design patterns
      * [GitHub](https://github.com/) for collaboration
      * [Netlify](https://www.netlify.com) for hosting
  - url: /media/2021/063/s1/16.png
    caption: |
      Our tool is available for any team to download and use:

      * <https://design-history.herokuapp.com>
      * <https://github.com/dfe-digital/govuk-design-history>
  - url: /media/2021/063/s1/17.png
    caption: |
      Other teams in the DfE are now using it too:

      * [Get into teaching](https://get-into-teaching-design-history.netlify.app/)
      * [Get help with technology](https://ghwt-design-history.herokuapp.com/)
      * [Early years foundation stage framework](https://eyfs-design-history.netlify.app/)
  - url: /media/2021/063/s1/18.png
    caption: |
      I’m going to be talking about the tool we’ve created, but the tool isn’t the important thing. The ideas I’m sharing today can be achieved with any blogging software, so use whatever tool works best for you and your team.
  - url: /media/2021/063/s1/19.png
    caption: |
      How can a design history help your team work better?
  - url: /media/2021/063/s1/20.png
    caption: |
      For designers, a design history is helpful when iterating an existing feature and you find yourself asking “why on Earth does it work like this”.
  - url: /media/2021/063/s1/21.png
    caption: |
      For user researchers, a design history can be useful when planning a research session, or when preparing a playback and needing to refer to previous findings.
  - url: /media/2021/063/s1/22.png
    caption: |
      For product managers, a design history can be helpful if needing to postpone the development of a feature. Having a design documented means it can be picked up again later.
  - url: /media/2021/063/s1/23.png
    caption: |
      For developers, a design history gives broader context to a set of changes to a particular feature. A post can document different user journeys and interaction states, both of which can be difficult to show in a prototype.
  - url: /media/2021/063/s1/24.png
    caption: |
      For delivery managers, having a design history for a project can be a useful resource when onboarding new team members.
  - url: /media/2021/063/s1/25.png
    caption: |
      There’s also an extra bonus. When it comes to a service assessment, being able to point to a design history with a collection of posts detailing an understanding user needs and design intents, the design section of an assessment can almost become a formality.
  - url: /media/2021/063/s1/26.png
    caption: |
      How does our team use a design history?
  - url: /media/2021/063/s1/27.png
    caption: |
      Every now and again we perform a snapshot of all pages on the service. This is useful as a fallback, as not every part of the site may have had an entry written about it. This way there’ll always be a screenshot of a page so you can see what it previously looked like.
  - url: /media/2021/063/s1/28.png
    caption: |
      It can be hard to demonstrate the multiple states of a component or page in a prototype, so this is one area in which having a design history can be really helpful.
  - url: /media/2021/063/s1/29.png
    caption: |
      One of the first things we did was document the legacy service we’re replacing. This is important as if we’re successful, this is something that will eventually disappear.
  - url: /media/2021/063/s1/30.png
    caption: |
      We can even show email designs rendered using GOV.UK Notify-style placeholders.
  - url: /media/2021/063/s1/31.png
    caption: |
      Our design history also includes a post in which we use the question protocol to list all the questions we ask, and why we ask them.
  - url: /media/2021/063/s1/32.png
    caption: |
      Our user researchers have started summarising larger research rounds and their findings in greater depth.
  - url: /media/2021/063/s1/33.png
    caption: |
      Like many other parts of government, our service is not short on acronyms. One of the most useful pages on our design history is the glossary, which has proven popular with new starters.
  - url: /media/2021/063/s1/34.png
    caption: |
      We recently added a page to display [all the mission patches we’ve designed](https://bat-design-history.netlify.app/mission-patches/).
  - url: /media/2021/063/s1/35.png
    caption: |
      A few last thoughts before I finish.
  - url: /media/2021/063/s1/36.png
    caption: |
      Maintaining a design history has proven to be worthwhile, but it’s not without its challenges.

      Writing is hard, and the same can be true of writing about the work you have done.

      Deciding when to write about something can be tricky too. For example, I’m never quite sure if I should write about a feature after it’s been designed or once it has been tested.

      Also, in an agile environment, and on projects where there is no shortage of work to be done, it can be difficult to find time to sit down and write an entry.

      The key is to think of it as part of the design process, and to remember the value it may provide later.
  - url: /media/2021/063/s1/37.png
    caption: |
      There are also a few issues we’ve come up against, which we’d like to solve in future updates to the tool.

      The first is that not having an easy to use admin interface, but relying on contributions via GitHub, has been a barrier to entry for the less technically savvy members of our team.

      Secondly, the more posts we add to the site, the larger the project can becomes. If you have lots of images, this can mean new users have to download a huge amount of data before they can start adding their own posts.

      If you have any ideas how we can solve these issues, please let me know.
  - url: /media/2021/063/s1/38.png
    caption: |
      I’ll leave you with a thought from my colleague Adam Silver:

      > The only design history entry you’ll regret is the one you didn’t write.

      When people talk to me about design histories, they tend to get caught up thinking about when to write post or how to structure them. It’s certainly worth thinking about how you want to use a design history, but don’t let that prevent you from posting anything at all.
---

This presentation was delivered at [Discuss a design challenge][1] as part of Services Week 2021.

[1]: /2021/063/e1/discuss_a_design_challenge/
