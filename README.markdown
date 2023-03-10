# Content for paulrobertlloyd.com

This repository contains raw Markdown files that can be rendered using a static site generator.

It is contained in a separate repository to provide a cleaner change history and a permanent archive of content, divorced from any presentation.

## Markdown

The presentation of content is improved if the chosen Markdown library is configured to recognise the following extensions.

### Abbreviations

Abbreviations (with expansions to be included in the `title` attribute) are marked down as follows:

```md
It was nearly 20 years after the launch of BBC Television, that its first full-time graphic designer was employed, John Sewell, in 1954.

*[BBC]: British Broadcasting Corporation
```

```html
<p>It was nearly 20 years after the launch of <abbr title="British Broadcasting Corporation">BBC</abbr> Television, that its first full-time graphic designer was employed, John Sewell, in 1954.</p>
```

### Attributes

Class names are provided via attributes. Classes for inline elements are marked down as follows:

```md
A paragraph with **inline**{.foo} content.
```

```html
<p>A paragraph with <em class="foo">inline</em> content.</p>
```

For classes on block level content, the attribute is given on the immediately following line:

```md
Paragraph
{.bar}
```

```html
<p class="bar">Paragraph</p>
```

See [Markdown classes](#markdown-classes).

### Attributed block quotes

Block quotes with attribution are marked down as follows:

```md
> It has received lots of fan mail and correspondence. We will definitely be renewing its contract.
> — Lambie-Nairn, 1997, p122
```

```html
<figure>
  <blockquote>
    <p>It has received lots of fan mail and correspondence. We will definitely be renewing its contract.</p>
  </blockquote>
  <figcaption>Crook, 1986</figcaption>
</figure>
```

### Bracketed spans

To indicate a span of text which should have attributes applied, but doesn’t have an appropriate inline syntax available, square brackets are used:

```md
A paragraph with [inline]{.foo} content.
```

```html
<p>A paragraph with <span class="foo">inline</span> content.</p>
```

### Cited works

Titles of cited works are marked down as follows:

```md
""Everything Everywhere All at Once"" is the multiverse done right.
```

```html
<p><cite>Everything Everywhere All at Once</cite> is the multiverse done right.</p>
```

### Code blocks with syntax highlighting

Code blocks with syntax highlighting use three backticks (`` ``` ``) on the lines before and after the code block. The syntax used is indicated by the file extension shown after the first three backticks:

````md
```js
console.log("hello world");
```
````

### Description list

A description list with child terms and details are marked down as follows:

```md
Term 1
: Definition 1

Term 2 with _inline markup_
: Definition 2
```

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2 with <em>inline markup</em></dt>
  <dd>Definition 2</dd>
</dl>
```

### Footnotes

Footnotes are marked down as follows:

```md
If you’ve been considering making the switch, here are a few tips and tricks to help you on your way[^1].

[^1]: Information provided is correct as of Eleventy v0.6.0 and Jekyll v3.8.5
```

```html
<p>If you’ve been considering making the switch, here are a few tips and tricks to help you on your way<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup>.</p>

<section aria-label="footnotes">
  <aside id="fn1">
    <p>Information provided is correct as of Eleventy v0.6.0 and Jekyll v3.8.5 <a href="#fnref1">↩︎</a></p>
  </aside>
</section>
```

### Images with captions

Although Markdown defines the content in quotes after the filename as the title for the image, it’s intended for this content to be shown in a figure caption:

```md
![A small yellow boat sits below the Dom Luís I Bridge during golden hour.](/media/2022/241/a1/image.jpg "Dom Luís I Bridge, Porto.")
```

```html
<figure>
  <img src="/media/2022/241/a1/image.jpg" alt="A small yellow boat sits below the Dom Luís I Bridge during golden hour.">
  <figcaption>Dom Luís I Bridge, Porto.</figcaption>
</figure>
```

## Markdown classes

The following utility classes are used (provided via [attributes](#attributes)) to indicate the presentation of certain content:

- `align-bleed`
  Content should take up full available width of its container
- `align-pull`
  Content should be pulled to one side of its container
- `embed`
  Link should be displayed as an embed
- `gallery`
  List of images should be displayed as an image gallery
- `screenshot`
  Image should be displayed as a screenshot

## Images

References to images expect files to be served from a `media` folder, with paths using the following convention:

`/media/{:year}/{:day}/{:post-type-prefix}/{filename}`

## Maps

Maps can be implemented as either static or interactive maps. If a post includes a map, GeoJSON data is provided in the posts front matter (typically under the `geojson` key).

It is up to the host renderer how maps should be loaded and displayed. The location of each map within a post is indicated using Markdown with a URL using a special `markdown:` URI scheme:

`markdown:map?key={:keyname}&height={:height}&width={:width}`
