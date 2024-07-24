---
slug: slide-libraries
title: Choosing a slide library
description: This article compares different libraries you can use to create slides from code.
authors: tonai
tags: [Frontend, VueJS, Library]
---

# Choosing a slide library

## TLDR

[`Slidev`](https://github.com/slidevjs/slidev) is a quite new tool for creating HTML presentation that is fantastic.  
Easily creates slide with `Markdown` and `VueJS` components and enjoy all the features (Presenter mode, syntax highlighting, `LaTeX`, diagrams...etc.).  
Still in beta, but it already has quite a big community and is moving forward quite fast.

<!--truncate-->

## Context

### Legacy tools

I work for [Smile](https://www.smile.eu/fr), and internally, we have some legacy tools that we use to create slides.  
We use them mainly to create trainings, and we already tried to modernize those tools and ending up having multiple of them:

1. The oldest one uses the command line `pdflatex` to turn `LaTeX` based markup into `PDF` (using `beamer`).
2. Another one uses the command line [`pandoc`](https://github.com/jgm/pandoc) to tranform `Markdown` into a `PDF` file (also using `beamer`).
3. We also have a tool that insert `Markdown` based markup into a `HTML` presentation using [`remark`](https://github.com/gnab/remark), it does not generate a `PDF` automatically, but you can have one using the print functionality of the browser.
4. The most recent approach is to use [`reveal-md`](https://github.com/webpro/reveal-md) to transform `Markdown` based markup into an `HTML` presentation and a `PDF`. It uses [`reveal.JS`](https://github.com/hakimel/reveal.js) as the front library for managing the presentation.

All trainings are stored inside a gitlab repository and we use a CI to build the trainings and provide them through a web platform.

I already have created some trainings using `LaTeX`, and I did succeed, while not knowing the language at all.  
But in reality it was quite painful to use `LaTeX` for that (complex syntax, hard to debug...etc.).  
In contrary `Markdown` seems to be well suited for the job:

- It is simple and widely used. Most of the time there is almost nothing to know for someone who want to create a new training using `Markdown`.
- It has most of the feature we want for a training (titles, ordered and unordered lists, code blocks, quotes, tables...etc.)

Our goal is to unify all these tools because:

- we can't really offer to maintain all those multiple transformers.
- it is not straightforward for a newcomer what tool to choose.

We know that we will probably have to rewrite some trainings, but as times passes the number of trainings are increasing.  
So in fact the earlier, the best.

### Our constraints

Based on my previous slide creation experience, I compared some tools with following must have constraints in mind:

- **`PDF` generation:** originally we use `PDF` because it is a good way to share the training participants the support of the training.
- **`HTML` presentation generation:** having an `HTML` presentation is really nice and can provide advanced features that a static `PDF` can't have.
- **Simple:** presentation creation should be simple and straightforward (also it is best if we can minimize the rework of the trainings).
- **Presenter mode with comments:** important feature to give the presenter some hints during the presentation
- **Slide customization:** backgrounds, embeeds...etc. for more dynamic presentations.
- **Extendable:** to be able to create our own reusable components or to extend `Markdown` syntax.
- **Table Of Content:** it helps participants not to get too lost (especially during multiple days trainings).
- **Syntax highlight:** most of our trainings are technical ones.
- **Themeable:** we need to customize the slides to match our company graphic chart.
- **Maintained:** we don't want to use a library that won't get maintained in the future.
- **Documented:** obvious but worth mentioning.

Also following options are optionnal but would be nice to have:

- **Developper mode with livereload:** comfortable.
- **Support for math formula:** in case it would be needed.
- **Configuration override:** it can be great if we can create some default configuration for the main use case that can be overriden in specific trainings.

Our trainings can sometimes be quite big, so breaking them into small fragments is better, so this is also something we want.  
But, because some tools we already use only accept a single `Markdown` as input, in that case we already have a workaround by preprocessing the files using a `Makefile` and have a `cat` or `awk` do the job.

## Tools

### Popularity, maintenance, reactivity...

During the research I made, I compared the following tools:

- Tools we already use:

  - **[Pandoc](https://github.com/jgm/pandoc)**
  - **[remark](https://github.com/gnab/remark)**
  - **[reveal-md](https://github.com/webpro/reveal-md)**

- Other tools:
  - **[MDX Deck](https://github.com/jxnblk/mdx-deck):** presentation tool based on [MDX](https://mdxjs.com/)
  - **[vite-plugin-mdx](https://github.com/brillout/vite-plugin-mdx):** [Vite](https://vitejs.dev/) plugin to import [MDX](https://mdxjs.com/) files
  - **[Spectacle](https://github.com/FormidableLabs/spectacle):** [ReactJS](https://fr.reactjs.org/) based presentation library
  - **[Fusuma](https://github.com/hiroppy/fusuma):** presentation tool based on `Markdown` and [MDX](https://mdxjs.com/)
  - **[Marpit](https://github.com/marp-team/marpit):** `Markdown` slide deck framework
  - **[MDXP](https://github.com/0phoff/MDXP):** library for creating [MDX](https://mdxjs.com/) slides
  - **[Reveal JS](https://github.com/hakimel/reveal.js):** presentation framework
  - **[Slidev](https://github.com/slidevjs/slidev):** presentation slides for developers

I will get into more detail later, but let's have an overview by looking at some Github metrics (as of January 18, 2022):

| Tools                           | Creation date \* | Stars | Last commit | Issues | PRs | Contributors |
| ------------------------------- | ---------------- | ----- | ----------- | ------ | --- | ------------ |
| `Pandoc` + `Reveal JS`          | 03/20/2010       | 24.5k | 01/18/2022  | 728    | 76  | 408          |
| `remark`                        | 10/11/2011       | 11.7k | 01/05/2022  | 149    | 7   | 79           |
| `reveal-md`                     | 06/24/2013       | 2.8k  | 01/08/2022  | 13     | 0   | 64           |
| `MDX Deck`                      | 07/28/2018       | 10.5k | 08/03/2021  | 93     | 40  | 69           |
| `vite-plugin-mdx` + `Reveal JS` | 02/02/2021       | 59    | 11/23/2021  | 3      | 1   | 7            |
| `Spectacle`                     | 06/30/2015       | 9.1k  | 12/11/2021  | 49     | 40  | 141          |
| `Fusuma`                        | 04/26/2018       | 5.1k  | 12/01/2021  | 22     | 41  | 17           |
| `MDXP`                          | 04/06/2020       | 47    | 04/21/2021  | 2      | 0   | 2            |
| `Marp` \*\*                     | 03/17/2018       | 3.5k  | 01/16/2022  | 34     | 2   | 15           |
| `Reveal JS`                     | 06/07/2011       | 58.2k | 01/11/2022  | 600    | 89  | 290          |
| `Slidev`                        | 04/24/2021       | 17.7k | 12/14/2022  | 55     | 2   | 62           |

\* Creation date of the repository from Github API: https://api.github.com/repos  
\*\* `Marp` is composed of multiple repositories, so depending on the case I took the max, the most recent, the oldest or a sum of the values across repositories.

What we can tell at that point is that:

- `Pandoc`, `Reveal JS` and `remark` are quite old libraries that exists since a lot of time and that are still actively maintained
- `MDX Deck` is also quite old and popular, but last commit is a bit old
- `Slidev` is the youngest, but it has more popularity than older tools
- `Spectacle`, `reveal-md` and `Fusuma` also seems interesting
- `vite-plugin-mdx`, `Marp` and `MDXP` are not very popular but we will see what they propose anyway

### `Pandoc`

Pandoc is a tool that convert from one format to another format.

We used it to convert `LaTeX` to `PDF`, but it supports quite a lot of format, and the interesting ones is that we can use `Markdown` as input and use `Reveal JS` as output.

There are also other `HTML` presentation formats like [`Slidy`](https://www.w3.org/Talks/Tools/Slidy2/Overview.html), [`Slideous`](https://goessner.net/articles/slideous/), [`S5`](https://meyerweb.com/eric/tools/s5/) and [`DZSlides`](http://paulrouget.com/dzslides/), but a quick comparaison show that `Reveal JS` seems to have more feature than the others (and lots of plugins created by the community).

The problem with `Pandoc` is that we can't use all the feature of `Reveal JS`.  
Indeed, `Reveal JS` need some `HTML` data attributes for some features, but because the `Markdown` is transformed by `Pandoc`, we don't have a way to set those data, or maybe I didn't find how to...  
So both **customization**, and **extendable** features seems compromised.

In conclusion `Pandoc` is a great transformation tool, but for out use case it is not enough specific.

### `remark`

Remark does not compile the `Markdown` on the server side, it formats the `Markdown` directly in the browser.  
With `remarkise` we can update the `Markdown` content dynamically but that's a feature we are looking for creating trainings.

It has quite all the feature we want on the frontend side, but there is **no built-in TOC** and it is **not really possible to extend it**.  
Also the **documentation is quite poor** when you want to dig more in detail about all the capabilities of the library and its API.

In conclusion it is a good library, but we want to do more than that, so we'll try to find a more well fitted tool.

### `reveal-md`

`reveal-md` is like a CLI tool, that use a separator to split the `Markdown` into individual slides for `Reveal JS`.  
But for each slide, the `Markdown` is parsed through `Reveal JS` `Markdown` feature, keeping all the [`Markdown` customization of `Reveal JS`](https://revealjs.com/markdown/).

The main features that are added to `Reveal JS` are:

- **`PDF` generation** with CLI command
- **Configuration override** through `YAML front matter`
- **Developer mode with livereload**
- and `Markdown` preprocessing, which can be useful, for example, to create the slides based on the titles

But like `Reveal JS` ([see below](#reveal-js)), we **can't really extend it** and there is still **no TOC** (but we can probably create one ourself with the `Markdown` preprocessing functionality).

### `MDX Deck`

`MDX Deck` seems promising, because [MDX](https://mdxjs.com/) let us create custom ReactJS components filling the missing extendable feature that above tools did not provide.

But after initializing and installing the tool, I was not able to start it, resulting in an error.
After looking at the issues I found one related to the package **[not being maintained](https://github.com/jxnblk/mdx-deck/issues/765)**.

A quick look to the example also showed me that there is **no `PDF` export**, **no TOC** and **no syntax highlighting**.

In conclusion it seems not be the tool we were waiting for.

### `vite-plugin-mdx` + `Reveal JS`

After attending the React Europe conference I was intrigued by [Rom Brillout talk about vite-plugin-ss](https://youtu.be/CUPzvJibdTQ?t=4351).  
I was more intrigued by that fact he created is own presentation system, so I ask him if he could share his work and he [kindly accepted](https://github.com/brillout/vite-plugin-ssr_react-europe_talk).

So I asked myself if I could build my own presentation system too, filling all our needs. We don't really need Server Side Rendering on our case so I only used `vite` with `vite-plugin-mdx` (and `@vitejs/plugin-react`) to transform the `Markdown` markup into `Reveal JS` `HTML` presentation.

After some work I was able to create the needed markup for the slide by automatically creating the necessary `Reveal JS` markup based on titles.  
I was also able to create a custom TOC based on titles and title levels, the feature we need and that is nearly always missing.

If you are curious about the code here is the `vite.config.js` file I created with the custom rehype plugins that handles the transformation, but please take in account that this code is a POC and not a final production delivery:

```js
import react from "@vitejs/plugin-react";
import mdx from "vite-plugin-mdx";

export default (async () => {
  const { h } = await import("hastscript");
  const { default: rehypeHighlight } = await import("rehype-highlight");
  const { lowlight } = await import("lowlight");
  const { default: hljsDefineGraphQL } = await import("highlightjs-graphql");

  hljsDefineGraphQL(lowlight);

  const titles = [];
  function rehypeToc(options = {}) {
    return (tree) => {
      const contents = tree.type === "root" ? tree.children.concat() : [tree];
      contents.forEach((node) => {
        if (node.tagName === "h1") {
          titles.push({
            title: node.children[0].value,
            children: [],
          });
        } else if (node.tagName === "h2" && titles.length > 0) {
          titles[titles.length - 1].children.push(node.children[0].value);
        }
      });
      if (titles.length > 0) {
        let hIndex = 0;
        const processed = contents.reduce((acc, node) => {
          if (node.tagName === "h1") {
            acc.push(node);
            const list = titles[hIndex].children
              .slice(0, 20)
              .map((title, vIndex) =>
                h("li", [h("a", { href: `#/${hIndex}/${vIndex + 1}` }, title)]),
              );
            if (titles[hIndex].children.length > 20) {
              list.push(h("li", "..."));
            }
            acc.push(h("ul", list));
            hIndex++;
          } else {
            acc.push(node);
          }
          return acc;
        }, []);
        return {
          type: "root",
          children: processed,
        };
      }
      return tree;
    };
  }

  function rehypeRevealH1(options = {}) {
    return (tree) => {
      const contents = tree.type === "root" ? tree.children.concat() : [tree];
      const processed = contents.reduce((acc, node) => {
        if (node.tagName === "h1") {
          acc.push(h("section", [node]));
        } else if (acc[acc.length - 1]?.children) {
          acc[acc.length - 1].children.push(node);
        } else {
          acc.push(node);
        }
        return acc;
      }, []);

      return {
        type: "root",
        children: processed,
      };
    };
  }

  function rehypeRevealH2(options = {}) {
    return (tree) => {
      const contents = tree.type === "root" ? tree.children.concat() : [tree];
      const processed = contents.map((node) => {
        if (node.tagName === "section" && node.children.length > 0) {
          return {
            ...node,
            children: node.children.reduce((acc, node) => {
              if (node.tagName === "h1" || node.tagName === "h2") {
                acc.push(h("section", [node]));
              } else if (acc[acc.length - 1]?.children) {
                acc[acc.length - 1].children.push(node);
              } else {
                acc.push(node);
              }
              return acc;
            }, []),
          };
        }
        return acc;
      }, []);

      return {
        type: "root",
        children: processed,
      };
    };
  }

  return {
    plugins: [
      react(),
      mdx({
        rehypePlugins: [
          rehypeHighlight,
          rehypeToc,
          rehypeRevealH1,
          rehypeRevealH2,
        ],
      }),
    ],
  };
})();
```

The problem is that [`Markdown` customization with `Reveal JS`](https://revealjs.com/markdown/) is done through `HTML` comments, and those comments get stripped by the `vite-plugin-mdx` plugin.  
So either I should find a solution to keep comments in the `Markdown` or **customization must be redeveloped entirely**
Also Rom Brillout, the maintainer of this library (at the time I write this) **is looking for a new maintainer**.

In conclusion this solution needs too much custom development, it's great to be in control, but before spending too much time on this, let's try to find a tool that will cover most of our needs.

### `Spectacle`

So After looking the web for some solutions, I found some, and I will start with `Spectacle` that seems to be great because it's using React components (so **extendable feature** should be covered).

To test the libraries I use one of my training written in `Markdown` and with `Spectacle` I was surprised that my code blocks didn't get highlighted.

After digging the code I found that to get syntax highlighting you have to use a custom React component.

It means for example, that a `Markdown` block like this:

```md
//`graphql
query {
  hero {
    name
    appearsIn
  }
}
//`
```

Needs to be replaced with this markup:

```jsx
<CodePane language="graphql">
  {`query {
  hero {
    name
    appearsIn
  }
}`}
</CodePane>
```

And that's a problem, because, the usage of the library **is not simple enough**.  
You have to know a lot about the tool to write a training.

Also I **didn't find anything about a TOC component**, so I digged further.

### `Fusuma`

`Fusuma` is the next tool I found. And to be honest it is very cool and have a lot of features we want like:

- `PDF` export
- Presenter mode with comments
- Customization
- Extensibility through [MDX](https://mdxjs.com/)
- Syntax highlighting
- ...etc.

But also:

- support for MathJax, Diagrams, and Flowcharts
- and a sidebar we can use to put some items, we can use as a TOC

The only downside of this TOC, is that items needs to be added by hand with a comment like `<!-- section-title: History -->` in the `Markdown` document.  
We would prefer to have something automatic, but maybe we can create some preprocess that will parse the `Markdown` and add the comment automatically.

So at that time this is the best solution we have, but lets continue to check the other tools I found.

### `MDXP`

`MDXP` is not really popular, but in fact it has a good [documentation](https://0phoff.github.io/MDXP/) and the [presentation](https://0phoff.github.io/MDXP/examples/demo/) looks great.

After testing it with my training example, **I didn't have any syntax highlighting**.  
There is a [closed issue](https://github.com/0phoff/MDXP/issues/6) with the `wontfix` label and, I tried some solution to make it works, but unfortunately without success.  
It also seems there is **no TOC**, and the last commit is quite old meaning that I am not sure if **it is still maintained**.

In conclusion we won't go for this solution, because we already have better options for now.

### `Marp`

`Marp` is an ecosystem for building `Markdown` presentations.  
There is quite a lot of documentations:

- https://marp.app
- https://marpit.marp.app
- https://marpit-api.marp.app
- \+ all github repositories

And in fact, unfortunately, it is really easy to get lost, and quite difficult to find the answer you are looking for (no search tool).  
To try the tool, I ended up using the `@marp-team/marp-cli` tool that generates a `HTML` presentation giving a `Markdown` file.

One problem is that, although the syntax highlighting is working, not all languages are highlighted and I didn't find how to add supports for the missing languages.  
Also **extensibility** does not seems to be built-in, and **I didn't find a way to have a TOC**.

In conclusion, it seems to be a quite a big ecosystem (including a VS Code extension), but it doesn't seems to have all the features we want.

### `Reveal JS`

By looking at the previous tool, I did find an example of [`Marpit` with `Reveal JS`](https://codesandbox.io/examples/package/@marp-team/marpit), but in fact there is not much of added value using `Marp` here.

Also `reveal-md` can creates `Reveal JS` slides but we can ask ourself if the added value of that library is enough to add it as a dependency, or if the features added by `reveal-md` can simply be replaced.

So I asked myself if I could not get ride of `Marp` or `reveal-md`, and just use `Reveal JS` and try to fill in the missing feature.

I used `vite` to create a development environment and initialized `Reveal JS` inside the `index.html`. It is easy to import a `Markdown` document inside a `Reveal JS` presentation because it is a [built-in feature](https://revealjs.com/markdown/#external-markdown).

`PDF` print is available in `Reveal JS` by adding an `URL` parameter and through browser print functionality. So to create the `PDF` automatically I created a little script using `puppeteer`:

```js
import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/?print-pdf", {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: "slides.pdf", width: 998, height: 727 });
  await browser.close();
})();
```

For the TOC, I created a `Reveal JS` plugin:

```js
window.RevealToc = () => {
  let h = -1;
  let v = -1;

  return {
    id: "toc",
    init: (deck) => {
      const h2Slides = [];
      const hSlides = deck.getHorizontalSlides();

      const titles = deck.getSlides().reduce((acc, section) => {
        if (hSlides.includes(section)) {
          h++;
          v = -1;
        } else {
          v++;
        }
        const hasNoSubSection = section.querySelector("section") === null;
        if (hasNoSubSection) {
          const title = section.querySelector("h2,h3");
          if (title) {
            switch (title.nodeName) {
              case "H2":
                acc.push({
                  title: title.innerText,
                  href: v <= 0 ? `#/${h}` : `#/${h}/${v}`,
                  children: [],
                });
                h2Slides.push(section);
                break;

              case "H3":
                acc[acc.length - 1]?.children.push({
                  title: title.innerText,
                  href: v <= 0 ? `#/${h}` : `#/${h}/${v}`,
                });
                break;
            }
          }
        }
        return acc;
      }, []);

      h2Slides.forEach((section, index) => {
        const ul = document.createElement("ul");
        section.appendChild(ul);
        ul.innerHTML = titles[index].children
          .map(({ href, title }) => `<li><a href="${href}">${title}</a></li>`)
          .join("");
      });
    },
  };
};
```

This plugin insert a TOC in all slides that contains an `H2`. The TOC list all slides containing an `H3` that are children of the `H2`.  
We can't automatically creates new slides inside `Reveal JS` plugins, so this is not perfect, but we can have some rules we should follow, when we create the presentation, that says we should keep `H2` slides empty for example, that slide will be used to display the TOC.  
Or maybe we can use a custom markup we will parse and replace with the TOC content.

The last thing is the **extensibility**, that is not provided by `reveal JS`, but maybe we can find a solution by using browser's Web Components.

This solution has the benefit of using only `Reveal JS` has dependency (I used `vite` for the development environment, but it can be something else, and in fact we can just open the `index.html` file).

Also using `Reveal JS` is great because it has [a lot of third party plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) that can be useful in some situation.  
Like the [Chalkboard](https://github.com/rajgoel/reveal.js-plugins/tree/master/chalkboard) plugin that allows the presenter to draw directly on the slides or on an empty chalkboard.

Sometimes we look for something complex and don't see the simple case and this is the perfect example.
Here we end up with a simple `HTML` file and some small scripts that fill quite all our needs.

### `Slidev`

I discovered this last tools by reading the JavaScript Weekly newsletter that was reporting an article about [2021 JavaScript Rising Stars](https://risingstars.js.org/2021/en).  
And `Slidev` comes to the 8th place in the most popular projects overall with a gain of nearly 17k stars.

`Slidev` is a tool for developers to create presentations.  
It is still in beta, but it has **all the required and optional features we want but the TOC**.

Moreover, it has additional nice features like:

- the ability to create diagrams with [mermaid](https://mermaid-js.github.io/mermaid/)
- the ability to add the camera on the page (which can be useful during remote sessions)
- the ability to record the audio (and camera) while presenting
- ...etc.

Hence it becomes a serious challenger, but the TOC is something we really want, so we should find a solution to fill the gap.

## Conclusion

We can start this conclusion with a summary comparison of the tools regarding our required features:

| Tools                           | `PDF`         | `HTML` | Simple | Presenter mode | Customization | Extendable | TOC     | Syntax highlighting | Themeable | Maintained             | Documented |
| ------------------------------- | ------------- | ------ | ------ | -------------- | ------------- | ---------- | ------- | ------------------- | --------- | ---------------------- | ---------- |
| `Pandoc` + `Reveal JS`          | ✅            | ✅     | ✅     | ✅             | ❌            | ❌         | partial | ✅                  | ✅        | ✅                     | ✅         |
| `remark`                        | browser print | ✅     | ✅     | ✅             | ✅            | ❌         | ❌      | ✅                  | ✅        | ✅                     | poor       |
| `reveal-md`                     | ✅            | ✅     | ✅     | ✅             | ✅            | ❌         | ❌      | ✅                  | ✅        | ✅                     | ✅         |
| `MDX Deck`                      | ❌            | ✅     | ✅     | ✅             | ✅            | ✅         | ❌      | ❌                  | ✅        | ❌                     | ✅         |
| `vite-plugin-mdx` + `Reveal JS` | browser print | ✅     | ✅     | ✅             | ❌            | ✅         | custom  | ✅                  | ✅        | looking for maintainer | ✅         |
| `Spectacle`                     | browser print | ✅     | ❌     | ✅             | ✅            | ✅         | ❌      | ✅                  | ✅        | ✅                     | ✅         |
| `Fusuma`                        | ✅            | ✅     | ✅     | ✅             | ✅            | ✅         | partial | ✅                  | ✅        | ✅                     | ✅         |
| `MDXP`                          | ✅            | ✅     | ✅     | ✅             | ✅            | ✅         | ❌      | ❌                  | ✅        | ❌                     | ✅         |
| `Marpit`                        | ✅            | ✅     | ✅     | ✅             | ✅            | ❌         | ❌      | partial             | ✅        | ✅                     | not clear  |
| `Reveal JS`                     | custom        | ✅     | ✅     | ✅             | ✅            | ❌         | custom  | ✅                  | ✅        | ✅                     | ✅         |
| `Slidev`                        | ✅            | ✅     | ✅     | ✅             | ✅            | ✅         | ❌      | ✅                  | ✅        | ✅                     | ✅         |

It appears that `Fusuma`, `Reveal JS` (with some custom developments) and `Slidev` are leading.

So maybe we can compare other nice to have features we may be interested in for these 3 tools:

| Tools       | Dev mode | Math | Configuration override | Diagrams | Slide annotation | Chalkboard | Camera | Line highlighting | Pointer | VS Code extension |
| ----------- | -------- | ---- | ---------------------- | -------- | ---------------- | ---------- | ------ | ----------------- | ------- | ----------------- |
| `Fusuma`    | ✅       | ✅   | ❌                     | ✅       | ❌               | ❌         | ❌     | ❌                | ❌      | ❌                |
| `Reveal JS` | custom   | ✅   | ❌                     | plugin   | plugin           | plugin     | ❌     | ✅                | plugin  | ❌                |
| `Slidev`    | ✅       | ✅   | ✅                     | ✅       | ✅               | ❌         | ✅     | ✅                | ❌      | ✅                |

Here `Slidev` and `Reveal JS` (thanks to all the available plugins) are the two final tools we have to choose between.  
Let's recap both tools:

- On one hand `Reveal JS` is a tool that exists since more than 10 years. The community is quite big, and it as now a lot of features and plugins. Also the tool is stable, but it also means that there won't have a lot of new features coming in the future.
- On the other hand `Slidev` is the exact opposite. Is has less than one year of existence, it is still in beta. But the community is growing at an incredible rate. It also have a bunch of features, it will probably have more in the future, but the TOC functionnality is actually missing.

Do we choose the stable one or the brand new one ?

To make our decision, let's try to create a PR to the `Slidev` repository to add the TOC functionnality.  
If we manage to fill that missing feature, then we will probably bet on `Slidev` future and choose that tool.

Finally, it was not much complex to add that feature, Anthony Fu, the maintainer of `Slidev` was very reactive, [the PR](https://github.com/slidevjs/slidev/pull/451) was merged pretty fast and a [new version](https://github.com/slidevjs/slidev/releases/tag/v0.28.0) was published right after.  
The process was really smooth, and make us even more confident we were choosing the right tool.

## Afterword

The world of presentation creation is quite big and I probably only looked at the surface of it.

For example I didn't talk about [AsciiDoc](https://asciidoc-py.github.io/index.html) which seems to add even more features than `Markdown`.

But we can't also spend too much time on searching and are pretty satisfied with `Slidev`.  
And in the future, if we find that some feature is missing we can still propose a PR to add it inside `Slidev`. After all, that what Open Source also means.
