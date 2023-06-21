# rcmndr

collate.
recommend.
discover.

## what is rcmndr?

rcmndr (no vowels for hipster cred) is a social media app for sharing music recommendations, either as genuine suggestions or as proof of how cool you are.

## External documentation

- [Wireframes on Figma](https://www.figma.com/file/XWlEtFLxP2ICoM877xOkrc/rcmndr-2022?type=design&node-id=0%3A1&t=Q4Qt87ICXqtPUYRd-1)
- [ERD](./ERD.png)

## Local installation steps:

Clone this repo

```js
cd rcmndr
git checkout <not your name> // don't use yournames
npm install --legacy-peer-deps
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env
npm run dev
```

The app will be running on http://localhost:5173.

## Task / feature management

Our tasks are all managed on a Github Project. There are four columns for each task

- _backlong_ - the entry point for new issues
- _to do_ - any card on here are ready to be worked on and can be picked up by any dev
- _in progress_ - assign yourself to a card / task / issue and move it to this "doing" column so everyone knows it's in progress
- _Code review_ - if your issue is ready for lead devs to review then create a PR and move it to this column
- _Done_ - once your issue is done, a dev lead can move it here, it's now ready to ship :rocket:

## Branching strategy

### main branch

The ONLY branch that should be merged to is the `main` (once all tests have passed). This branch is what will be deployed to production. If you spot a bug in production sing out to a dev lead. They'll sort you out. We've protected this branch so in theory only the dev leads can push / merge to it.

### feature branches

When starting on a new feature you need to branch off of the `main` branch

Features should be named something like `feature/123-adding-songs`. The first half (feature) let's folks know what kind of branch this is. A feature branch is in development and is not ready for deployment yet. The second half is a descriptive name of the feature you are building.

### hotfix

A hotfix branch will happen if a bug is spotted in production. Only dev leads should create a hotfix branch. See them for more info. They follow the same naming convention as feature branches, something like `hotfix/usersCantLogIn`

## Tech used in this Project

- Storybook: is a tool for UI development: [video introduction](https://www.youtube.com/watch?v=gdlTFPebzAU), [docs](https://storybook.js.org/docs/react/get-started/introduction)
- Vite: a fast bundler: [video introduction](https://www.youtube.com/watch?v=KCrXgy8qtjM), [docs](https://vitejs.dev/guide/)
- tailwindcss: utility classes for styling: [video introduction](https://www.google.com/search?q=tailwind&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjj68-pgMP7AhV21jgGHWukCe0Q_AUoBHoECAEQBg&biw=1440&bih=789&dpr=2#fpstate=ive&vld=cid:0d59cd2c,vid:mr15Xzb1Ook), [docs](https://tailwindcss.com/docs/installation)
- Auth0: for authenticating users
- zod: for runtime validation
- @tanstack/query: async client state management library

### Unit/Integration tests

To test an individual test, use **npx**:

```
npx vitest events.test.js
```

To run all tests:

```
npm run test
```

To run one single test, add `.only` after `it`

```
it.only('my test name goes here', () => {
  // here test goes here
))

```

Then you can run the test file individually, `npm test events.test.js`.
