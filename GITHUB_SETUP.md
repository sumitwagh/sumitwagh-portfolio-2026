# Push this portfolio to GitHub

This folder is already a Git repository with your commits ready. You just need
to create an empty repo on GitHub and push to it.

## 1. Create an empty repo on GitHub
Go to https://github.com/new and create a repository (e.g. `portfolio` or
`sumitwagh.com`). **Do not** add a README, .gitignore, or license — keep it empty.

## 2. Connect and push
In a terminal, from inside this project folder:

```bash
# HTTPS (you'll be asked to sign in / paste a Personal Access Token)
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Or with SSH if you have keys set up:

```bash
git remote add origin git@github.com:<your-username>/<your-repo>.git
git push -u origin main
```

That's it — your code is on GitHub.

## If you downloaded the ZIP (no .git folder)
Then initialize first, then do step 2 above:

```bash
git init
git add -A
git commit -m "Initial commit: portfolio (React + Vite + Tailwind)"
git branch -M main
```

## Deploy after pushing (optional, recommended)
- **Vercel:** https://vercel.com/new → import the repo → framework preset **Vite** → Deploy.
  (A `vercel.json` with the SPA rewrite is already included.)
- **Netlify:** https://app.netlify.com → import the repo → build command `npm run build`,
  publish directory `dist`. (A `public/_redirects` is already included.)

## Notes
- `node_modules/` and `dist/` are git-ignored — GitHub only stores your source.
- Add your CV at `public/resume.pdf` and update links in `src/data/site.js` when ready.
