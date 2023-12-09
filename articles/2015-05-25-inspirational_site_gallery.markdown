---
date: 2013-05-25T12:00:00+01:00
title: Inspirational Site Gallery – July 2015
canonical:
  issn: 1355-7602
  edition: Issue 268
summary: A selection of websites of sensational design and superb development.
category:
  - web
accent_color: "#e40052"
---

## TSB

by [Foolproof][1]

![Screenshot of the TSB homepage.](/media/2015/145/a1/tsb.png)

When [TSB][2] separated from Lloyds Bank in September 2013, it launched with an underwhelming, fixed-width website. More of the same, I thought. Realising that other potential customers would come to similar conclusions, they worked with Foolproof to design a new responsive website.

TSB wanted to maximise the impact of their new brand, but also differentiate themselves within a crowded sector. Foolproof helped them create a distinctive visual style, tone of voice and improved customer experience across devices. This included reducing the amount of content, much of which wasn’t adding to the experience and created a high content management overhead.

The resulting site is visually arresting; the vibrancy of the large cyan type, magenta accents and bold iconography is offset by beautifully expressive illustrations. The layout is disconnected and uneven in places, especially at wider breakpoints, and the large type appears excessive at time but still, this is not your typical bank website — thank heavens for that!

---

## Wellcome Mindcraft

by [Clearleft][3]

![Screenshot of the Wellcome Mindcraft homepage.](/media/2015/145/a1/wellcome_mindcraft.png)

The first of series of immersive interactive stories from the Wellcome Collection, [_Mindcraft_][4] explores a century of madness, murder and mental healing, from the arrival in Paris of Franz Anton Mesmer with his theories of ‘animal magnetism’ to the therapeutic power of hypnotism used by Freud. Written by author and curator Mike Jay, it is experienced through images, video and atmospheric audio using an interface designed and developed by Clearleft.

<q>The narrative was the most important thing</q> says UX designer Richard Rutter. <q>Any interactions we added absolutely had to _serve_ the narrative, involving the reader in the story and providing additional context or explanation as they went through the story</q>. Supplementary interactions such as galleries and quizzes add a bit of fun and enable further exploration.

Unlike many scroll-based interactions, here the scrolling feels natural and lightweight, allowing viewers to immerse themselves in the many artefacts presented. Entering each chapter feels like opening a treasure trove of the weird and wonderful, with subtle animations encouraging you to delve deeper still.

As the brief required a site designed for tablets and larger, Clearleft approached the project in a new way: <q>We designed bigger screen first, so unusually for us we took a graceful degradation approach rather than one of progressive enhancement</q> says Rutter.

> The responsive (and @clearleft@twitter.com-designed!) @wellcometrust@twitter.com site is really quite stunning. Worth poring over this one.
> — Ethan Marcotte (@beep@twitter.com)

---

## Dogstudio

![Screenshot of the Dogstudio homepage.](/media/2015/145/a1/dogstudio.png)

![Responsive site of the month](/media/2015/145/a1/site_of_the_month.svg) [Dogstudio][5] is an award-winning digital agency from Belgium, and their new website is simply stunning. From rich imagery, to delicate typography; from case studies that are as detailed as they are delightful, to copy that is humorous and engaging, this website epitomises the quality-driven standards they aspire too.

Where the site really excels is with its use of animation, indicative of what we can expect to see on more on the web as designers and developers become accustomed to new technology and techniques. <q>We prototype and refine directly in JavaScript</q> says Dogstudio’s Creative Director Henry Daubrez. <q>I guess the secret is quite a lot of interaction happens between design and front-end development. Over the years we have started to know each other sensitivities, which is fantastic</q>.

Perhaps the most striking feature of the site is the smokey transition between pages. How was this achieved? <q>CSS-masking baby! We used a sprite sheet of this smoke animation as a mask. It allows us to unveil the next page with little impact on the CPU while having a quite dramatic visual impact</q>.

> Some gorgeous work here, anyone know how they’re doing that page transition?
> — Chris Armstrong (@armstrong@twitter.com)

---

## SVGOMG

by Jake Archibald

![Screenshot of the SVGOMG homepage.](/media/2015/145/a1/svgomg.png)

If you care about performance, you’ve no doubt spent hours optimising and minimising your SVG files. Say goodbye to this tedious time-consuming task, with [SVGOMG][6], a GUI built on top of SVGO by Jake Archibald. Beyond the obvious utility, this tool is a wonderful example of how to build a web app in a responsible and accessible way.

This app is really fast, to the extent that it often feels as if you’re using a native application. <q>All the heavy lifting, such as SVG parsing and minification, happens in web workers, so the UI stays responsive</q>. says Jake. <q>The rule for runtime performance is ‘if you paint, you lose’ so I spent time ensuring everything that moved had its own GPU layer</q>.

Furthermore, the initial download is only 5kb, rendering within 1.5s, even on a 3G connection. <q>It really bothers me that so many sites wait on JavaScript for their first render, some even require scripts to make further requests before rendering. This pushes render time towards 10s — as a mobile user I know I wouldn’t put up with that</q>. Subsequent visits use ServiceWorker, so render almost instantly, whatever connection the user has.

