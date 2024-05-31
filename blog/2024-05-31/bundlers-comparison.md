---
slug: bundlers-comparison
title: 2024 JavaScript bundlers comparison
description: This article compares different JavaScript bundlers in the context of building a library and the context of building an app.
authors: tonai
tags: [frontend, bundler]
---

The JavaScript ecosystem is really vast and rich but because of that it is really not easy to choose the right tool when you have to.

Did you never ask yourself what bundler should I use for that new Project ?

Maybe you already have your stack that you reuse between projects ?

But it is really optimal and when did you update it the last time ?

<!--truncate-->

Sometimes, frameworks make the choice for you and you don't have to worry about that, but:

- that's not always the case
- sometimes some tools you are used to becomes obsolete (Create React App)
- maybe you want to create a reusable library and not an entire app
- or any other reason you may have to make the decision of a JavaScript bundler...

This article is here to help you make that choice by:

1. first defining what is a bundler.
2. then focusing on the scenario of bundling a reusable library.
3. and next focusing on the scenario of bundling an app.
4. finally drawing some conclusions regarding the best bundlers to use

All the code used for the benchmarks is available in [this repository](https://github.com/Smile-SA/bundlers-comparison).

## Bundlers

### What is a bundler

Bundlers are really useful tools that... bundles your application.

When you develop a library or an app, it is easier to write your code in multiple files, make use of import statements...etc, because the code you write needs to be readable for a human (if you want it to be maintainable in the long term).

But this written code is not optimized for production. For production you probably want:

- the code to be concatenated, minified...etc. for it to be downloaded as fast as possible by browsers.
- to automatically transforms and injects polyfills or CSS vendor prefix to maximize browser compatibilities.
- ...etc.

And that's the role of bundlers, they can process your entire app graph (including imports...etc.) and generate in the end an optimized, ready for production, set of files representing your app or your library.

Most of the time they can handle more than just JavaScript files, they can also handle images or CSS files, CSS modules, SASS...etc.

But they are not to be confounded with:

- parsers, transpilers and compilers like Babel, swc or Typescript that have for only purpose to parse, understand and transform JavaScript files (most of the time bundlers use these tools under the hood).
- linters like ESLint or oxlint that check your code against errors or bad practices.
- formatters like prettier or Biome that format your code to be the same across the entire repository, no matter who develops it

In the end all these tools are needed for a good development tool chain, but in this article we will only focus on bundlers.

### Bundler candidates

In this article we will tests following bundlers:

- [Bun](https://bun.sh/) (version 1.0.22): Bun is more than a bundler but it has a `build` command that seems to be really fast.
- [esbuild](https://esbuild.github.io/) (version 0.19.11)
- [microbundle](https://github.com/developit/microbundle) (0.15.1)
- [Parcel](https://parceljs.org/) (version 2.11.0)
- [rollup.js](https://rollupjs.org/) (version 4.9.4)
- [tsup](https://github.com/egoist/tsup) (version 8.0.1)
- [Typescript](https://www.typescriptlang.org/) (version 5.3.3): Typescript is not a bundler, but it can sometimes be enough in some scenario.
- [Vite](https://vitejs.dev/) (version 5.0.11)
- [Webpack](https://webpack.js.org/) (version 5.89.0)

### Other disqualified tools

We will not tests following tools:

- [WMR](https://github.com/preactjs/wmr): it can only bundle an app not a library, only works for Preact and seems to have issues working in a monorepo.
- [Turbopack](https://turbo.build/pack): it is only available as an option in the Next.js tool chain and is still in beta.
- [Browserify](https://browserify.org/): it can bundle an app, not a library, and lack a lot of features comparing to modern bundlers.
- [Gulp](https://gulpjs.com/), [Grunt](https://gruntjs.com/): they are bundler ancestors (but they are not bundlers), requires a lot of configuration and lack a lot of features comparing to modern bundlers.
- [Brunch](https://brunch.io/), [Snowpack](https://www.snowpack.dev/), [Packem](https://packem.github.io/), [pkg](https://github.com/vercel/pkg) : they are not maintained any more.

## Bundling a library

### Operating mode

We will create some piece of code that we will use for all bundlers.

This piece of code will be used to check the capabilities of bundlers :

1. it will use Typescript.
2. it will import a JSON file.
3. it will contain a React component.
4. that component will import an image (svg) as url for an <img/> tag,
5. and a CSS file that uses an image (jpg) as background-image.
6. it will also contain a file with a big string that we won't import. The purpose here is to check if the library is tree-shakable: we don't want that unused string to be included in the production version of the app.

In the end the code source will be composed of approximately 10 files.

We also want the library to be generated in different formats:

- `ESM` (ES module)
- `CJS` (Common JS)
- Browser compatible format (like `IIFE`)
- Other formats like `UMD` or `AMD` is just a bonus (`AMD` being not really used anymore)

We will also measure:

- the time taken to generate the library build
- the generated bundle size

Then we will do the same measurements using another bigger, real library that is composed of approximately 100 files.

### Setup

#### Bun

We use the following command to generate the build:

```sh
NODE_ENV=production bun build src/index.ts --outdir dist --target node \
  --format esm --external react
```

- It works without configuration file, only CLI options (some options needs to be defined inside a `bunfig.toml` file).
- We need to add `NODE_ENV=production` for the output to be more production ready.

#### esbuild

We use the following commands to generate the build:

```sh
esbuild src/index.ts --outfile=dist/esbuild-lib.mjs --bundle \
  --jsx=automatic --external:react --loader:.jpg=dataurl \
  --loader:.svg=dataurl --format=esm
esbuild src/index.ts --outfile=dist/esbuild-lib.cjs --bundle \
  --jsx=automatic --external:react --loader:.jpg=dataurl \
  --loader:.svg=dataurl --platform=node --format=cjs
esbuild src/index.ts --outfile=dist/esbuild-lib.js --bundle \
  --jsx=automatic --external:react --loader:.jpg=dataurl \
  --loader:.svg=dataurl --platform=browser --format=iife
```

- It works without configuration file, only CLI options.

#### microbundle

We use the following command to generate the build:

```sh
microbundle --jsx React.createElement --jsxFragment React.Fragment \
  --jsxImportSource react --globals react/jsx-runtime=jsxRuntime
```

- It works without configuration file, only CLI options.
- There are also no need to add a lot of CLI options as the default configuration is already well optimized.

#### Parcel

We use the following command to generate the build:

```sh
parcel build
```

- It works without configuration file but you need to add some information in `package.json`.

#### Rollup

We use the following command to generate the build:

```sh
rollup -c
```

- It works with some configuration in the `rollup.config.js` file.

#### tsup

We use the following command to generate the build:

```sh
tsup src/index.ts --format esm,cjs,iife --dts --loader '.jpg=dataurl' \
  --loader '.svg=dataurl'
```

- It works without configuration file, only CLI options.
- There are also no need to add a lot of CLI options as the default configuration is already well optimized.

#### Typescript

We use the following command to generate the build:

```sh
tsc && tsc --project tsconfig.cjs.json
```

- It works with some configuration in the `tsconfig.json` and `tsconfig.cjs.json` files.

#### Vite

We use the following command to generate the build:

```sh
vite build
```

- It works with some configuration in the `vite.config.js` file.

#### Webpack

We use the following command to generate the build:

```sh
vite build
```

- It works with some configuration in the `webpack.config.js` file.

### Feature comparison

Comparison of library bundler features and files compatibility.

| Bundler     | TypeScript | React | JSON | Image | CSS | Image in CSS | Tree-shakable |
| ----------- | ---------- | ----- | ---- | ----- | --- | ------------ | ------------- |
| Bun         | ❗①        | ✅    | ✅   | ❗②   | ❗③ | ❌②          | ✅            |
| esbuild     | ❗①        | ✅    | ✅   | ✅    | ✅  | ✅           | ✅            |
| microbundle | ✅         | ✅    | ✅   | ❌    | ❗③ | ❌           | ✅            |
| Parcel      | ✅         | ✅    | ✅   | ✅    | ✅  | ✅           | ❗④           |
| Rollup      | ✅         | ✅    | ✅   | ✅    | ✅  | ✅           | ✅            |
| tsup        | ✅         | ✅    | ✅   | ✅    | ✅  | ✅           | ✅            |
| Typescript  | ✅         | ✅    | ✅   | ❌    | ❌  | ❌           | ✅            |
| Vite        | ✅         | ✅    | ✅   | ✅    | ✅  | ✅           | ✅            |
| Webpack     | ✅         | ✅    | ✅   | ✅    | ✅  | ✅           | ❌            |

**Notes:**

1. Bundler does not generate Typescript definition files so we need to generated them separately.
2. Some loaders are not all available, so images can't be packaged as data-url.
3. The CSS file is generated, but we can't import that file in the app because the background-image can't be found.
4. The tree-shaking does not work with the small lib, but seems to work with the bigger lib.

### Format comparison

| Bundler     | ESM | CJS | Browser |
| ----------- | --- | --- | ------- |
| Bun         | ✅  | ❌  | ❌      |
| esbuild     | ✅  | ✅  | ✅      |
| microbundle | ✅  | ✅  | ✅      |
| Parcel      | ✅  | ✅  | ✅      |
| Rollup      | ✅  | ✅  | ✅      |
| tsup        | ✅  | ✅  | ✅      |
| Typescript  | ✅  | ✅  | ❌      |
| Vite        | ✅  | ✅  | ✅      |
| Webpack     | ✅  | ✅  | ✅      |

### Bundle size comparison

Comparison of the final library size (JS in multiples formats + CSS).

**Small library:**

| Bundler     | ESM | CJS | Browser | CSS   |
| ----------- | --- | --- | ------- | ----- |
| Bun         | 34k | -   | -       | 0.5k① |
| esbuild     | 34k | 35k | 34k     | 33k   |
| microbundle | 33k | 33k | 33k     | 0.4k① |
| Parcel      | 36k | 37k | -       | 35k   |
| Rollup      | 33k | 34k | 34k     | 33k   |
| tsup        | 34k | 35k | 164k    | 33k   |
| Typescript  | 33k | 35k | -       | -     |
| Vite        | 34k | 33k | 34k     | 33k   |
| Webpack     | 34k | 34k | 34k     | 33k   |

**Bigger library:**

| Bundler     | ESM  | CJS  | Browser |
| ----------- | ---- | ---- | ------- |
| Bun         | 109k | -    | -       |
| esbuild     | 139k | 148k | 153k    |
| microbundle | 64k  | 66k  | 66k     |
| Parcel      | 146k | 153k | -       |
| Rollup      | 128k | 133k | 141k    |
| tsup        | 144k | 154k | 2.2m    |
| Typescript  | 323k | 349k | -       |
| Vite        | 108k | 79k  | 79k     |
| Webpack     | 96k  | 95k  | 94k     |

**Notes:**

1. Compared to other bundlers the generated CSS file is small because it does not contain the background-image as data-url.

### Performance comparison

Comparison of the time taken to generate the library bundle.

**Small library:**

| Bundler     | Command | Types | Total    |
| ----------- | ------- | ----- | -------- |
| Bun         | ~200ms  | ~1.1s | ~1.5s①   |
| esbuild     | ~200ms  | ~1.1s | ~1.5s②   |
| microbundle | ~4.6s④  | -     | ~4.6s③④  |
| Parcel      | ~900ms④ | -     | ~900ms②④ |
| Rollup      | ~1.7s   | -     | ~1.7s③   |
| tsup        | ~1.7s   | -     | ~1.7s③   |
| Typescript  | ~1.1s   | -     | ~2.3s②   |
| Vite        | ~1.8s   | -     | ~1.8s③   |
| Webpack     | ~2.6s   | -     | ~3.2s③   |

**Bigger library:**

| Bundler     | Command | Types | Total  |
| ----------- | ------- | ----- | ------ |
| Bun         | ~200ms  | ~3.7s | ~4.3s① |
| esbuild     | ~200ms  | ~3.7s | ~4.3s② |
| microbundle | ~24s④   | -     | ~24s③④ |
| Parcel      | ~1s④    | -     | ~1s②④  |
| Rollup      | ~5s     | -     | ~5s③   |
| tsup        | ~4.9s   | -     | ~4.9s③ |
| Typescript  | ~3.8s   | -     | ~7.6s② |
| Vite        | ~5.3s   | -     | ~5.3s③ |
| Webpack     | ~7.2s   | -     | ~17s③  |

**Notes:**

1. ESM + Types
2. ESM + CJS + Types
3. ESM + CJS + Browser + Types
4. With cache

## Bundling an app

### Operating mode

Now it is time to reuse our 9 libraries and build an app for each of them and for all bundlers (excluding Bun, microbundle, tsup and TypeScript that are not suited for this case).

For each bundler we want:

1. to test each library to check the compatibility, integration and features with the bundler.
2. to test them with one configuration (multiple entry points mode).
3. the bundler to manage the HTML files and automatically inject JS and CSS files.
4. to have both a development environment and being able to build the app for production.
5. to have HMR (Hot Module Replacement) for a better development experience.
6. to generate sourcemaps.
7. the bundler to be able to generate a common chunk between all libraries.

We will then measure for both the small and bigger libs:

- the time taken to generate the library build
- the time taken in development mode to react to some changes
- the generated bundle size

In that part we won't use Bun, microbundle, tsup or Typescript because they are only able to build a library.

### Setup

#### esbuild

We use the following commands to generate the build:

```sh
esbuild src/*.tsx --bundle --outdir=public/dist \
  --define:process.env.NODE_ENV=\\\"production\\\" --sourcemap=external \
  --minify --format=esm --splitting
```

And the following command for the development mode:

```sh
esbuild src/*.tsx --bundle --outdir=public/dist --watch --servedir=public
```

#### Parcel

We use the following commands to generate the build:

```sh
parcel build
```

And the following command for the development mode:

```sh
parcel
```

#### Rollup

We use the following commands to generate the build:

```sh
rollup -c
```

And the following command for the development mode:

```sh
rollup -c -w
```

#### Vite

We use the following command to generate the build:

```sh
vite build
```

And the following command for the development mode:

```sh
vite
```

#### Webpack

We use the following command to generate the build:

```sh
webpack
```

And the following command for the development mode:

```sh
webpack serve --open --mode=development
```

### Feature comparison

Comparison of app bundler features.

| Bundler | Multiple entry points | Inject JS | Inject CSS | Dev server | HMR | Sourcemaps | Shared chunks |
| ------- | --------------------- | --------- | ---------- | ---------- | --- | ---------- | ------------- |
| esbuild | ✅                    | ❌        | ❌         | ✅         | ❌  | ✅         | ❗①           |
| Parcel  | ✅                    | ✅        | ✅         | ✅         | ✅  | ✅         | ✅            |
| Rollup  | ❗②                   | ❌        | ❌         | ❌         | ❌  | ✅         | ❗③           |
| Vite    | ✅                    | ✅        | ✅         | ✅         | ✅  | ✅         | ✅            |
| Webpack | ✅                    | ❗④       | ✅         | ✅         | ✅  | ✅         | ✅            |

**Notes:**

1. Only for `ESM` format.
2. No wildcard patterns (need to use the `glob` library).
3. Not available for `UMD` or `IIFE` formats
4. Inject all entry points in all HTMl files (and that's not what we want).

### Bundle size comparison

Comparison of the final app size (for each library).

**Small library:**

| Bundler ⯈<br/>Library ⯆ | esbuild     | Parcel      | Rollup      | Vite        | Webpack     |
| ----------------------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Bun                     | 140k + 1.5k | 142k + 1.8k | 138k + 1k   | 140k + 1.3k | 137k + 2.3k |
| esbuild                 | 140k + 1.2k | 142k + 1.7k | 138k + 1.1k | 140k + 1.1k | 137k + 4.4k |
| microbundle             | 140k + 0.8k | 142k + 1.3k | 138k + 0.7k | 140k + 0.7k | 137k + 2.3k |
| Parcel                  | 140k + 34k① | 142k + 1.8k | 138k + 34k① | 140k + 34k① | 137k + 37k① |
| Rollup                  | 140k + 1.2k | 142k + 1.7k | 138k + 1.1k | 140k + 1.1k | 137k + 4.4k |
| tsup                    | 140k + 1.2k | 142k + 1.7k | 138k + 1.1k | 140k + 1.1k | 137k + 4.4k |
| Typescript              | 140k + 0.7k | 142k + 1.3k | 138k + 0.6k | 140k + 0.6k | 137k + 2.3k |
| Vite                    | 140k + 1.2k | 142k + 1.7k | 138k + 1.2k | 140k + 1.2k | 137k + 4.4k |
| Webpack                 | 140k + 34k① | 142k + 34k① | 138k + 34k① | 140k + 34k① | 137k + 37k① |

**Bigger library:**

| Bundler ⯈<br/>Library ⯆ | esbuild      | Parcel       | Rollup       | Vite         | Webpack      |
| ----------------------- | ------------ | ------------ | ------------ | ------------ | ------------ |
| Bun                     | 603k + 36k   | 672k + 36k   | 372k + 24k   | 372k + 22k   | 599k + 38k   |
| esbuild                 | 603k + 37k   | 672k + 37k   | 372k + 26k   | 372k + 23k   | 599k + 39k   |
| microbundle             | 603k + 37k   | 672k + 37k   | 372k + 26k   | 372k + 23k   | 599k + 40k   |
| Parcel                  | 603k + 34k   | 672k + 37k   | 372k + 24k   | 372k + 21k   | 599k + 37k   |
| Rollup                  | 603k + 37k   | 672k + 38k   | 372k + 27k   | 372k + 24k   | 599k + 40k   |
| tsup                    | 603k + 37k   | 672k + 37k   | 372k + 26k   | 372k + 23k   | 599k + 39k   |
| Typescript              | 603k + 41k   | 672k + 43k   | 372k + 30k   | 372k + 27k   | 599k + 43k   |
| Vite                    | 603k + 35k   | 672k + 35k   | 372k + 24k   | 372k + 22k   | 599k + 38k   |
| Webpack                 | 603k + 105k① | 672k + 106k① | 372k + 801k① | 372k + 319k① | 599k + 107k① |

**Notes:**

1. No tree-shaking.

### Performance comparison

Comparison of the time taken to generate the app bundle (Build), or to refresh the development environment when the code changes (Dev).

**Small library:**

| Bundler | Build   | Dev    |
| ------- | ------- | ------ |
| esbuild | ~300ms  | ~10ms  |
| Parcel  | ~900ms① | ~10ms  |
| Rollup  | ~15s    | ~1s    |
| Vite    | ~1.2s   | ~10ms  |
| Webpack | ~7s     | ~500ms |

**Bigger library:**

| Bundler | Build  | Dev           |
| ------- | ------ | ------------- |
| esbuild | ~700ms | ~500ms        |
| Parcel  | ~1.2s① | ~1.2s         |
| Rollup  | ~1m35s | Out of memory |
| Vite    | ~5.5s  | ~20ms         |
| Webpack | ~24s   | ~1.6s         |

**Notes:**

1. With cache

## Conclusion

### Building a library

Here is my personal ranking for the best library bundler:

1. **Vite:** Vite is now a well known solution for building apps, but I was really surprised that it can also handle building libraries really well. So well in fact I put it in the first place because there is no downside.
2. **tsup:** A nice solution to build a library. CSS support is still experimental, so use it with caution if you have some, but for our cases the results are really great.
3. **esbuild:** esbuild is a solution that creates bundles in a blink of an eye and supports a lot of features. It can be a really good solution for building a library (just don't forget to generate the definition files if you want them).
4. **microbundle:** microbundle cannot handle images but it generate really small bundles (at a cost of some time...). I would probably recommend it if you want to bundle your JS/TS library to be directly used in the browser (not for a library you want to publish on npm).
5. **Typescript:** Not really a bundler, but it has the big advantage to not add any additional dependency to your project. It can be a real solution for JS/TS only projects, but you probably want to build a pure ESM package in that case (see https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
6. **Parcel:** Parcel is a nice "magical" solution and it can be a real good solution for someone who want a pug and play solution. But I feel like I don't have control over what's happening so I am a little reluctant to use it for bundling a library.
7. **Rollup:** Rollup is a nice bundler for libraries, but at the price of some configuration that is not always obvious. I would probably prefer another bundler (like Vite that is built on top of Rollup for example).
8. **Bun:** Bun is a promising solution, but I wouldn't recommend it now for bundling an app as it lacks some key features. Let's keep an eye on it in the future.
9. **Webpack:** Webpack is probably the oldest bundler and it is still here, but the tree-shaking problem I encountered makes I would not use it to bundle a library.

I wouldn't recommend using `Bun` or `Webpack` to bundle a library but all the others are ok (some with upsides or downsides depending on what you are bundling).

### Building an app

Here is my personal ranking for the best app bundler:

1. **Vite:** Again first, but it is really close with Parcel. Here the time taken to update the app in dev mode make the difference as it scales really well with Vite, and I prefer here to have better dev performance than build performance because we spent much more time in development than building the app for production.
2. **Parcel:** No configuration and really great default presets makes Parcel a really good bundler for an app. It can even make the tree-shaking of a Parcel built library works (that does not work with other app bundler). But it is still feels like a "magical" solution and that's also a reason why I personally prefer `Vite`.
3. **Webpack:** Do not use webpack for bundling a library but it's ok to use to bundle an app. Still it won't be my primary choice as the configuration is not easy, you can have some cases where it won't fit well (as in our example) and the performances are far beyond `Parcel` and `Vite`.
4. **esbuild:** esbuild can be used to bundle an app, but it is not really fitted for that especially regarding the dev mode, better use `esbuild` for bundling a library.
5. **Rollup:** Like `esbuild`, but even worse. Do not use `Rollup` to bundle an app.

In that case I wouldn't recommend `esbuild` or `Rollup` as they lack a real good developer experience, chose `vite` or `Parcel` depending on your preferences.  
`webpack` can still be used but as low performances compared to `vite` and `Parcel`.
