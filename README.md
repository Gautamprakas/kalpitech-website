# Kalpitech — Marketing Website

Marketing site for Kalpitech (web, mobile, custom software & UI/UX services),
built with React + Vite, deployed free on GitHub Pages at `kalpitech.com`.

## Local development

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. `npm run build` outputs a production build to `dist/`.

## Before you go live

1. **Contact form (Formspree)**
   The contact form posts to a Formspree endpoint. Sign up free at
   [formspree.io](https://formspree.io), create a form, and replace the
   placeholder endpoint in [src/data/content.js](src/data/content.js):
   ```js
   formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'
   ```

2. **Contact details**
   Edit `contact` in [src/data/content.js](src/data/content.js) to update email,
   phone numbers, or WhatsApp number.

## Deploying to GitHub Pages

This repo (`kalpitech-website`) deploys via GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) on every push to `main`.
It's a project repo (not the special `<username>.github.io` root repo), since that
account's root repo already hosts a different site — the custom domain below is
what makes `kalpitech.com` work regardless.

One-time setup on GitHub:
1. Push this repo to `https://github.com/Gautamprakas/kalpitech-website`.
2. In the repo settings → **Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.

## Pointing kalpitech.com at GitHub Pages

A `public/CNAME` file (containing `kalpitech.com`) is already included, so GitHub
Pages will serve the site on your custom domain once DNS is configured:

1. At your domain registrar, add these DNS records for `kalpitech.com`:
   - `A` records pointing to GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional, for `www.kalpitech.com`) a `CNAME` record pointing to `Gautamprakas.github.io`
2. In the repo settings → **Pages** → **Custom domain**, enter `kalpitech.com` and save.
3. Enable **Enforce HTTPS** once GitHub finishes issuing the certificate (can take a few minutes to hours).
