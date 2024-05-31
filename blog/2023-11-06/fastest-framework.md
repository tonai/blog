---
slug: fastest-framework
title: What front-end framework is the fastest ?
description: This article compares different front-end frameworks regarding their performances.
authors: tonai
tags: [frontend, frameworks]
---

<head>
  <link rel="canonical" href="https://smile.eu/en/publications-and-events/what-frontend-framework-fastest" />
</head>

This article is the third installment in a series, which you can access through the following links:

1.  [How to choose the right front-end architecture?](/blog/posts/front-end-architecture)
2.  [What frontend framework should you choose?](/blog/posts/front-end-frameworks)

So, if you're planning to determine the best front-end framework for your requirements, I recommend reading the preceding articles as well.

<!--truncate-->

In this article, our primary focus will be on comparing the performance of the following frameworks:

- Client Side Rendering (CSR):
  - Angular
  - React
  - Solid
  - Vue
- Server Side Rendering (SSR):
  - Astro
  - Astro + React
  - Gatsby
  - Next (app router)
  - Next (page router)
  - Nuxt
  - Qwik
  - Remix
  - Sveltekit

Throughout the article, we will cover the following topics:

- Benchmarking the page load times of identical pages implemented in various frameworks.
- Evaluating the reactivity performance of these frameworks.
- Providing a summary and drawing conclusions regarding the fastest frameworks.

## Introduction

This benchmark focuses on the initial page load speed. When I say "first load," I mean that most frontend frameworks implement frontend routing, which has the advantage of not requiring the download of all assets from the beginning.

However, from a Google ranking perspective, the Lighthouse score is crucial. Thus, making efforts to enhance your Lighthouse score can lead to better conversion rates and improved SEO (Search Engine Optimization).

