# Resume of René Weiberlenn
Stores an up to date version of my resume.
Find the deployed version **[here](https://renespeaks.github.io/Resume)**

Made in a few days with [Tailwind](https://tailwindcss.com/) as an improvement for faster CSS coding and [Astro](https://astro.build/) for good performance (packs with [Vite](https://vitejs.dev/)) and comfortable web development.

## Setup roadmap

> npm create astro@latest -- --template basics

> npx astro add tailwind

> npm i -D prettier prettier-plugin-astro

> npm i -D prettier-plugin-tailwindcss // for prettier automatic tailwind class sorting

- Set up Github Actions in settings and add _.github/workflows/_[_deploy.yml_ configuration](https://github.com/ferranJS/tasle/blob/main/.github/workflows/deploy.yml) to the root of the project.

- Configure _astro.config.mjs_ following the [official docs](https://docs.astro.build/en/guides/deploy/github/) and adding the base to all src in the project.


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |