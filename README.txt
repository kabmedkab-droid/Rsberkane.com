RS BERKANE — FREE GITHUB PAGES WEBSITE

Files:
- index.html: the responsive website
- CNAME: your custom domain (rsberkane.com)

Before publishing:
1. Replace placeholder news, fixtures, results, player names and contact email.
2. Use only club logos/photos you are allowed to publish.
3. Keep this repository public to use GitHub Pages on GitHub Free.

Publishing:
1. Create a GitHub repository named rsberkane-website (or another name).
2. Upload index.html and CNAME to the repository root.
3. Go to Settings > Pages.
4. Under Build and deployment, select Deploy from a branch, branch main, folder /(root), Save.
5. In Settings > Pages > Custom domain, enter rsberkane.com and save.
6. In Namecheap > Domain List > Manage rsberkane.com > Advanced DNS, add:
   A | Host @ | Value 185.199.108.153
   A | Host @ | Value 185.199.109.153
   A | Host @ | Value 185.199.110.153
   A | Host @ | Value 185.199.111.153
   CNAME | Host www | Value YOUR-GITHUB-USERNAME.github.io
   Replace YOUR-GITHUB-USERNAME with your actual GitHub username.
7. Remove conflicting A/AAAA/CNAME records for @ or www only if they point somewhere else and you no longer need them.
8. After DNS settles, return to Settings > Pages and enable Enforce HTTPS when available.

DNS propagation may take up to 24 hours. Do not share your Namecheap password with anyone.