For the tests, I recreated the [https://www.smile.eu/fr](https://www.smile.eu/fr) homepage, as I wanted to use a page with existing content. The current Lighthouse score of that page is far from perfect, which aligns with the purpose of this comparison.

The main objective here is to compare the different frameworks and see if one outperforms the others.

You can access all the code in [this repository](https://github.com/Smile-SA/frontend-frameworks-comparison).

Now, let's delve into the results of each scenario, utilizing the most optimal approach to serve the content for a fair comparison.

## Glossary

- **FCP**: First Contentful Paint - First Contentful Paint marks the time when the first text or image is painted.
- **LCP**: Largest Contentful Paint - Largest Contentful Paint marks the time when the largest text or image is painted.
- **TBT**: Total Blocking Time - The sum of all time periods between FCP and Time to Interactive, when a task length exceeds 50ms, expressed in milliseconds.
- **CLS**: Cumulative Layout Shift - Cumulative Layout Shift measures the movement of visible elements within the viewport.
- **SI**: Speed Index - Speed Index shows how quickly the contents of a page are visibly populated.

## Lighthouse benchmark

### Full static page

The page has no interaction at all, it's only HTML, CSS, fonts, images...Etc.

Results (with Chrome 116.0.5845.96):

| Frameworks         | Type | Score |
| ------------------ | ---- | ----- |
| Angular            | CSR  | 68    |
| Astro              | SSR  | 67    |
| Astro + React      | SSR  | 67    |
| Gatsby             | SSR  | 68    |
| Next (app router)  | SSR  | 67    |
| Next (page router) | SSR  | 68    |
| Nuxt               | SSR  | 68    |
| Qwik               | SSR  | 68    |
| React              | CSR  | 67    |
| Remix              | SSR  | 68    |
| Solid              | CSR  | 67    |
| Sveltekit          | SSR  | 68    |
| Vue                | CSR  | 67    |

Results (with Chrome 116.0.5845.96): We can observe that the Lighthouse scores range from 67 to 68, indicating that they are all quite close in value. The Lighthouse score can sometimes exhibit slight variations in multiple test batches, making it challenging to definitively declare one framework as superior to another.

Now, let's shift our focus to the page size. In all these frameworks, the CSS, image, and font sizes remain consistent, differing only in terms of document and JavaScript sizes.

Here is a chart illustrating these differences (sorted by total size):

![Page size](./page-size-fsp.png)

Here are some notable points to consider:

- The document size of CSR (Client Side Rendering) frameworks (Angular, React, Solid, and Vue) is minimal, at only around 1kB, because it's mostly empty due to the content being generated on the client side.
- Certain frameworks, such as Astro, Qwik, Remix, and Sveltekit, do not include any JS files.
- The JS size appears to be 0 for some cases, but in reality, there is still some JavaScript embedded in the document. This is why the document size varies among SSR (Server Side Rendering) frameworks.

With these observations in mind, we are ready to delve deeper into our analysis.

### Page with little interactions

In this particular scenario, I introduced some JavaScript interactions exclusively in the header and the footer of the page.

Results (with Chrome 116.0.5845.96):

| Frameworks         | Type | Score |
| ------------------ | ---- | ----- |
| Angular            | CSR  | 67    |
| Astro              | SSR  | 67    |
| Astro + React      | SSR  | 66    |
| Gatsby             | SSR  | 67    |
| Next (app router)  | SSR  | 67    |
| Next (page router) | SSR  | 68    |
| Nuxt               | SSR  | 67    |
| Qwik               | SSR  | 68    |
| React              | CSR  | 67    |
| Remix              | SSR  | 67    |
| Solid              | CSR  | 67    |
| Sveltekit          | SSR  | 66    |
| Vue                | CSR  | 67    |

In this scenario, we observe slightly more disparities in the Lighthouse scores, ranging from 66 to 68\. The scores are generally a bit lower, but they still hover around a similar range.

Here is again a new chart illustrating these differences:

![Page size](./page-size-pwli.png)

In this scenario, we observe slightly more disparities in the Lighthouse scores, ranging from 66 to 68\. The scores are generally a bit lower, but they still hover around a similar range.

Here is again a new chart illustrating these differences:

### Page with interactions

In this scenario, every part of the page has become interactive, and a Leaflet map is loaded in the middle of the page. It's important to note that the data for the map is not fetched but is instead statically stored within the JavaScript.

Results (with Chrome 116.0.5845.96):

| Frameworks         | Type | Score |
| ------------------ | ---- | ----- |
| Angular            | CSR  | 66    |
| Astro              | SSR  | 66    |
| Astro + React      | SSR  | 67    |
| Gatsby             | SSR  | 67    |
| Next (app router)  | SSR  | 66    |
| Next (page router) | SSR  | 66    |
| Nuxt               | SSR  | 66    |
| Qwik               | SSR  | 68    |
| React              | CSR  | 67    |
| Remix              | SSR  | 66    |
| Solid              | CSR  | 67    |
| Sveltekit          | SSR  | 65    |
| Vue                | CSR  | 66    |

In this scenario, as in the previous one, the Lighthouse scores have decreased slightly overall (except for Qwik).

To potentially witness a more substantial difference between the frameworks, we may need to introduce data fetching from a backend. This is the aim of the upcoming scenario.

### Page with interactions and data fetching

In this scenario, I've built upon the previous one by incorporating five API calls to fetch data:

- Four API calls are utilized to load data for the content, with the data fetched on the server for SSR frameworks and on the client for CSR frameworks.
- One API call is dedicated to loading the data for the map, and this call is always executed on the client side.
- To mimic a slower API response, I've introduced a 1-second delay for each API call.
- The four API calls for content are independent of one another, enabling them to be fetched in parallel.
- Whenever possible, I tested both SSR and SSG rendering techniques for SSR frameworks.

Results (with Chrome 116.0.5845.96):

| Frameworks         | Type  | Score |
| ------------------ | ----- | ----- |
| Angular            | CSR   | 67    |
| Astro              | _SSG_ | 66    |
| Astro + React      | _SSG_ | 67    |
| Gatsby             | SSR   | 67    |
| Gatsby             | _SSG_ | 67    |
| Next (app router)  | SSR   | 67    |
| Next (app router)  | _SSG_ | 68    |
| Next (page router) | SSR   | 67    |
| Next (page router) | _SSG_ | 66    |
| Nuxt               | _SSG_ | 67    |
| Qwik               | _SSG_ | 68    |
| React              | CSR   | 67    |
| Remix              | SSR   | 66    |
| Solid              | CSR   | 67    |
| Sveltekit          | _SSG_ | 66    |
| Vue                | CSR   | 66    |

In the latest scenario, despite the introduction of loading, the Lighthouse scores haven't notably decreased compared to the previous scenario. This observation holds true for both CSR, where data fetching occurs on the client, and SSR, where data fetching is done on the server, even when the API responses are delayed by 1 second (resulting in a longer perceived loading time for users).

This leads to an important conclusion: Lighthouse scores primarily focus on frontend performance and are less dependent on the efficiency of your APIs.

In the upcoming scenario, you've decided to introduce a significant computational task in the JavaScript to hopefully yield more discernible differences in performance.

### Page with long calculation

In the latest scenario, a lengthy computation task has been added, which involves a very long loop that takes approximately 10 seconds to complete on my computer.

This extended processing time will likely reveal substantial differences in performance.

It's essential to note that this computation is executed on the client for CSR frameworks and on the server for SSR frameworks (without hydration).

Results (with Chrome 116.0.5845.96):

| Frameworks         | Type  | Score  |
| ------------------ | ----- | ------ |
| Angular            | CSR   | **26** |
| Astro              | _SSG_ | 66     |
| Astro + React      | _SSG_ | 67     |
| Gatsby             | SSR   | **62** |
| Next (app router)  | SSR   | **62** |
| Next (page router) | SSR   | **61** |
| Nuxt               | _SSG_ | 67     |
| Qwik               | _SSG_ | 68     |
| React              | CSR   | **32** |
| Remix              | SSR   | **60** |
| Solid              | CSR   | **26** |
| Sveltekit          | _SSG_ | **30** |
| Vue                | CSR   | **26** |

In this scenario, we indeed begin to witness significant differences:

- CSR frameworks exhibit lower scores, ranging from 26 to 32, with variations across different test batches, underscoring tangible distinctions between these frameworks.
- In SSR cases, there's about a 5-point drop in scores due to an increase in the SI metric. This suggests that a prolonged TTFB (Time To First Byte) can have a minor impact on the Lighthouse score compared to the time spent on the client side.
- Remix cannot perform SSG, but Gatsby and Next can, which means that in some instances, these frameworks can transition to SSG to mitigate the impact of the lengthy calculation.
- SSG frameworks, apart from Sveltekit, do not experience any significant impact from the calculation since it's performed during the build process. However, Sveltekit's score is similar to CSR frameworks, as it primarily does the long calculation on the client side.

This example effectively demonstrates that having a long calculation on the server is generally more favorable. However, in most real-life projects, such an exact scenario may not occur. The most common scenario where time is consumed by JavaScript is during the rendering of your components. Let's proceed to the next scenario.

### Page with long hydration

In this scenario, the objective is to have the time consumed during the rendering process, which primarily affects SSR frameworks. In most of these frameworks, rendering takes place on the server side. However, during page load, the rendering occurs again on the client side, a process known as hydration.

This scenario aims to illustrate the impact of rendering time on the performance of SSR frameworks when hydration is involved.

SSR framework results (with Chrome 116.0.5845.96):

| Frameworks                             | Type  | Score  |
| -------------------------------------- | ----- | ------ |
| Astro (same as previous)               | _SSG_ | **66** |
| Astro + React                          | _SSG_ | 36     |
| Astro + React (using `client:visible`) | _SSG_ | **68** |
| Gatsby                                 | SSR   | 32     |
| Next (app router, same as previous)    | SSR   | **62** |
| Next (page router)                     | SSR   | 31     |
| Nuxt                                   | _SSG_ | 36     |
| Qwik                                   | _SSG_ | **68** |
| Remix                                  | SSR   | 31     |
| Sveltekit                              | _SSG_ | 33     |

In this scenario, several important observations can be made:

- The impact of hydration is evident and significantly reduces the scores for both SSR and SSG rendering techniques to a level similar to that of CSR frameworks. This is because the lengthy calculation occurs solely on the client for SSG, while for SSR, it happens on both the server and the client.
- Astro without React uses plain JS, avoiding the need for hydration, resulting in no significant impact on the Lighthouse score.
- The client:visible directive in Astro can be used to lazily load framework components. This means that the long calculation only occurs when the component enters the viewport, having no detrimental effect on the Lighthouse score (in this case).
- In the case of Next (using the app router), the lengthy calculation is placed inside a React server component, which is not hydrated. As a result, the calculation takes place exclusively on the server side, minimizing the impact of component hydration.
- Qwik's "resumability" technique ensures that no calculation occurs on the client side because it has already been executed on the server, further optimizing performance.

These findings shed light on the different approaches and their implications for frontend framework performance under varying circumstances.

## Reactivity benchmark

### Goal

In this section, our focus will be on benchmarking the reactivity of the framework.

This activity takes place after the page has loaded, for instance, when a user interacts with the page by clicking a button to display something. Our aim is to prevent lengthy tasks, those that take more than 50 milliseconds, in order to ensure the page feels smooth.

The objective of this benchmark is to gauge the framework's performance in handling this task, specifically how much time it takes for the framework to update the DOM in response to a state change.

One way to assess this cost is by calculating the time the framework requires for a simple task, such as incrementing a counter. In this case, the majority of the time spent on this action is, in fact, the time taken by the framework to re-render and update the DOM, while the cost of the custom code part (the increment operation) is negligible.

However, measuring and comparing this can be challenging because this action is very quick. A simpler way to make comparisons is to count the number of times a framework can render within one second.

### Technical implementation

The challenging aspect here is updating the application state and allowing the framework to perform rendering, and then triggering a new state update when the rendering is completed, and so on. Due to the single-threaded nature of JavaScript, it's not possible to update the state within a loop. In such a scenario, the framework will likely render only when the loop is finished, updating the DOM with the final version of the counter. This isn't what we want because we want to count the number of renders.

Our goal is to effectively see the counter increase, as shown in this animation:

![Counter animation](./counter.gif)

We also want to use the same technique for all frameworks to ensure a fair comparison. For example, it's not possible to use React's useEffect to trigger a new increment after rendering is complete.

One way to accomplish this is by using something like `setTimeout(increment, 0)`. Calling setTimeout postpones the execution of the increment function until the main thread is available. However, the problem with setTimeout is that it's not quick enough; it takes about 4 milliseconds to trigger a new increment.

You can see this in the Google Devtools Performance tab record:

![Performances with setTimeout](./setTimeout.png)

What we would like is something similar to the node setImmediate function. We can achieve a similar effect using MessageChannel. Here is the performance tab record demonstrating all the updates:

![Performances with MessageChannel](./postMessage.png)

With this solution, we are now prepared to compare the reactivity of different frameworks.

### Results

I didn't implement the reactivity benchmark for all frameworks because Next, Gatsby, Remix, and others all rely on React. I only implemented it when the frontend framework was something other than React.

So, here's the ranking of how many renders these frameworks can perform in one second, from best to worst:

| Framework           |  Render |
| ------------------- | ------: |
| Native JS (Astro)   | ~174000 |
| Solid               | ~148400 |
| Svelte              | ~123800 |
| Vue                 |  ~77400 |
| Qwik                |  ~70900 |
| React optimized     |  ~34800 |
| Angular             |   ~3100 |
| React non optimized |   ~2200 |

Let's calculate some score based on the maximum score:

| Framework           | Score |
| ------------------- | ----: |
| Native JS (Astro)   |   100 |
| Solid               |    85 |
| Svelte              |    71 |
| Vue                 |    44 |
| Qwik                |    41 |
| React optimized     |    20 |
| Angular             |     2 |
| React non optimized |     1 |

Here are some noteworthy points:

- It's quite reassuring to see that native JavaScript implementation is the top performer.
- The Solid reactivity system is designed with a focus on speed (you can learn more about it here: https://www.solidjs.com/guides/reactivity)
- Svelte, while not exactly a framework, compiles to native JavaScript in an efficient manner.
- React's performance can vary significantly, from being the worst-performing framework to being more than 10 times better, depending on how you define the state in your application.
- Angular's results are subpar due to the necessity of reintegrating messages from the MessageChannel into the Angular flow using NgZone.

You can also refer to this benchmark page, which compares various frameworks in different scenarios, but the overall conclusions remain consistent.

## Summary

### Global

Here are some general points to consider before delving into the conclusions for each framework:

- Lighthouse primarily records frontend performance, and backend requests have a minimal impact on the score.
- This implies that you must focus on optimizing your backend independently, either by yourself or with other tools, to ensure your server is fast and provides the best user experience.
- Overall, SSR (Server-Side Rendering) frameworks perform slightly better than CSR (Client-Side Rendering) frameworks, although the difference is not substantial.
- This suggests that CSR frameworks are still viable options when building applications like Back-Office systems, intranets, extranets, connected apps, and so on (but avoid using CSR frameworks if SEO is a concern).
- While there are no significant variations among CSR frameworks in the page load benchmark, there are notable differences in terms of reactivity.

### Qwik

Taking the results into account, the Qwik framework appears to be performing exceptionally well, especially when you aggregate all the Lighthouse scenario scores in one place:

| Scenario                                 | Score |
| ---------------------------------------- | ----- |
| Full static page                         | 68    |
| Page with little interactions            | 68    |
| Page with interactions                   | 68    |
| Page with interactions and data fetching | 68    |
| Page with long calculation               | 68    |
| Page with long hydration                 | 68    |

The framework's ability to compensate for suboptimal programming is quite impressive.

Although the framework's reactivity system isn't the fastest (scoring 41 out of 100), it's still sufficiently fast.

### Astro

Astro is also notable because of its island architecture, which allows you to choose the framework you want for specific components where it's most advantageous.

Thanks to Astro directives, such as client:visible, you can load framework parts only when they are required.

Here are the consolidated results for Astro when utilizing this directive:

| Scenario                                 | Score |
| ---------------------------------------- | ----- |
| Full static page                         | 67    |
| Page with little interactions            | 66    |
| Page with interactions                   | 67    |
| Page with interactions and data fetching | 67    |
| Page with long calculation               | 67    |
| Page with long hydration                 | 68    |

The distinction between Astro and Qwik lies in the fact that, for Astro, the extended hydration process will still occur on the frontend when the component enters the viewport.

You may also encounter a challenge when it comes to enabling multiple island components to communicate with each other in Astro. However, this issue can be resolved using tools like Astro nano stores or a state library such as Redux, among others.

It's important to note that the reactivity of the framework will depend on the specific framework you choose in combination with Astro.

### Next / Gatsy / Remix / Nuxt

Here's a summary of the scores for Next, Gatsby, Remix, and Nuxt:

| Scenario                                 | Next (app routing)  | Next (page routing) | Gatsby              | Remix    | Nuxt     |
| ---------------------------------------- | ------------------- | ------------------- | ------------------- | -------- | -------- |
| Full static page                         | 67                  | 68                  | 68                  | 68       | 68       |
| Page with little interactions            | 67                  | 68                  | 67                  | 67       | 67       |
| Page with interactions                   | 66                  | 66                  | 67                  | 66       | 66       |
| Page with interactions and data fetching | 67 (ssr) / 68 (ssg) | 67 (ssr) / 66 (ssg) | 67 (ssr) / 67 (ssg) | 66 (ssr) | 67 (ssg) |
| Page with long calculation               | 62 (ssr) / 68 (ssg) | 61 (ssr) / 67 (ssg) | 62 (ssr) / 67 (ssg) | 60 (ssr) | 67 (ssg) |
| Page with long hydration                 | 62                  | 31                  | 32                  | 31       | 36       |

Based on these results, we can conclude that in most scenarios, these frameworks exhibit similar performance levels.

Next stands out when it uses app routing (and, consequently, React Server Component) and performs better in situations where a server component needs to perform complex calculations. However, in practice, such cases might not be very common because these calculations often rely on frontend state and need to be recalculated on the client side.

Nonetheless, if you encounter performance issues, utilizing Next with React Server Side Rendering could be a favorable choice. It not only has the potential to improve performance in specific scenarios but also reduces the overall number of hydrated components. Therefore, if you're looking to employ React with Server Side Rendering, Next is likely one of the top choices.

### SvelteKit

Lighthouse Score results for SvelteKit:

| Scenario                                 | Score    |
| ---------------------------------------- | -------- |
| Full static page                         | 68       |
| Page with little interactions            | 66       |
| Page with interactions                   | 65       |
| Page with interactions and data fetching | 66       |
| Page with long calculation               | 30 (ssg) |
| Page with long hydration                 | 33       |

I was somewhat taken aback by the outcomes. In general, they are slightly inferior to those of other frameworks, and SvelteKit isn't capable of serializing extensive calculations typically reserved for the backend. While this may not occur often, the option remains unavailable.

However, the reactivity system is highly effective, scoring 71 out of 100\. Overall, it is quite comparable to the frameworks mentioned above.

### React / Vue / Angular / Solid

Here's a summary of the scores for these frameworks:

| Scenario                                 | Angular | React | Solid | Vue |
| ---------------------------------------- | ------- | ----- | ----- | --- |
| Full static page                         | 68      | 67    | 67    | 67  |
| Page with little interactions            | 67      | 67    | 67    | 67  |
| Page with interactions                   | 66      | 67    | 67    | 66  |
| Page with interactions and data fetching | 67      | 67    | 67    | 66  |
| Page with long calculation               | 26      | 32    | 26    | 26  |

It's difficult to identify any significant differences here; the results are largely consistent.

The only notable exception is that Solid boasts the fastest reactive system, earning a score of 85/100 and establishing itself as the top reactive CRS framework.

## Conclusion

In conclusion, there are relatively few differences, making the choice of framework less critical for performance.

Furthermore, if you encounter performance issues, you're likely to find solutions within the framework you're using.

Nonetheless, here are the final results:

- **Qwik** stands out with its impressive resumable hydration system, as it appears to be optimized by default. This could be an excellent choice for projects that require building everything from scratch and don't heavily rely on external libraries. It's worth noting that the Qwik ecosystem and community are relatively new.
- **Astro** offers strong performance and allows you to select your preferred framework. However, its island architecture might not be suitable for all projects. Consider using it if you only need interactivity in specific parts of your website.
- **Next** would likely be the default choice for projects that don't fall into the aforementioned categories.
- **Solid** boasts the best reactivity, but like Qwik, its ecosystem is still emerging. It might be worth exploring in scenarios where SEO isn't a primary concern (though SolidStart offers SSR, it's still in beta) and where you don't heavily rely on external libraries.
