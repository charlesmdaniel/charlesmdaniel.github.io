# Narrative Operating System — Deployment Steps

## 1. Replace your current site files
Upload every file in this folder to the GitHub repository that powers your site.

## 2. Publish with GitHub Pages
- Open the repository on GitHub
- Go to **Settings → Pages**
- Set the publishing source to the branch that contains these files
- Save

## 3. Set the custom domain
In **Settings → Pages**, enter:

`charlesmdaniel.com`

If GitHub is publishing from a branch, GitHub will create or update the `CNAME` file for you.

## 4. Update DNS at your domain registrar
For the apex domain `charlesmdaniel.com`, set `A` records to:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, create a `CNAME` record pointing to:

`<your-github-username>.github.io`

## 5. Enable HTTPS
After DNS resolves, go back to **Settings → Pages** and enable **Enforce HTTPS**.

## 6. Replace placeholders
Edit these items before final publish:
- social profile links in `contact.html`
- any wording you want to sharpen
- archive entries as real build logs
- project details as the simulator evolves
