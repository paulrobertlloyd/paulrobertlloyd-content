---
date: 2023-09-29T17:00:00+01:00
title: Classnames
location:
  locality: Brighton
  country_name: England
summary: I made a thing; a small website to provide inspiration when naming things.
category:
  - programming
  - projects
  - web
tags:
  - featured
accent_color: "#939"
---

Upgrading my computer’s operating system is an opportunity to undertake a digital detox; reviewing which applications are still needed, deciding where folders should live and which files should be deleted.

After upgrading to macOS Sonoma on Tuesday, I again found myself looking at a Markdown file that has been languishing on my laptop for more than 8 years.

---

Shortly after I wrote [Naming Things][1] for 24 ways in 2014, me and [Emil][2] talked about creating a resource that would give examples of the different metaphors we lean on when naming things in our code.

We ended up collaborating on a word list, adding and categorising words, while I considered the design of a site that could display them. I even started looking into using [Wordnik’s API][3] to create a page for each word. As the complexity grew, great became the enemy of good and the project stalled. But I kept the word list around in that Markdown file in the hope that I might one day make it public.

That day is today. Prompted by [Uncle Dave’s post about one day builds][4], I committed myself to doing the least amount of work needed to publish it in a useful fashion. Could it be a blog post? It needed more structure. Could I use a template? [Just the Docs][5], a template for Jekyll, was too constraining and each [Eleventy theme][6] meant reckoning with somebody else’s code.

Then I realised I could repurpose one of my own side-projects.

I’d created the [GOV.UK Eleventy Plugin][7] to make it easier to build documentation sites for teams inside government, but it provides enough templating to build a small website for something like this. Built atop [Eleventy][8], I could make any adaptions as needed and ensure the resulting website didn’t look like GOV.UK.

This proved to be enough to get moving, and after a few hours I’d made a thing. It’s called [Classnames][9].

- ![Screenshot of the Classnames home page.](/media/2023/272/a1/home.png#screenshot)

- ![Screenshot of a word page on the Classnames website.](/media/2023/272/a1/word.png#screenshot)

This small website provides a list of words that you can refer to when naming something like an HTML class, custom CSS property or JavaScript function. Each word links to a page on [Wordnik][10], an online dictionary that does the hard work of providing multiple definitions and listing related words.

Where relevant, words are paired with an opposite and include a Latin translation (useful when you need a name that is semantic but not overly prescriptive). I’ve also crossed out those whose usage is discouraged.

Rather than buy a custom domain, I’m taking [Chris’s advice][11] and using a subdomain of this website.

Is this useful? I’m not sure. Personally, I’ve not been involved in many projects recently where I’ve struggled to name something, but think I would have found this useful if I had.

It’s [hosted on GitHub][12] meaning folks can contribute words and improve the website if they like. And I can now delete that Markdown file on my laptop.

[1]: https://24ways.org/2014/naming-things/
[2]: https://thatemil.com
[3]: https://developer.wordnik.com
[4]: https://daverupert.com/2023/09/one-day-builds/
[5]: https://just-the-docs.com
[6]: https://www.11tythemes.com
[7]: https://x-govuk.github.io/govuk-eleventy-plugin/
[8]: https://www.11ty.dev
[9]: https://classnames.paulrobertlloyd.com
[10]: https://www.wordnik.com
[11]: https://chriscoyier.net/2023/09/21/use-subdomains/
[12]: https://github.com/paulrobertlloyd/classnames

