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

`public/CNAME` sets the custom domain to `sandustryguide.wiki`. After deployment, point the domain DNS to GitHub Pages and confirm the custom domain in the repository Pages settings.
