---
date: 2025-08-31T18:00:00+01:00
title: "Twice as nice: Introducing the NHS.UK Eleventy Plugin"
canonical:
  url: https://x-govuk.github.io/posts/nhsuk-eleventy-plugin/
summary: With the NHS.UK Eleventy Plugin you can focus on writing content instead of writing code.
featured:
  url: /media/2025/243/a1/image.png
  alt: Elle, the Eleventy mascot, held aloft by three balloons, one red and two blue.
category:
  - design
  - projects
  - web
color: "#28a"
---

![Elle, the Eleventy mascot, held aloft by three balloons, one red and two blue.](../media/2025/243/a1/image.png "Elle, the Eleventy mascot. Adapted from an illustration by David Neal.")

Since its [release in April 2022][1], teams across government have been adopting the GOV.UK Eleventy Plugin. Examples include:

- [Cross Government Software Engineering Community][2]
- [DECS Developer Documentation][3] (Home Office)
- [Digital Land Technical Documentation][4] (MHCLG)
- [Engineering Guidance and Standards][5] (Home Office)
- [Engineering Guidance][6] (HMRC)
- [Engineering Standards][7] (UKHSA)
- [GOV.UK Publishing Design Guide][8] (GDS)
- [Health and Disability Data Glossary][9] (DWP)
- [Planning Data Service Handbook][10] (MHCLG)

The plugin also powers some of [our own documentation sites][11], as well as [a growing collection of design histories][12], a reflection of the project’s origins.

![A selection of websites using the GOV.UK Eleventy Plugin](../media/2025/243/a1/govuk-eleventy-plugin-sites.png)

It’s gratifying to know that this little project has helped teams focus on writing content instead of writing code.

That wasn’t true for teams in the NHS however.

Although NHS.UK frontend is a distant cousin of GOV.UK Frontend, there are enough differences that using the plugin to build a site that followed NHS design standards required a lot of effort, only to end up with a design stuck in uncanny valley.

This is what teams in the NHS Digital prevention services portfolio discovered when they were setting up their design history.

They needed their own Eleventy plugin, one that reflected the design idioms common to the NHS website. Other teams working in the NHS may want this too.

That’s why we created the [NHS.UK Eleventy Plugin][13].

## Stick or split?

We wanted to create a plugin that provided the same level of customisation as the existing plugin, but without too much duplication. We considered two approaches:

1. Fork the plugin and maintain two separate codebases
2. Maintain the existing plugin but provide a `brand` option which users could set to `nhsuk`

While the first option wasn’t desirable, the second approach would likely end up with us being in a worse situation, maintaining a project that was overly complicated and littered with conditionals.

This is because, while the NHS.UK and GOV.UK design systems overlap, there are plenty of areas where they diverge.

For example, the [NHS design system][14] has a card component, used on collection and hub pages, as well as contents list and image components not found in the [GOV.UK Design System][15]. Layouts for NHS sites rarely have sidebars, and of course the header and footer are entirely different.

Yet, apart from layouts, components and styles, the remaining code base was fairly design agnostic.

So, with our bucket hats on and Oasis blaring in the background, we headed back to the nineties and embraced a third way.

We decided to have the GOV.UK Eleventy Plugin export its utility functions, collections, virtual templates, template formats and Nunjucks filters, and updated the [`markdown-it-govuk`][16] plugin to include a `brand` option so that `nhsuk-*` prefixes could be used in any generated HTML.

This means that, while the NHS.UK Eleventy Plugin inherits much of its underlying code from the GOV.UK Eleventy Plugin, it can provide its own Markdown setup, layouts, custom components and configuration options.

Over time, perhaps as NHS.UK frontend and GOV.UK Frontend converge, the need for separate plugins will disappear. But for now, this feels like a good compromise.

Here are some examples of the new plugin in use:

