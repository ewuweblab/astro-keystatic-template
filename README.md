# Astro + Keystatic Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ewuweblab/astro-keystatic-template)

A static [Astro](https://astro.build) site with [Keystatic](https://keystatic.com) for editing content locally.

## ☁️ Deploy to Cloudflare

Click the **Deploy to Cloudflare** button above. Cloudflare will copy this repository into your GitHub account, build it with `npm run build`, and deploy the `dist/` folder as a static Worker using `npm run deploy` (`wrangler deploy`). Every push to your copy's `main` branch redeploys the site.

The Keystatic admin (`/keystatic`) only runs during `npm run dev`. Edit content locally, commit the changes, and push to publish.

## ✉️ Contact form

The Contact page (`/contact/`) has a form that sends messages to your inbox through [Web3Forms](https://web3forms.com). The intro text above it is edited in Keystatic like any other page.

1. Go to [web3forms.com](https://web3forms.com), enter the email address that should receive messages, and copy the access key they send you.
2. Copy `.env.example` to `.env` and paste the key into `PUBLIC_WEB3FORMS_ACCESS_KEY`.
3. In Cloudflare, add the same `PUBLIC_WEB3FORMS_ACCESS_KEY` as a **build** variable (Workers & Pages → your project → Settings → Build → Variables and secrets), then redeploy. The key is built into the page, so it must be there at build time.

The access key is safe to publish: it can only send mail to the address it was created for. A hidden "honeypot" field filters out simple spam bots.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Deploy `./dist/` to Cloudflare with Wrangler     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
