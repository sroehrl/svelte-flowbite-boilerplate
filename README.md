
# REtech svelte kit app starter / boilerplate

Quick start for a svelte PWA powered by flowbite

### Preview

[@ github pages](https://sroehrl.github.io/svelte-flowbite-boilerplate)

### includes
- typescript
- flowbite
- tailwind
- flowbite icons
- color palette generator
- dayjs
- external API for REST backend (we recommend https://lenkrad.neoan3.rocks)

## Creating a project using `npx`

- `npx svelte-flowbite-boilerplate@latest <project-name>`
- check deployment base in `svelte.config.js`

## Creating a project using github's repository template

Use the template button at https://github.com/sroehrl/svelte-flowbite-boilerplate to start a new project

- create .env (or .env.development, .env.deployment)
- setup src/lib/colors.js
- change base in `svelte.config.js`
- run `yarn`
- run `yarn dev`

## Ready for GitHub pages
This package contains GitHub actions to automatically deploy your app on GitHub pages. To activate, simply go to "Settings > Pages"
and use "GitHub Actions" as your source.