[![Home page and internal page from the NHS Digital prevention services design history website.](../media/2025/243/a1/nhsuk-design-history.png 'Digital prevention services design history')](https://design-history.prevention-services.nhs.uk)

[![Home page and internal page from the NHS Manage vaccinations in schools service guidance website.](../media/2025/243/a1/nhsuk-service-guidance.png 'Manage vaccinations in schools service guidance')](https://guide.manage-vaccinations-in-schools.nhs.uk)

## A fresh perspective

Creating this new plugin provided an opportunity to revisit some of out earlier design decisions.

### More meaningful Markdown

The GOV.UK Eleventy Plugin has always supported the basic Markdown syntax, as well as common extensions such as those for tables and fenced code blocks.

One area where these options felt limiting (and possibly prone to misuse) was the styling given to block quotes. These used the same design as that for inset text, but this often meant authors ended up using the `<blockquote>` element to add emphasis to content rather than markup quotations.

Another issue was the lack of support for [GitHub-style alerts][17].

Version 8 of the GOV.UK Eleventy Plugin changes [the way block quotes get rendered][18], instead using the design used on GOV.UK where paragraphs display handing quotation marks. They can now also include an attribution.

[Alerts instead use the inset text component][19] (with the alert type provided as a visually hidden label). The lowest alert level, ‘note’, has the same appearance as that for inset text, while the remaining alert levels have different border and background colours.

The NHS.UK Eleventy Plugin takes [a slightly different approach for alerts][20]:

- ‘note‘ and ‘tip’ alerts use the inset text style
- ‘important‘, ‘warning‘ and ‘caution’ alerts use the warning callout style

These changes hopefully provide a greater degree of flexibility, while ensuring content gets marked up with the appropriate semantic elements.

### Virtual templates

While developing this new plugin, it also became clear that we could use the [virtual templates][21] feature introduced in Eleventy 3.0 to a far greater extent than we had considered for version 7.

Until now, we provided documentation to help teams add features like sitemaps and RSS feeds. Enabling features meant adding empty pages to content folders and in some cases creating custom collections.

Virtual templates mean such pages can go away, with the plugin allowing you to enable features with a couple of lines of code.

For example, you can add an RSS feed to your site by adding the following lines to the plugin’s configuration object:

```js
eleventyConfig.addPlugin(govukEleventyPlugin, {
  templates: {
    feed: {
      title: 'Latest updates'
    }
  }
})
```

The RSS feed, search index and tag pages are disabled by default, whereas the 404 error page and sitemap are enabled (you can choose to disable these if you want to).

You can configure each feature template as well as override the layouts that they use if you need something more custom.

We’re excited about Eleventy’s virtual templates feature and the opportunities they give plugin creators. If you have an idea for other features the plugin could provide, [let us know][22].

### Improved documentation

We also took this opportunity to review our documentation and how it’s organised. There’s now more detail about to start a new project, while documentation for features and layouts is now split into different sections. Again, let us know if we can improve this further.

Happy website building! 🎈

---

- [Get started with the NHS.UK Eleventy Plugin][23]
- [Get started with the GOV.UK Eleventy Plugin][24]
- [Upgrade from v7 to v8 of GOV.UK Eleventy Plugin][25]

[1]: https://x-govuk.github.io/posts/govuk-eleventy-plugin/
[2]: https://uk-x-gov-software-community.github.io
[3]: https://ukhomeoffice.github.io/hocs/
[4]: https://digital-land.github.io/technical-documentation
[5]: https://engineering.homeoffice.gov.uk
[6]: https://engineering.hmrc.gov.uk
[7]: https://ukhsa-collaboration.github.io/standards-org/
[8]: https://design-guide.publishing.service.gov.uk
[9]: https://dwp-health-data-glossary.netlify.app
[10]: https://handbook.planning.data.gov.uk
[11]: https://x-govuk.github.io/projects
[12]: https://x-govuk.github.io/govuk-design-history/directory/
[13]: https://x-govuk.github.io/nhsuk-eleventy-plugin/
[14]: https://service-manual.nhs.uk/design-system
[15]: https://design-system.service.gov.uk
[16]: https://github.com/x-govuk/markdown-it-govuk
[17]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
[18]: https://x-govuk.github.io/govuk-eleventy-plugin/example/markdown/#blockquotes
[19]: https://x-govuk.github.io/govuk-eleventy-plugin/example/markdown/#alerts
[20]: https://x-govuk.github.io/nhsuk-eleventy-plugin/example/markdown/#alerts
[21]: https://www.11ty.dev/docs/virtual-templates/
[22]: https://github.com/x-govuk/govuk-eleventy-plugin/issues
[23]: https://x-govuk.github.io/nhsuk-eleventy-plugin/get-started/
[24]: https://x-govuk.github.io/govuk-eleventy-plugin/get-started/
[25]: https://x-govuk.github.io/govuk-eleventy-plugin/get-started/upgrading/7-to-8/
