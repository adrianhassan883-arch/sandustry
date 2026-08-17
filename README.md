# Sandustry Guide

Fan-made Sandustry guide and wiki for beginner routes, resources, buildings, mechanics, Game Pass, mods, and maps.

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run check
```

The static site builds to `dist/`.

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After the project is pushed to GitHub, enable GitHub Pages with **Source: GitHub Actions**. Every push to `main` will validate content, build the Astro site, upload `dist`, and deploy it.

The current GitHub Pages URL is `https://adrianhassan883-arch.github.io/sandustry/`. Add a `public/CNAME` file later only after the custom domain DNS is ready.