> This is quite the sexy SVG optimiser from @jaffathecake@twitter.com – great use of the Material Design framework too.
> — Si Jobling (@Si@twitter.com)

---

## Hello Monday

![Screenshot of the Hello Monday homepage.](/media/2015/145/a1/hello_monday.png)

[Hello Monday][7] are a creative agency based out of New York and Copenhagen. They create digital experiences and visual identities that “tickle the brain, please the eyes and connect the hearts of brands to the hearts of their consumers”. They had two goals for their redesigned site: be easy to navigate and ensure their work is presented in the best possible way. “We also wanted the site to have some personality and show some of the playfulness that’s in our DNA” says Hello Monday Partner Anders Sønderby Jessen.

Like Dogstudio, Happy Monday have used utilised CSS animation techniques in sometimes subtle, but often sublime ways. Be it the a full screen menu that glides across the page, the smart transitions between pages, or simply how navigation icons react on hover. Content is laid out in a manner reminiscent of a stylish magazine, with the design of each case study imbued with the colours of the project being described. Home and project overview pages employ a 3D effect that reacts to your mouse position, giving these pages extra depth.

Although the layout adapts to smaller screens, the site has clearly been optimised for desktop users. On mobile devices type appears tiny and tap targets are not always sized appropriately. <q>It’s a challenge to make a one-size fits all devices site</q> admits Anders. <q>But we spent a lot time making the layout fluid enough to be able to work in all kinds of different sizes, it’s a mix of an adaptive and responsive approach</q>.

---

## Lonely Planet

by @i_like_robots@twitter.com

![Screenshot of the Lonely Planet destination page on a mobile phone.](/media/2015/145/a1/lonely_planet.png)
{.align-pull}

[Lonely Planet][8] has everything the would-be world traveller would need, be that travel guides, destination inspiration, adventure tours, hotel reviews and more. Their team has also been on a journey, as for the last few years they’ve slowly migrated the site over to a fresh and feature-rich responsive design.

With the launch of destination pages, the team is one step closer. I asked Matt Hinchliffe, front-end developer at Lonely Planet if their initial assumptions or best practices had proved incorrect or became outdated? <q>I don’t think we underestimated the technical challenges, but I didn’t realise how difficult the logistical ones would be. Many parts of the business rely on the site, and keeping everyone involved is tricky. Getting ad products ready across four continents and keeping authors happy is really hard!</q>

Lonely Planet have been a big proponent of maintainable style guides, and their own, Rizzo, has gained much interest from outside the company. <q>Rizzo allows us to build our UI components in isolation. It’s been easy to share progress and let designers to jump in to make tweaks but it’s not all been straightforward. Because Rizzo is shared as a whole, when we break something we have to make sure _all_ of our apps that depend on it are updated too. We have _a lot_ of apps so it’s challenge for communication and process</q>.

---

## Bloomberg Business

by Bloomberg and Code and Theory

![Screenshot of the Bloomberg Business homepage.](/media/2015/145/a1/bloomberg_business.png)

[Bloomberg Business][9] brings together the different aspects of Bloomberg’s media empire — Bloomberg News, Bloomberg Businessweek, Bloomberg TV, and Bloomberg Graphics — under one roof, one that is a unique, compelling and decidedly quirky.

Much of the design is inspired by that of its printed sister publication Businessweek. Heavy use of large type, often overlaid images that themselves have a filter treatments applied to them, are just a few of the site’s hallmark design features. This vibrant design is freer — and frankly braver — than anything seen on other news websites. This is especially true for section fronts (in particular [bloomberg.com/pursuits][10]).

Code and Theory say <q>The fresh visual presentation and consumption experience is built on a design system that gives the editorial team enormous flexibility to publish and package any type of content</q>. Bloomberg Digital Editor Joshua Topolsky writes: <q>The site is a reinvention of how we bring our stories to the world. It’s faster, smarter, and bigger than anything we’ve ever done. And it’s built for a global audience that lives and breathes on the web</q>.

This is perhaps best expressed on feature stories, which are allowed greater freedom, often featuring larger imagery and animations that appear as you move down the page. The site may not be to everyone’s taste, but it’s exciting to see a large company like Bloomberg experiment in this way. More please!

> I’m a fan. Sure, I don’t really get it. Actually, I’m annoyed that I like it, but I can’t help myself. It’s great — seriously great.
> — Harrison Weber (@harrisonweber@twitter.com)

[1]: http://www.foolproof.co.uk
[2]: https://www.tsb.co.uk
[3]: https://clearleft.com
[4]: https://wellcomecollection.org/mindcraft
[5]: http://www.dogstudio.be
[6]: https://jakearchibald.github.io/svgomg/
[7]: https://www.hellomonday.com
[8]: https://www.lonelyplanet.com/usa/california
[9]: https://bloomberg.com
[10]: https://www.bloomberg.com/pursuits

*[3D]: three dimensional
*[3G]: third generation
*[CPU]: central processing unit
*[CSS]: Cascading Style Sheets
*[GPU]: graphics processing unit
*[GUI]: graphical user interface
*[SVG]: Scalable Vector Graphics
*[SVGO]: Scalable Vector Graphics Optimizer
*[TV]: television
*[UX]: user experience
