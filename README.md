# Ennismore GitHub Challenge

This repository contains a boostrapped project that generally follows the structure we use in production applications.

## The task

Your task is to build an app which displays public GitHub repositories for a specified user. When visiting the index page (`/`), there should be a text field in which you can enter any GitHub username and a button to trigger the search.

A list of repositories should then be returned, displaying:

- The repo title
- Number of stars
- Number of forks
- Programming language used

Clicking on the repository should take you to a detail view containing a description of the repository and license information.

As a stretch goal: Users should also be able to 'bookmark' repositories, displayed when visiting `/bookmarks`. These should be stored locally in the browser and persist across refreshes.

- [The API endpoint you'll need is here](https://developer.github.com/v3/repos/#list-repositories-for-a-user). An API key should not be required.

## Tips

- We use [Next.js](https://nextjs.org) to provide SSR, code-splitting, routing and other features. An interactive tutorial for Next.js is available [here](https://nextjs.org/learn).
- For state management we use [MobX-state-tree](https://mobx-state-tree.js.org/) (pre-installed). But for the sake of this exercise, please use whatever state management framework you're most comfortable with.
- We tend to split up our application into domain modules, each one containing components, helpers, stores etc. relavant for that segment of the domain. Don't worry too much about conforming to this, but it's worth noting that `import {} from "@/movie/List"` will import a file located at `/src/modules/movie/List.ts(x)`.
- We use Jest for testing, co-locating test files alongside our implementation files. For example, the test file for `/src/modules/hello/helpers/hello-world.ts` would live at `/src/modules/hello/helpers/hello-world.test.ts`.
- For styling, we use [Emotion](https://emotion.sh/docs/introduction) which is similar to styled components. An example can be found at `pages/index.tsx`. Be sure to import from `@emotion/core` to take advantage of SSR functionality.
- We're not expecting anything crazy professional for the UI, but please make sure it's clean and consistent.

This test should take about 2 hours (max). Please provide the code as close as you can to how you would for a production app (e2e tests are unnecessary). If it takes you longer, please feel free to write comments explaining what you would have done with more time available.

## Getting Started

First, install dependancies: 

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Testing

Run tests using the following command:

```bash
npm run test
```
