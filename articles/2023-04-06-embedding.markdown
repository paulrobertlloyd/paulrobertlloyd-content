---
title: Thinking out loud about embedding content
date: 2023-04-08T18:00:00+01:00
location:
  locality: Birmingham
  countryName: England
summary: Embedding content is a pain. There’s got to be another way.
category:
  - website
  - web
color: "#809"
---

Continuing on from [my last post][1] about changes I’m considering as I redesign this website, today I want to talk about embedding content. In short: I’m tired of it.

If you like to live dangerously, go right ahead and copy and paste that embed code. But that’s not how things are done round here. Instead, I get endlessly side-tracked thinking about:

1. **Authoring:** Every piece of content on this site is stored as Markdown yet, apart than for images, this format has no provision for embedding content without resorting to HTML.

   Several plugins for [markdown-it][2] add support for referencing embedded content but there’s little consensus around what the syntax should be.

   Perhaps there doesn’t need to be. Embeds are still hyperlinks, it’s just that the referenced content is displayed by the host website. Maybe I can add links in my source Markdown then replace them with the respective embed code during the build process, progressively enhance them in the client, or a bit of both.

2. **Privacy:** Okay, but including code on a website that originates from a third-party soon gets into issues around privacy. Maybe this is less of an issue thanks to sandboxing, blockers and other browser features, but I remain wary.

3. **Performance:** Loading video, streaming or otherwise, should be avoided unless it’s something the reader wants to watch. The same could be said for all the assets and JavaScript often required to display an embed.

   I’ve tried [using the `srcdoc` attribute][3] and looked into using [web components that fetch embedded content only once the user initiates it][4] and many other similar approaches, but…

4. **Previewing:** If I’m not displaying the content straight away, I’d like to provide a preview. YouTube has a predictable URL scheme for its thumbnail images, although the dimensions rarely match that of the video, and higher resolution thumbnails are not always available.

   For other providers, I would need to query their (oEmbed) API to get thumbnail URLs; a separate request and adding further complexity.

5. **Display:** Having considered all of the above, including an embed on a responsive page is still fraught with issues. New CSS properties like [`aspect-ratio`][5] mean [old hacks][6] can be retired, but as this needs the aspect ratio for a given embed, I’d need to include that information somewhere in the original markup.

Enough!

## Pimp my link

I’ve decided to take a different approach. For the authoring experience, I’m using Markdown’s link syntax:

```md
[The Rolling Stones – She’s A Rainbow](https://www.youtube.com/watch?v=6c1BThu95d8)
```

The raw Markdown remains readable and relatively future-proof, while retaining enough information about the embed.

However, I still want to give embedded content some prominence on the page. To achieve this, I’ve created a custom rule for `markdown-it` which looks for links to a known set of content providers. These links also need to be the only child of their parent node – I don’t want to upgrade any links that appear midway through a sentence.

With the above Markdown as an example, the plugin will convert it into the following markup:

```html
<figure class="embed">
  <a href="https://www.youtube.com/watch?v=6c1BThu95d8" rel="noreferrer noopener" target="_blank">
    <img src="http://img.youtube.com/vi/6c1BThu95d8/mqdefault.jpg" alt="" loading="lazy">
    <p>The Rolling Stones – She’s A Rainbow<br><span>Watch on youtube.com (opens in a new tab)</span></p>
  </a>
</figure>
```

Here is a rendered example:

[The Rolling Stones – She’s A Rainbow](https://www.youtube.com/watch?v=6c1BThu95d8)

This is something that sits somewhere between a link and an embed. If you want to view the content you can go ahead and click the link. If not, you have not suffered any performance or privacy penalty.

A few implementation details:

- As the link opens in a new tab, I have included `rel="noreferrer noopener"` to reduce the risk of [reverse tabnabbing][7].

- The thumbnail image uses [`loading="lazy"`][8] so it will only load if it’s likely to appear within the viewport.

- The thumbnail also uses an empty `alt` attribute. As a presentational image for which we cannot provide a detailed description, this seems like the right approach, especially as the remaining link text should be descriptive.

- For YouTube videos, I’m using the medium quality thumbnail image, which is 320 × 180 pixels. Reducing its size by 75% should mean it looks good on higher resolution displays.

- I’ve added a little play icon, generated using CSS borders so that it doesn’t get announced by screen readers.

- As the entire block is a link, I’ve added an underline to the supporting text to indicate this behaviour.

The above example includes a thumbnail image whose source was guessed from the YouTube video ID included in the original URL. Where no thumbnail can be deduced, or if we want to use a different thumbnail, we can use Markdown’s image syntax:

```markdown
[![Yosemite HD](/path/to/thumbnail.jpg)](https://vimeo.com/35396305 "A time lapse of Yosemite National Park.")
```

We can also provide an additional caption by repurposing the Markdown syntax originally intended for adding a `title` attribute to links.

Given the above Markdown, the following markup is generated:

```html
<figure class="embed">
  <a href="https://vimeo.com/35396305" rel="noreferrer noopener" target="_blank">
    <img src="/path/to/thumbnail.jpg" alt="" loading="lazy">
    <p>Yosemite HD<br><span>Watch on vimeo.com (opens in a new tab)</span></p>
  </a>
  <figcaption>
    A time lapse of Yosemite National Park.
  </figcaption>
</figure>
```

Hopefully this solution is robust and simple enough that I don’t need to think about how I embed content on my website ever again.

[1]: /2023/054/a1/lume/
[2]: https://github.com/markdown-it/markdown-it
[3]: https://dev.to/haggen/lazy-load-embedded-youtube-videos-520g
[4]: https://github.com/paulirish/lite-youtube-embed
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
[6]: https://alistapart.com/article/creating-intrinsic-ratios-for-video/
[7]: https://owasp.org/www-community/attacks/Reverse_Tabnabbing
[8]: https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
